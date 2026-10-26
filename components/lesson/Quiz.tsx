"use client";

import { useState } from "react";
import type { CourseId, QuizQuestion } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";
import SectionHeader from "./SectionHeader";
import ParagraphText from "./ParagraphText";

type QuizProps = {
  questions?: QuizQuestion[];
  course: CourseId;
  title?: string;
  subtitle?: string;
  emptyMessage?: string;
  /** "immediate" shows feedback on each answer; "submit" waits until the test is submitted. */
  mode?: "immediate" | "submit";
  submitLabel?: string;
};

type AnswerState = Record<string, number>;

export default function Quiz({
  questions = [],
  course,
  title = "Quiz",
  subtitle = "Test your understanding",
  emptyMessage = "Practice questions for this lesson will be added here.",
  mode = "immediate",
  submitLabel = "Submit test",
}: QuizProps) {
  const [answers, setAnswers] = useState<AnswerState>({});
  const [submitted, setSubmitted] = useState(false);
  const theme = getCourseTheme(course);
  const isSubmitMode = mode === "submit";

  const selectedBorder =
    course === "biology" ? "border-cyan-500 bg-cyan-950/30" : "border-amber-500 bg-amber-950/30";

  if (questions.length === 0) {
    return (
      <section>
        <SectionHeader course={course} title={title} subtitle={subtitle} />
        <div className="bg-slate-900/40 border border-dashed border-slate-700 rounded-2xl p-6">
          <p className={`text-slate-400 text-sm ${theme.bodyFont}`}>
            {emptyMessage}
          </p>
        </div>
      </section>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const correctCount = questions.filter(
    (q) => answers[q.id] === q.correctIndex
  ).length;
  const allAnswered = answeredCount === questions.length;
  const scorePercent = Math.round((correctCount / questions.length) * 100);
  const showResults = !isSubmitMode || submitted;

  return (
    <section>
      <div className="flex items-end justify-between gap-4">
        <div className="flex-1">
          <SectionHeader course={course} title={title} subtitle={subtitle} />
        </div>
        {isSubmitMode && submitted && (
          <p className={`text-sm shrink-0 pb-5 font-semibold ${theme.accent} ${theme.bodyFont}`}>
            {scorePercent}%
          </p>
        )}
        {!isSubmitMode && answeredCount > 0 && (
          <p className={`text-sm shrink-0 pb-5 ${theme.accentMuted} ${theme.bodyFont}`}>
            {correctCount} / {questions.length} correct
          </p>
        )}
        {isSubmitMode && !submitted && answeredCount > 0 && (
          <p className={`text-sm shrink-0 pb-5 ${theme.accentMuted} ${theme.bodyFont}`}>
            {answeredCount} / {questions.length} answered
          </p>
        )}
      </div>

      <div className="space-y-5">
        {questions.map((question, qIndex) => {
          const selected = answers[question.id];
          const hasSelected = selected !== undefined;
          const hasAnswered = hasSelected && showResults;
          const isCorrect = selected === question.correctIndex;

          return (
            <div
              key={question.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
            >
              {question.imageUrl && (
                <figure className="mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={question.imageUrl}
                    alt={question.imageAlt || "Question diagram"}
                    className="w-full max-w-2xl rounded-xl border border-slate-700/80"
                  />
                  {question.imageAlt && (
                    <figcaption
                      className={`mt-2 text-sm text-slate-500 italic ${theme.bodyFont}`}
                    >
                      {question.imageAlt}
                    </figcaption>
                  )}
                </figure>
              )}

              <div className={`mb-4 flex gap-2 ${theme.bodyFont}`}>
                <span className={`shrink-0 font-medium ${theme.accent}`}>
                  {qIndex + 1}.
                </span>
                <ParagraphText
                  text={question.question}
                  className="flex-1 min-w-0"
                  paragraphClassName="font-medium text-white text-[1.05rem]"
                />
              </div>

              <ul className="space-y-2">
                {question.options.map((option, oIndex) => {
                  const isSelected = selected === oIndex;
                  const isCorrectOption = oIndex === question.correctIndex;

                  let optionStyle =
                    "border-slate-700 hover:border-slate-600 hover:bg-slate-800/50";

                  if (hasAnswered) {
                    if (isCorrectOption) {
                      optionStyle =
                        "border-green-600 bg-green-950/40 text-green-300";
                    } else if (isSelected) {
                      optionStyle =
                        "border-red-600 bg-red-950/40 text-red-300";
                    } else {
                      optionStyle =
                        "border-slate-800 text-slate-500 opacity-60";
                    }
                  } else if (isSelected) {
                    optionStyle = selectedBorder;
                  }

                  const isLocked = isSubmitMode && submitted;

                  return (
                    <li key={oIndex}>
                      <button
                        type="button"
                        disabled={isLocked}
                        onClick={() =>
                          setAnswers((prev) => ({
                            ...prev,
                            [question.id]: oIndex,
                          }))
                        }
                        className={`w-full text-left px-4 py-3.5 rounded-xl border transition ${optionStyle} ${theme.bodyFont} ${
                          isLocked ? "cursor-default" : ""
                        }`}
                      >
                        <span className="text-slate-500 mr-2">
                          {String.fromCharCode(65 + oIndex)}.
                        </span>
                        {option}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {hasAnswered && (
                <div
                  className={`mt-4 px-4 py-3 rounded-xl text-sm ${
                    isCorrect
                      ? "bg-green-950/50 border border-green-800 text-green-300"
                      : "bg-red-950/50 border border-red-800 text-red-300"
                  }`}
                >
                  <p className={`font-medium ${theme.bodyFont}`}>
                    {isCorrect ? "Correct!" : "Not quite."}
                  </p>

                  {question.explanation && (
                    <div className={`mt-2 text-slate-300 ${theme.bodyFont}`}>
                      <ParagraphText
                        text={question.explanation}
                        paragraphClassName="text-sm"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isSubmitMode && !submitted && (
        <div className="mt-8 flex flex-col items-start gap-3">
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className={`px-6 py-3 rounded-xl font-medium transition ${
              allAnswered
                ? course === "biology"
                  ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                  : "bg-amber-600 hover:bg-amber-500 text-white"
                : "bg-slate-800 text-slate-500 cursor-not-allowed"
            } ${theme.bodyFont}`}
          >
            {submitLabel}
          </button>
          {!allAnswered && (
            <p className={`text-sm text-slate-500 ${theme.bodyFont}`}>
              Answer all {questions.length} questions to submit.
            </p>
          )}
        </div>
      )}

      {isSubmitMode && submitted && (
        <div
          className={`mt-8 px-6 py-5 rounded-2xl border ${
            course === "biology"
              ? "border-cyan-800/60 bg-cyan-950/30"
              : "border-amber-800/60 bg-amber-950/30"
          }`}
        >
          <p className={`text-2xl font-bold ${theme.accent} ${theme.displayFont}`}>
            {scorePercent}%
          </p>
          <p className={`mt-1 text-sm text-slate-400 ${theme.bodyFont}`}>
            {correctCount} of {questions.length} correct
          </p>
        </div>
      )}
    </section>
  );
}
