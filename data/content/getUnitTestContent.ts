import type { CourseId, AssessmentContent } from "@/data/lessonContentTypes";
import biologyUnitTests from "./biology/unit-tests";
import musicUnitTests from "./music/unit-tests";
import { defaultAssessmentContent } from "./defaultAssessment";

/**
 * UNIT TEST CONTENT
 * -----------------
 * Biology: data/content/biology/unit-{n}/unit-test.ts
 * Music:   data/content/music/unit-{n}/unit-test.ts
 *
 * Register each unit test in the course's unit-tests.ts file.
 */

const unitTestContent: Record<CourseId, Record<string, AssessmentContent>> = {
  biology: biologyUnitTests,
  music: musicUnitTests,
};

export function getUnitTestContent(
  course: CourseId,
  unitSlug: string
): AssessmentContent {
  const content = unitTestContent[course][unitSlug];

  if (!content) {
    return { ...defaultAssessmentContent };
  }

  return {
    ...defaultAssessmentContent,
    ...content,
    questions: content.questions ?? [],
  };
}
