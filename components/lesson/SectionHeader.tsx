import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";

type SectionHeaderProps = {
  course: CourseId;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({
  course,
  title,
  subtitle,
}: SectionHeaderProps) {
  const theme = getCourseTheme(course);
  const barColor = course === "biology" ? "bg-cyan-500" : "bg-amber-500";

  return (
    <div className="mb-5">
      <div className="flex items-center gap-3">
        <div className={`w-1 h-7 rounded-full ${barColor}`} />
        <h2
          className={`font-semibold ${theme.displayFont} ${
            course === "music" ? "text-3xl" : "text-2xl"
          }`}
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p
          className={`mt-2 ml-4 text-slate-400 ${theme.bodyFont} ${
            course === "music" ? "text-base opacity-90" : "text-sm"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
