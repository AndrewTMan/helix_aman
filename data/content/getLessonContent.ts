import type { CourseId, LessonContent } from "@/data/lessonContentTypes";
import biologyContent from "./biology";
import musicContent from "./music";
import { defaultLessonContent } from "./defaults";

/**
 * LESSON CONTENT GUIDE
 * --------------------
 * One file per lesson — keep content split so no single file grows huge.
 *
 * Biology:  data/content/biology/unit-{n}/lesson-{n}.ts
 * Music:    data/content/music/unit-{n}/lesson-{n}.ts
 *
 * After creating a lesson file, register it in that unit's index.ts:
 *
 *   import lesson2 from "./lesson-2";
 *   const lessons = { "lesson-2": lesson2, ... };
 *
 * Fields:
 *   introduction: "Paragraph one.\n\nParagraph two."  — blank lines = new paragraph
 *
 * Quiz questions (also used in unit tests & final exams):
 *   imageUrl: "https://..."               — stimulus diagram above the question
 *   imageAlt: "Caption for the diagram"    — optional caption
 *
 * Images:
 *   sideImageUrl: "https://..."           — side decoration (wide screens)
 *   ![caption](https://...)               — inline in notes (own line)
 */

const courseContent: Record<CourseId, Record<string, LessonContent>> = {
  biology: biologyContent,
  music: musicContent,
};

export function getLessonContent(
  course: CourseId,
  unitSlug: string,
  lessonSlug: string
): LessonContent {
  const key = `${unitSlug}/${lessonSlug}`;
  const overrides = courseContent[course][key];

  if (!overrides) {
    return { ...defaultLessonContent };
  }

  return {
    ...defaultLessonContent,
    ...overrides,
    resources: overrides.resources ?? defaultLessonContent.resources,
    quiz: overrides.quiz ?? defaultLessonContent.quiz,
  };
}
