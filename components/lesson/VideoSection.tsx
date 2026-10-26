import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";
import SectionHeader from "./SectionHeader";

type VideoSectionProps = {
  videoUrl?: string;
  course: CourseId;
};

export default function VideoSection({ videoUrl, course }: VideoSectionProps) {
  const theme = getCourseTheme(course);

  const placeholderBorder =
    course === "biology"
      ? "border-cyan-800/30 bg-cyan-950/10"
      : "border-amber-800/30 bg-amber-950/10";

  const iconBg =
    course === "biology" ? "bg-cyan-950/60" : "bg-amber-950/60";

  return (
    <section>
      <SectionHeader
        course={course}
        title="Video Lecture"
        subtitle="Watch the full lesson walkthrough"
      />

      {videoUrl ? (
        <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-xl">
          <iframe
            src={videoUrl}
            title="Lesson video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className={`aspect-video rounded-2xl border border-dashed ${placeholderBorder} flex flex-col items-center justify-center gap-3`}
        >
          <div
            className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center`}
          >
            <svg
              className={`w-7 h-7 ml-1 ${theme.accent}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className={`text-sm ${theme.accentMuted} ${theme.bodyFont}`}>
            Video lecture coming soon
          </p>
        </div>
      )}
    </section>
  );
}
