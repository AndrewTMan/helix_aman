import CourseLayout from "@/components/CourseLayout";
import LessonContentView from "@/components/lesson/LessonContentView";
import LessonHero from "@/components/lesson/LessonHero";
import { biologyUnits } from "@/data/biology";
import { getLessonContent } from "@/data/content/getLessonContent";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ unit: string; lesson: string }>;
}) {
  const { unit, lesson } = await params;

  const currentUnit = biologyUnits.find((u) => u.slug === unit);
  const currentLesson = currentUnit?.lessons.find((l) => l.slug === lesson);

  if (!currentUnit || !currentLesson) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-10">
        Lesson not found
      </div>
    );
  }

  const content = getLessonContent("biology", unit, lesson);

  return (
    <CourseLayout
      units={biologyUnits}
      basePath="/biology"
      course="biology"
      currentUnit={unit}
      currentLesson={lesson}
    >
      <LessonHero
        course="biology"
        title={currentLesson.title}
        unitTitle={currentUnit.title}
        backHref={`/biology/${unit}`}
      />

      <LessonContentView content={content} course="biology" />
    </CourseLayout>
  );
}
