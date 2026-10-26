import Link from "next/link";
import type { CourseId, QuizQuestion } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";
import Quiz from "@/components/lesson/Quiz";
import ParagraphText from "@/components/lesson/ParagraphText";

type AssessmentViewProps = {
  course: CourseId;
  title: string;
  description?: string;
  backHref: string;
  backLabel: string;
  questions: QuizQuestion[];
  assessmentType: "unit-test" | "final-exam";
};

export default function AssessmentView({
  course,
  title,
  description,
  backHref,
  backLabel,
  questions,
  assessmentType,
}: AssessmentViewProps) {
  const theme = getCourseTheme(course);

  const backHover =
    course === "biology" ? "hover:text-cyan-300" : "hover:text-amber-300";

  const label = assessmentType === "unit-test" ? "Unit Test" : "Final Exam";
  const quizTitle = assessmentType === "unit-test" ? "Unit Test" : "Final Exam";
  const quizSubtitle =
    assessmentType === "unit-test"
      ? "Answer all questions to assess your understanding of this unit"
      : "Comprehensive exam covering the full course";

  return (
    <>
      <Link
        href={backHref}
        className={`inline-flex text-sm text-slate-400 ${backHover} transition ${theme.bodyFont}`}
      >
        ← {backLabel}
      </Link>

      <p
        className={`mt-6 uppercase tracking-[0.18em] ${theme.accentMuted} ${theme.bodyFont} ${
          course === "music" ? "text-base" : "text-xs"
        }`}
      >
        {label}
      </p>

      <h1
        className={`mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl ${theme.displayFont}`}
      >
        {title}
      </h1>

      {description && (
        <ParagraphText
          text={description}
          className="mt-4 max-w-3xl"
          paragraphClassName={`text-slate-400 ${theme.bodyFont} ${
            course === "music" ? "text-xl" : "text-lg"
          }`}
        />
      )}

      <div className="mt-12">
        <Quiz
          course={course}
          questions={questions}
          title={quizTitle}
          subtitle={quizSubtitle}
          mode="submit"
          submitLabel={
            assessmentType === "unit-test" ? "Submit test" : "Submit exam"
          }
          emptyMessage={
            assessmentType === "unit-test"
              ? "Unit test questions will be added here."
              : "Final exam questions will be added here."
          }
        />
      </div>
    </>
  );
}
