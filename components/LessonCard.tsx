import Link from "next/link";
import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";

interface Props {
  title: string;
  href: string;
  index: number;
  course: CourseId;
  isScoreStudy?: boolean;
}

export default function LessonCard({
  title,
  href,
  index,
  course,
  isScoreStudy = false,
}: Props) {
  const theme = getCourseTheme(course);

  const badgeBg =
    course === "biology"
      ? "bg-slate-950 text-cyan-600 border-slate-700"
      : "bg-slate-950 text-amber-600 border-slate-700";

  const titleSize = course === "music" ? "text-lg" : "text-base";

  return (
    <Link
      href={href}
      className="flex flex-col justify-between min-h-[148px] p-5 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-600"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-md border text-sm font-semibold ${badgeBg} ${theme.bodyFont}`}
        >
          {isScoreStudy ? "Sc" : index}
        </span>

        {isScoreStudy && (
          <span
            className={`text-xs ${theme.accentMuted} ${theme.bodyFont}`}
          >
            Score study
          </span>
        )}
      </div>

      <div className="mt-4">
        <h3
          className={`${titleSize} font-semibold leading-snug text-white line-clamp-3 ${theme.bodyFont}`}
        >
          {title}
        </h3>
      </div>

      <div className="mt-4">
        <span className={`text-sm ${theme.accentMuted}`}>Open lesson</span>
      </div>
    </Link>
  );
}
