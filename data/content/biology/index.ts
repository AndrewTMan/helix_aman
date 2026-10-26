import type { LessonContent } from "@/data/lessonContentTypes";
import unit1 from "./unit-1";
import unit2 from "./unit-2";
import unit3 from "./unit-3";
import unit4 from "./unit-4";
import unit5 from "./unit-5";
import unit6 from "./unit-6";
import unit7 from "./unit-7";
import unit8 from "./unit-8";

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

const biologyContent: Record<string, LessonContent> = {
  ...withUnitPrefix("unit-1", unit1),
  ...withUnitPrefix("unit-2", unit2),
  ...withUnitPrefix("unit-3", unit3),
  ...withUnitPrefix("unit-4", unit4),
  ...withUnitPrefix("unit-5", unit5),
  ...withUnitPrefix("unit-6", unit6),
  ...withUnitPrefix("unit-7", unit7),
  ...withUnitPrefix("unit-8", unit8),
};

export default biologyContent;
