import Link from "next/link";
import Navbar from "@/components/Navbar";
import LessonCard from "@/components/LessonCard";
import UnitTestCard from "@/components/UnitTestCard";
import { biologyUnits } from "@/data/biology";
import { getCourseTheme } from "@/data/courseThemes";
import { getUnitTestContent } from "@/data/content/getUnitTestContent";

export default async function UnitPage({
  params,
}: {
  params: Promise<{ unit: string }>;
}) {
  const { unit } = await params;
  const theme = getCourseTheme("biology");

  const unitIndex = biologyUnits.findIndex((u) => u.slug === unit);
  const currentUnit = biologyUnits[unitIndex];

  if (!currentUnit) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-8">
        <Navbar course="biology" />
        <h1 className="text-2xl font-bold mt-6">Unit not found</h1>
      </main>
    );
  }

  const unitTest = getUnitTestContent("biology", unit);

  return (
    <main className="min-h-screen bg-slate-950 text-white course-grid-bg">
      <Navbar course="biology" />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <Link
          href="/biology"
          className={`inline-flex text-sm text-slate-400 hover:text-cyan-300 transition ${theme.bodyFont}`}
        >
          ← Back to Biology Olympiad
        </Link>

        <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p
              className={`text-xs uppercase tracking-[0.2em] ${theme.accentMuted} ${theme.bodyFont}`}
            >
              Unit {unitIndex + 1}
            </p>
            <h1
              className={`mt-2 text-4xl sm:text-5xl font-bold ${theme.displayFont}`}
            >
              {currentUnit.title}
            </h1>
            <p className={`mt-3 text-slate-400 ${theme.bodyFont}`}>
              {currentUnit.lessons.length} lessons in this unit
            </p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentUnit.lessons.map((lesson, index) => (
            <LessonCard
              key={lesson.slug}
              title={lesson.title}
              index={index + 1}
              course="biology"
              href={`/biology/${currentUnit.slug}/${lesson.slug}`}
            />
          ))}

          <UnitTestCard
            href={`/biology/${currentUnit.slug}/unit-test`}
            course="biology"
            unitTitle={currentUnit.title}
            questionCount={unitTest.questions.length}
          />
        </div>
      </section>
    </main>
  );
}
