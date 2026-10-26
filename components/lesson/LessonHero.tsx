import Link from "next/link";
import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";

type LessonHeroProps = {
  course: CourseId;
  title: string;
  unitTitle: string;
  backHref: string;
};

export default function LessonHero({
  course,
  title,
  unitTitle,
  backHref,
}: LessonHeroProps) {
  const theme = getCourseTheme(course);

  return (
    <div className="-mx-6 lg:-mx-10 -mt-2 mb-10 border-b border-slate-800 pb-10">
      <Link
        href={backHref}
        className={`inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white ${theme.bodyFont}`}
      >
        ← Back to {unitTitle}
      </Link>

      <p
        className={`mt-6 text-sm ${theme.accentMuted} ${theme.bodyFont}`}
      >
        {unitTitle}
      </p>

      <h1
        className={`mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl ${theme.displayFont}`}
      >
        {title}
      </h1>
    </div>
  );
}
