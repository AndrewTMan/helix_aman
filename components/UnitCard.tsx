import Link from "next/link";
import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";

interface Props {
  title: string;
  href: string;
  lessons: number;
  unitNumber: number;
  course: CourseId;
}

export default function UnitCard({
  title,
  href,
  lessons,
  unitNumber,
  course,
}: Props) {
  const theme = getCourseTheme(course);

  return (
    <Link
      href={href}
      className="group block bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-600"
    >
      <div className="flex items-start gap-4">
        <span
          className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-md border border-slate-700 bg-slate-950 text-lg font-bold ${theme.accent} ${theme.displayFont}`}
        >
          {unitNumber}
        </span>

        <div className="min-w-0 flex-1">
          <h2
            className={`text-xl font-semibold leading-tight text-white ${theme.displayFont}`}
          >
            {title}
          </h2>

          <p className={`mt-3 text-sm ${theme.accentMuted} ${theme.bodyFont}`}>
            {lessons} {lessons === 1 ? "lesson" : "lessons"}
          </p>
        </div>
      </div>
    </Link>
  );
}
