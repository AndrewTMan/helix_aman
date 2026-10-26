import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";
import SectionHeader from "./SectionHeader";
import ParagraphText from "./ParagraphText";

type IntroductionSectionProps = {
  introduction?: string;
  course: CourseId;
};

export default function IntroductionSection({
  introduction,
  course,
}: IntroductionSectionProps) {
  const theme = getCourseTheme(course);

  const panelBorder =
    course === "biology" ? "border-cyan-900/30" : "border-amber-900/30";

  const text =
    introduction?.trim() ||
    "A short introduction to this lesson will appear here.";

  const textClass = `text-slate-300 ${theme.bodyFont} ${
    course === "music" ? "text-xl" : "text-lg"
  }`;

  return (
    <section>
      <SectionHeader
        course={course}
        title="Introduction"
        subtitle="What this lesson covers"
      />

      <div
        className={`bg-slate-900/60 border ${panelBorder} rounded-2xl p-6 lg:p-8`}
      >
        <ParagraphText text={text} paragraphClassName={textClass} />
      </div>
    </section>
  );
}
