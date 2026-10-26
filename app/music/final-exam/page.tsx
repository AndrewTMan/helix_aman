import CourseLayout from "@/components/CourseLayout";
import AssessmentView from "@/components/AssessmentView";
import { musicUnits } from "@/data/music";
import { getFinalExamContent } from "@/data/content/getFinalExamContent";

export default function FinalExamPage() {
  const content = getFinalExamContent("music");
  const title = content.title ?? "Music Theory Final Exam";

  return (
    <CourseLayout
      units={musicUnits}
      basePath="/music"
      course="music"
    >
      <AssessmentView
        course="music"
        title={title}
        description={content.description}
        backHref="/music"
        backLabel="Back to Music Theory"
        questions={content.questions}
        assessmentType="final-exam"
      />
    </CourseLayout>
  );
}
