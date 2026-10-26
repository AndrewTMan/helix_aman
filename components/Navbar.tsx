import Link from "next/link";
import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";

type NavbarProps = {
  course?: CourseId;
};

export default function Navbar({ course }: NavbarProps) {
  const theme = course ? getCourseTheme(course) : null;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`text-lg font-semibold tracking-tight ${
            theme ? theme.displayFont : ""
          }`}
        >
          Helix
        </Link>

        <nav className="flex gap-1 sm:gap-2">
          <Link
            href="/biology"
            className={`px-3 py-1.5 rounded-md text-sm ${
              course === "biology"
                ? "bg-slate-800 text-cyan-600 font-medium"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Biology
          </Link>

          <Link
            href="/music"
            className={`px-3 py-1.5 rounded-md ${
              course === "music" ? "text-base" : "text-sm"
            } ${
              course === "music"
                ? "bg-slate-800 text-amber-600 font-medium"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Music Theory
          </Link>
        </nav>
      </div>
    </header>
  );
}
