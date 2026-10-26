import type { LessonContent } from "@/data/lessonContentTypes";
import unit1 from "./unit-1";
import unit2 from "./unit-2";
import unit3 from "./unit-3";

function withUnitPrefix(
  unitSlug: string,
  lessons: Record<string, LessonContent>
): Record<string, LessonContent> {
  return Object.fromEntries(
    Object.entries(lessons).map(([lessonSlug, content]) => [
      `${unitSlug}/${lessonSlug}`,
      content,
    ])
  );
}

const musicContent: Record<string, LessonContent> = {
  ...withUnitPrefix("unit-1", unit1),
  ...withUnitPrefix("unit-2", unit2),
  ...withUnitPrefix("unit-3", unit3),
};

export default musicContent;
