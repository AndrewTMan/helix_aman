import Link from "next/link";
import HomeAbout from "@/components/HomeAbout";
import { homeContent } from "@/data/home";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-16 lg:pb-20 border-b border-slate-800">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-3xl">
          Helix
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Free Biology Olympiad and Music Theory education for students with
          internet access around the world.
        </p>
      </section>

      <HomeAbout
        content={homeContent.about}
        sideImages={homeContent.aboutSideImages}
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Courses</h2>
          <p className="mt-3 text-slate-400 max-w-xl">
            Two curriculums. Choose a course to begin learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
          <Link
            href="/biology"
            className="block bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-slate-600"
          >
            <p className="font-biology-body text-sm text-cyan-600">
              USABO Preparation
            </p>
            <h3 className="font-biology-display mt-2 text-3xl font-semibold">
              Biology Olympiad
            </h3>
            <p className="font-biology-body mt-4 text-slate-400 leading-relaxed">
              Campbell Biology-based curriculum with 8 units, 56 lessons,
              quizzes, and exams.
            </p>
            <span className="inline-block mt-6 text-cyan-600">
              Enter course
            </span>
          </Link>

          <Link
            href="/music"
            className="block bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-slate-600"
          >
            <p className="font-music-body text-sm text-amber-600">
              Classical Composition
            </p>
            <h3 className="font-music-display mt-2 text-3xl font-semibold">
              Music Theory
            </h3>
            <p className="font-music-body mt-4 text-slate-300 leading-relaxed">
              Harmony, counterpoint, orchestration, score studies, and advanced
              theory.
            </p>
            <span className="inline-block mt-6 text-amber-600 text-lg">
              Enter course
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
