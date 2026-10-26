import Link from "next/link";
import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";

interface Props {
  href: string;
  course: CourseId;
  title: string;
  questionCount?: number;
}

export default function FinalExamCard({
  href,
  course,
  title,
  questionCount,
}: Props) {
  const theme = getCourseTheme(course);

  const borderStyle =
    course === "biology"
      ? "border-cyan-900/40 border-dashed"
      : "border-amber-900/40 border-dashed";

  return (
    <Link
      href={href}
      className={`group block bg-slate-900 border ${borderStyle} rounded-lg p-6 hover:border-slate-600`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-md border border-slate-700 bg-slate-950 text-xs font-bold ${theme.accent} ${theme.displayFont}`}
        >
          Exam
        </span>

        <div className="min-w-0 flex-1">
          <p
            className={`text-xs ${theme.accentMuted} ${theme.bodyFont}`}
          >
            Final exam
          </p>
          <h2
            className={`mt-1 text-xl font-semibold leading-tight text-white ${theme.displayFont}`}
          >
            {title}
          </h2>

          {questionCount !== undefined && questionCount > 0 && (
            <p className={`mt-3 text-sm ${theme.accentMuted} ${theme.bodyFont}`}>
              {questionCount} questions
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
