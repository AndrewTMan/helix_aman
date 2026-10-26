"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";

type Lesson = {
  slug: string;
  title: string;
};

type Unit = {
  slug: string;
  title: string;
  lessons: Lesson[];
};

export default function CourseLayout({
  units,
  basePath,
  course,
  currentUnit,
  currentLesson,
  children,
}: {
  units: Unit[];
  basePath: string;
  course: CourseId;
  currentUnit?: string;
  currentLesson?: string;
  children: React.ReactNode;
}) {
  const theme = getCourseTheme(course);
  const [openUnits, setOpenUnits] = useState<Record<string, boolean>>(() =>
    currentUnit ? { [currentUnit]: true } : {}
  );

  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleUnit = (slug: string) => {
    setOpenUnits((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  useEffect(() => {
    const el = sidebarRef.current?.querySelector(`[data-active="true"]`);

    if (el) {
      el.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, [currentLesson]);

  const activeLessonBg =
    course === "biology"
      ? "bg-cyan-900/45 text-cyan-100 border-cyan-700/40"
      : "bg-amber-900/45 text-amber-100 border-amber-700/40";

  return (
    <div
      data-course={course}
      className={`flex min-h-screen bg-slate-950 text-white ${theme.bodyFont}`}
    >
      <aside
        ref={sidebarRef}
        className="w-72 lg:w-80 shrink-0 border-r border-slate-800/80 bg-slate-950/95 flex flex-col"
      >
        <div className="p-5 border-b border-slate-800/80">
          <Link
            href={basePath}
            className={`text-xs uppercase tracking-[0.15em] ${theme.accentMuted} hover:opacity-80 transition`}
          >
            {theme.label}
          </Link>
          <h2
            className={`mt-1 text-lg font-semibold ${theme.displayFont}`}
          >
            Course Contents
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {units.map((unit) => {
            const isOpen = openUnits[unit.slug];

            return (
              <div key={unit.slug} className="rounded-xl">
                <button
                  type="button"
                  onClick={() => toggleUnit(unit.slug)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition flex items-center justify-between gap-2 ${
                    currentUnit === unit.slug
                      ? "text-slate-100 bg-slate-900/80"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/50"
                  }`}
                >
                  <span className="line-clamp-2">{unit.title}</span>
                  <span className="text-slate-500 text-xs shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-1 ml-2 pl-2 border-l border-slate-800 space-y-0.5 pb-2">
                    {unit.lessons.map((lesson) => {
                      const active =
                        currentLesson === lesson.slug &&
                        currentUnit === unit.slug;

                      return (
                        <Link
                          key={lesson.slug}
                          href={`${basePath}/${unit.slug}/${lesson.slug}`}
                          data-active={active ? "true" : "false"}
                          className={`
                            block text-[0.9375rem] leading-snug px-3 py-2 rounded-lg border border-transparent transition
                            ${
                              active
                                ? `${activeLessonBg} font-medium`
                                : "text-slate-300 hover:text-white hover:bg-slate-900/40"
                            }
                          `}
                        >
                          {lesson.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-8 lg:py-10">
          {children}
        </div>
      </main>
    </div>
  );
}
