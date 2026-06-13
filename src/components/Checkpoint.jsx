import { useState } from 'react';

// 2–3 questions that must all be answered correctly to unlock the next level.
export default function Checkpoint({ questions, onPassed }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every((_, i) => answers[i] !== undefined);
  const correct = questions.filter((q, i) => answers[i] === q.answer).length;
  const passed = submitted && correct === questions.length;

  function submit() {
    setSubmitted(true);
    if (correct === questions.length) onPassed?.();
  }

  return (
    <div className="space-y-5">
      {questions.map((q, qi) => (
        <div key={qi} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
          <p className="font-medium text-slate-800 dark:text-slate-100">{qi + 1}. {q.q}</p>
          <div className="mt-3 space-y-2">
            {q.options.map((opt, oi) => {
              const chosen = answers[qi] === oi;
              const isAnswer = q.answer === oi;
              let cls = 'border-slate-200 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500';
              if (submitted && isAnswer) cls = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20';
              else if (submitted && chosen && !isAnswer) cls = 'border-rose-400 bg-rose-50 dark:bg-rose-900/20';
              else if (chosen) cls = 'border-sky-400 bg-sky-50 dark:bg-sky-900/20';
              return (
                <button
                  key={oi}
                  disabled={submitted}
                  onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                  className={`block w-full rounded-lg border px-4 py-2 text-left text-sm text-slate-800 transition disabled:cursor-default dark:text-slate-100 ${cls}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted && <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{q.explain}</p>}
        </div>
      ))}

      {!passed && (
        <button
          onClick={submit}
          disabled={!allAnswered}
          className="rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {submitted ? 'Check again' : 'Check my answers'}
        </button>
      )}

      {submitted && !passed && (
        <p className="text-sm text-rose-600 dark:text-rose-400">
          {correct} of {questions.length} correct — fix the highlighted ones and check again.
        </p>
      )}
      {passed && (
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
          ✓ All correct — level cleared! The next stop is unlocked below.
        </p>
      )}
    </div>
  );
}
