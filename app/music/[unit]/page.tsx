import Link from "next/link";
import Navbar from "@/components/Navbar";
import LessonCard from "@/components/LessonCard";
import UnitTestCard from "@/components/UnitTestCard";
import { musicUnits } from "@/data/music";
import { getCourseTheme } from "@/data/courseThemes";
import { getUnitTestContent } from "@/data/content/getUnitTestContent";

export default async function UnitPage({
  params,
}: {
  params: Promise<{ unit: string }>;
}) {
  const { unit } = await params;
  const theme = getCourseTheme("music");

  const unitIndex = musicUnits.findIndex((u) => u.slug === unit);
  const currentUnit = musicUnits[unitIndex];

  if (!currentUnit) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-8">
        <Navbar course="music" />
        <h1 className="text-2xl font-bold mt-6">Unit not found</h1>
      </main>
    );
  }

  const unitTest = getUnitTestContent("music", unit);

  return (
    <main data-course="music" className="min-h-screen bg-slate-950 text-white course-grid-bg">
      <Navbar course="music" />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <Link
          href="/music"
          className={`inline-flex text-sm text-slate-400 hover:text-amber-300 transition ${theme.bodyFont}`}
        >
          ← Back to Music Theory
        </Link>

        <div className="mt-6">
          <p
            className={`uppercase tracking-[0.2em] ${theme.accentMuted} ${theme.bodyFont} text-base`}
          >
            Unit {unitIndex + 1}
          </p>
          <h1
            className={`mt-2 text-4xl sm:text-5xl font-bold ${theme.displayFont}`}
          >
            {currentUnit.title}
          </h1>
          <p className={`mt-3 text-slate-400 ${theme.bodyFont}`}>
            {currentUnit.lessons.length} lessons and score studies
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentUnit.lessons.map((lesson, index) => (
            <LessonCard
              key={lesson.slug}
              title={lesson.title}
              index={index + 1}
              course="music"
              isScoreStudy={lesson.slug.startsWith("study-")}
              href={`/music/${currentUnit.slug}/${lesson.slug}`}
            />
          ))}

          <UnitTestCard
            href={`/music/${currentUnit.slug}/unit-test`}
            course="music"
            unitTitle={currentUnit.title}
            questionCount={unitTest.questions.length}
          />
        </div>
      </section>
    </main>
  );
}
