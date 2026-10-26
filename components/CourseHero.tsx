import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";

type CourseHeroProps = {
  course: CourseId;
  title: string;
  description: string;
  preface?: string;
};

export default function CourseHero({
  course,
  title,
  description,
  preface,
}: CourseHeroProps) {
  const theme = getCourseTheme(course);

  return (
    <div className="border-b border-slate-800 bg-slate-900/40">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <p
          className={`text-sm ${theme.accentMuted} ${theme.bodyFont} ${
            course === "music" ? "text-base" : ""
          }`}
        >
          {theme.label}
        </p>

        <h1
          className={`mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${theme.displayFont}`}
        >
          {title}
        </h1>

        {preface && (
          <p
            className={`mt-4 max-w-2xl leading-relaxed italic text-slate-400 ${theme.bodyFont} ${
              course === "music" ? "text-lg" : "text-base"
            }`}
          >
            {preface}
          </p>
        )}

        <p
          className={`${preface ? "mt-5" : "mt-4"} text-slate-400 max-w-2xl leading-relaxed ${theme.bodyFont} ${
            course === "music" ? "text-xl" : "text-lg"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
