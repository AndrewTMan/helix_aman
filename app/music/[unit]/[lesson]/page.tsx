import CourseLayout from "@/components/CourseLayout";
import LessonContentView from "@/components/lesson/LessonContentView";
import LessonHero from "@/components/lesson/LessonHero";
import { musicUnits } from "@/data/music";
import { getLessonContent } from "@/data/content/getLessonContent";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ unit: string; lesson: string }>;
}) {
  const { unit, lesson } = await params;

  const currentUnit = musicUnits.find((u) => u.slug === unit);
  const currentLesson = currentUnit?.lessons.find((l) => l.slug === lesson);

  if (!currentUnit || !currentLesson) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-10">
        Lesson not found
      </div>
    );
  }

  const content = getLessonContent("music", unit, lesson);

  return (
    <CourseLayout
      units={musicUnits}
      basePath="/music"
      course="music"
      currentUnit={unit}
      currentLesson={lesson}
    >
      <LessonHero
        course="music"
        title={currentLesson.title}
        unitTitle={currentUnit.title}
        backHref={`/music/${unit}`}
      />

      <LessonContentView content={content} course="music" />
    </CourseLayout>
  );
}
