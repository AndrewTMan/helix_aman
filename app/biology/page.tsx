import Navbar from "@/components/Navbar";
import UnitCard from "@/components/UnitCard";
import FinalExamCard from "@/components/FinalExamCard";
import CourseHero from "@/components/CourseHero";
import { biologyUnits } from "@/data/biology";
import { getFinalExamContent } from "@/data/content/getFinalExamContent";

export default function BiologyPage() {
  const finalExam = getFinalExamContent("biology");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar course="biology" />

      <CourseHero
        course="biology"
        title="Biology Olympiad"
        description="A complete Campbell Biology curriculum designed for USABO preparation: 8 units, 56 lessons, unit tests, and a final exam."
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-biology-display text-2xl font-semibold">
              Units
            </h2>
            <p className="font-biology-body mt-1 text-slate-400">
              Select a unit to browse its lessons
            </p>
          </div>
          <p className="font-biology-body text-sm text-slate-500 shrink-0">
            {biologyUnits.length} units
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {biologyUnits.map((unit, index) => (
            <UnitCard
              key={unit.slug}
              title={unit.title}
              lessons={unit.lessons.length}
              unitNumber={index + 1}
              course="biology"
              href={`/biology/${unit.slug}`}
            />
          ))}
        </div>

        <div className="mt-5">
          <FinalExamCard
            href="/biology/final-exam"
            course="biology"
            title={finalExam.title ?? "Biology Olympiad Final Exam"}
            questionCount={finalExam.questions.length}
          />
        </div>
      </section>
    </main>
  );
}
