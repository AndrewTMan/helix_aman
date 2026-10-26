import CourseLayout from "@/components/CourseLayout";
import AssessmentView from "@/components/AssessmentView";
import { biologyUnits } from "@/data/biology";
import { getFinalExamContent } from "@/data/content/getFinalExamContent";

export default function FinalExamPage() {
  const content = getFinalExamContent("biology");
  const title = content.title ?? "Biology Olympiad Final Exam";

  return (
    <CourseLayout
      units={biologyUnits}
      basePath="/biology"
      course="biology"
    >
      <AssessmentView
        course="biology"
        title={title}
        description={content.description}
        backHref="/biology"
        backLabel="Back to Biology Olympiad"
        questions={content.questions}
        assessmentType="final-exam"
      />
    </CourseLayout>
  );
}
