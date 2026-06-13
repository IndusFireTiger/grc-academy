import { useState } from 'react';

// The signature "aha" toy. Drag sliders → live risk score, a green→red heat-map cell,
// and an Approve/Decline verdict that flips as you move likelihood and consequence.
// Deliberately transparent (no real model) so a non-specialist *feels* likelihood × impact.

const rupee = (n) => '₹' + n.toLocaleString('en-IN');
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

const LIKELIHOOD_LABELS = ['Rare', 'Unlikely', 'Possible', 'Likely'];
const IMPACT_LABELS = ['Minor', 'Moderate', 'Major', 'Severe'];

// Heat colours by combined severity (row + col, 0..6).
const HEAT = [
  'bg-emerald-500', 'bg-emerald-400', 'bg-lime-400',
  'bg-amber-400', 'bg-orange-400', 'bg-rose-400', 'bg-rose-600',
];

export default function ApprovalDial({ title, prompt }) {
  const [income, setIncome] = useState(60000); // monthly, ₹
  const [missed, setMissed] = useState(2); // missed payments, 0–6
  const [loan, setLoan] = useState(150000); // loan amount, ₹
  const [onTimeRent, setOnTimeRent] = useState(60); // alt-data signal, 0–100

  // --- transparent scoring ---
  const ratio = loan / Math.max(income, 1); // loan-to-monthly-income
  const likelihood = clamp(10 + missed * 14 - (onTimeRent / 100) * 15, 0, 100);
  const impact = clamp((loan / 500000) * 100, 0, 100);
  let score = clamp(15 + missed * 12 + Math.min(ratio * 2.5, 40) - (onTimeRent / 100) * 20, 0, 100);
  score = Math.round(score);

  const lRow = Math.min(3, Math.floor(likelihood / 25)); // 0..3
  const iCol = Math.min(3, Math.floor(impact / 25)); // 0..3

  const verdict =
    score < 35 ? { label: 'Approve', cls: 'bg-emerald-600', note: 'Low risk — lend with confidence.' }
    : score <= 65 ? { label: 'Review', cls: 'bg-amber-500', note: 'Borderline — shrink the loan, ask for security, or look deeper.' }
    : { label: 'Decline', cls: 'bg-rose-600', note: 'Risk too high — say no, or change the terms until it isn’t.' };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      {title && <h3 className="font-semibold text-slate-800 dark:text-slate-100">{title}</h3>}
      {prompt && <p className="mt-1 text-slate-600 dark:text-slate-300">{prompt}</p>}

      <div className="mt-5 grid gap-6 md:grid-cols-2">
        {/* Sliders */}
        <div className="space-y-5">
          <Slider label="Borrower’s monthly income" value={rupee(income)} min={10000} max={200000} step={5000} raw={income} onChange={setIncome} hint="Higher income → more capacity to repay" />
          <Slider label="Missed payments (last 12 months)" value={String(missed)} min={0} max={6} step={1} raw={missed} onChange={setMissed} hint="Track record drives likelihood of default" />
          <Slider label="Loan amount requested" value={rupee(loan)} min={10000} max={500000} step={10000} raw={loan} onChange={setLoan} hint="Bigger loan → bigger consequence if it defaults" />
          <Slider label="Rent paid on time (alt-data signal)" value={onTimeRent + '%'} min={0} max={100} step={5} raw={onTimeRent} onChange={setOnTimeRent} hint="A clue traditional credit scores miss (see Level 3)" />
        </div>

        {/* Readout: score + heat map + verdict */}
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-100 p-4 text-center dark:bg-slate-800">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Risk score</div>
            <div className="text-4xl font-bold tabular-nums text-slate-800 dark:text-slate-100">{score}</div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-300 dark:bg-slate-700">
              <div className={`h-full ${score < 35 ? 'bg-emerald-500' : score <= 65 ? 'bg-amber-500' : 'bg-rose-600'}`} style={{ width: score + '%' }} />
            </div>
          </div>

          {/* Heat map: likelihood (rows, top = high) × impact (cols) */}
          <div>
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Risk heat map</div>
            <div className="flex gap-2">
              <div className="flex flex-col justify-between py-1 text-[10px] text-slate-400">
                <span>↑ likely</span><span>rare</span>
              </div>
              <div className="grid flex-1 grid-cols-4 gap-1">
                {[3, 2, 1, 0].map((row) =>
                  [0, 1, 2, 3].map((col) => {
                    const active = row === lRow && col === iCol;
                    return (
                      <div
                        key={`${row}-${col}`}
                        className={`aspect-square rounded ${HEAT[row + col]} ${active ? 'ring-4 ring-slate-900 dark:ring-white' : 'opacity-40'} transition-all`}
                        title={`${LIKELIHOOD_LABELS[row]} × ${IMPACT_LABELS[col]}`}
                      />
                    );
                  })
                )}
              </div>
            </div>
            <div className="mt-1 flex justify-between pl-7 text-[10px] text-slate-400">
              <span>minor impact</span><span>severe →</span>
            </div>
            <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
              {LIKELIHOOD_LABELS[lRow]} default × {IMPACT_LABELS[iCol]} impact
            </p>
          </div>

          <div className={`rounded-lg ${verdict.cls} px-4 py-3 text-center text-white`}>
            <div className="text-lg font-bold">{verdict.label}</div>
            <div className="text-xs opacity-90">{verdict.note}</div>
          </div>
        </div>
      </div>

      <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500 dark:bg-slate-800/50 dark:text-slate-400">
        Try this: max out “missed payments” and watch the cell climb to red. Now drop the loan
        amount — same borrower, but the consequence shrinks and the verdict can flip back. That’s
        <strong> likelihood × consequence</strong>, live.
      </p>
    </div>
  );
}

function Slider({ label, value, min, max, step, raw, onChange, hint }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</label>
        <span className="text-sm font-semibold tabular-nums text-slate-900 dark:text-slate-100">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-emerald-600"
      />
      {hint && <p className="text-[11px] text-slate-400">{hint}</p>}
    </div>
  );
}
