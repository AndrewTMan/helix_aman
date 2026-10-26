import type { LessonContent } from "@/data/lessonContentTypes";
import lesson1 from "./lesson-1";
import lesson2 from "./lesson-2";
import lesson3 from "./lesson-3";
import lesson4 from "./lesson-4";
import lesson5 from "./lesson-5";

const lessons: Record<string, LessonContent> = {
  "lesson-1": lesson1,
  "lesson-2": lesson2,
  "lesson-3": lesson3,
  "lesson-4": lesson4,
  "lesson-5": lesson5,
};

export default lessons;
