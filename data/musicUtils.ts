import { musicUnits } from "./music";

export function getLessonNavigation(unitSlug: string, lessonSlug: string) {
  const unitIndex = musicUnits.findIndex(
    (u) => u.slug === unitSlug
  );

  if (unitIndex === -1) return null;

  const unit = musicUnits[unitIndex];

  const lessonIndex = unit.lessons.findIndex(
    (l) => l.slug === lessonSlug
  );

  if (lessonIndex === -1) return null;

  const prevLesson =
    lessonIndex > 0
      ? unit.lessons[lessonIndex - 1]
      : unitIndex > 0
      ? musicUnits[unitIndex - 1].lessons[
          musicUnits[unitIndex - 1].lessons.length - 1
        ]
      : null;

  const nextLesson =
    lessonIndex < unit.lessons.length - 1
      ? unit.lessons[lessonIndex + 1]
      : unitIndex < musicUnits.length - 1
      ? musicUnits[unitIndex + 1].lessons[0]
      : null;

  return {
    unit,
    prevLesson,
    nextLesson,
  };
}