import Link from "next/link";
import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";

interface Props {
  href: string;
  course: CourseId;
  unitTitle: string;
  questionCount?: number;
}

export default function UnitTestCard({
  href,
  course,
  unitTitle,
  questionCount,
}: Props) {
  const theme = getCourseTheme(course);

  const badgeBg =
    course === "biology"
      ? "bg-slate-950 text-cyan-600 border-slate-700"
      : "bg-slate-950 text-amber-600 border-slate-700";

  const borderAccent =
    course === "biology" ? "border-cyan-900/40" : "border-amber-900/40";

  return (
    <Link
      href={href}
      className={`flex flex-col justify-between min-h-[148px] p-5 bg-slate-900 border border-dashed ${borderAccent} rounded-lg hover:border-slate-600`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-md border text-xs font-bold ${badgeBg} ${theme.bodyFont}`}
        >
          Test
        </span>

        <span className={`text-xs ${theme.accentMuted} ${theme.bodyFont}`}>
          Unit test
        </span>
      </div>

      <div className="mt-4">
        <h3
          className={`font-semibold leading-snug text-white ${theme.displayFont} ${
            course === "music" ? "text-lg" : "text-base"
          }`}
        >
          {unitTitle}
        </h3>
        {questionCount !== undefined && questionCount > 0 && (
          <p className={`mt-2 text-sm ${theme.accentMuted} ${theme.bodyFont}`}>
            {questionCount} questions
          </p>
        )}
      </div>

      <div className="mt-4">
        <span className={`text-sm ${theme.accentMuted}`}>Take test</span>
      </div>
    </Link>
  );
}
