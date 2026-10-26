import type { CourseId, AssessmentContent } from "@/data/lessonContentTypes";
import biologyFinalExam from "./biology/final-exam";
import musicFinalExam from "./music/final-exam";
import { defaultAssessmentContent } from "./defaultAssessment";

/**
 * FINAL EXAM CONTENT
 * ------------------
 * Biology: data/content/biology/final-exam.ts
 * Music:   data/content/music/final-exam.ts
 */

const finalExamContent: Record<CourseId, AssessmentContent> = {
  biology: biologyFinalExam,
  music: musicFinalExam,
};

export function getFinalExamContent(course: CourseId): AssessmentContent {
  const content = finalExamContent[course];

  return {
    ...defaultAssessmentContent,
    ...content,
    questions: content.questions ?? [],
  };
}
