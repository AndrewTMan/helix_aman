import CourseLayout from "@/components/CourseLayout";
import AssessmentView from "@/components/AssessmentView";
import { musicUnits } from "@/data/music";
import { getUnitTestContent } from "@/data/content/getUnitTestContent";

export default async function UnitTestPage({
  params,
}: {
  params: Promise<{ unit: string }>;
}) {
  const { unit } = await params;

  const currentUnit = musicUnits.find((u) => u.slug === unit);

  if (!currentUnit) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-10">
        Unit not found
      </div>
    );
  }

  const content = getUnitTestContent("music", unit);
  const title = content.title ?? `${currentUnit.title} — Unit Test`;

  return (
    <CourseLayout
      units={musicUnits}
      basePath="/music"
      course="music"
      currentUnit={unit}
    >
      <AssessmentView
        course="music"
        title={title}
        description={content.description}
        backHref={`/music/${unit}`}
        backLabel={`Back to ${currentUnit.title}`}
        questions={content.questions}
        assessmentType="unit-test"
      />
    </CourseLayout>
  );
}
