import type { LessonContent } from "@/data/lessonContentTypes";
import lesson1 from "./lesson-1";
import lesson2 from "./lesson-2";

const lessons: Record<string, LessonContent> = {
  "lesson-1": lesson1,
  "lesson-2": lesson2,
};

export default lessons;
