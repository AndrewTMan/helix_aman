import Navbar from "@/components/Navbar";
import UnitCard from "@/components/UnitCard";
import FinalExamCard from "@/components/FinalExamCard";
import CourseHero from "@/components/CourseHero";
import { musicUnits } from "@/data/music";
import { getCourseTheme } from "@/data/courseThemes";
import { getFinalExamContent } from "@/data/content/getFinalExamContent";

export default function MusicPage() {
  const theme = getCourseTheme("music");
  const finalExam = getFinalExamContent("music");

  return (
    <main data-course="music" className="min-h-screen bg-slate-950 text-white">
      <Navbar course="music" />

      <CourseHero
        course="music"
        title="Music Theory"
        preface="Before beginning this course, you should have a certain degree of preliminary knowledge. Students should already have experience with the fine arts and playing an instrument for at least one year. You should know all note names and be familiar with common rhythm types."
        description="Harmony, counterpoint, orchestration, score studies, and advanced theory, from fundamentals to analysis, with unit tests and a final exam."
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-music-display text-3xl font-semibold">
              Units
            </h2>
            <p className="font-music-body mt-2 text-slate-300">
              Select a unit to browse lessons and score studies
            </p>
          </div>
          <p className={`font-music-accent shrink-0 ${theme.accentMuted}`}>
            {musicUnits.length} units
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {musicUnits.map((unit, index) => (
            <UnitCard
              key={unit.slug}
              title={unit.title}
              lessons={unit.lessons.length}
              unitNumber={index + 1}
              course="music"
              href={`/music/${unit.slug}`}
            />
          ))}
        </div>

        <div className="mt-5">
          <FinalExamCard
            href="/music/final-exam"
            course="music"
            title={finalExam.title ?? "Music Theory Final Exam"}
            questionCount={finalExam.questions.length}
          />
        </div>
      </section>
    </main>
  );
}
