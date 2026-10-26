import { biologyUnits } from "./biology";

export function getLessonNavigation(unitSlug: string, lessonSlug: string) {
  const unitIndex = biologyUnits.findIndex(
    (u) => u.slug === unitSlug
  );

  if (unitIndex === -1) return null;

  const unit = biologyUnits[unitIndex];

  const lessonIndex = unit.lessons.findIndex(
    (l) => l.slug === lessonSlug
  );

  if (lessonIndex === -1) return null;

  const prevLesson =
    lessonIndex > 0
      ? unit.lessons[lessonIndex - 1]
      : unitIndex > 0
      ? biologyUnits[unitIndex - 1].lessons[
          biologyUnits[unitIndex - 1].lessons.length - 1
        ]
      : null;

  const nextLesson =
    lessonIndex < unit.lessons.length - 1
      ? unit.lessons[lessonIndex + 1]
      : unitIndex < biologyUnits.length - 1
      ? biologyUnits[unitIndex + 1].lessons[0]
      : null;

  return {
    unit,
    prevLesson,
    nextLesson,
  };
}