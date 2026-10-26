import CourseLayout from "@/components/CourseLayout";
import AssessmentView from "@/components/AssessmentView";
import { biologyUnits } from "@/data/biology";
import { getUnitTestContent } from "@/data/content/getUnitTestContent";

export default async function UnitTestPage({
  params,
}: {
  params: Promise<{ unit: string }>;
}) {
  const { unit } = await params;

  const currentUnit = biologyUnits.find((u) => u.slug === unit);

  if (!currentUnit) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-10">
        Unit not found
      </div>
    );
  }

  const content = getUnitTestContent("biology", unit);
  const title = content.title ?? `${currentUnit.title} — Unit Test`;

  return (
    <CourseLayout
      units={biologyUnits}
      basePath="/biology"
      course="biology"
      currentUnit={unit}
    >
      <AssessmentView
        course="biology"
        title={title}
        description={content.description}
        backHref={`/biology/${unit}`}
        backLabel={`Back to ${currentUnit.title}`}
        questions={content.questions}
        assessmentType="unit-test"
      />
    </CourseLayout>
  );
}
