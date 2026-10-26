import type { CourseId } from "./lessonContentTypes";

export type CourseTheme = {
  id: CourseId;
  displayFont: string;
  bodyFont: string;
  accent: string;
  accentMuted: string;
  accentBorder: string;
  label: string;
};

export const courseThemes: Record<CourseId, CourseTheme> = {
  biology: {
    id: "biology",
    displayFont: "font-biology-display",
    bodyFont: "font-biology-body",
    accent: "text-cyan-600",
    accentMuted: "text-slate-400",
    accentBorder: "border-cyan-800/50",
    label: "Biology Olympiad",
  },
  music: {
    id: "music",
    displayFont: "font-music-display",
    bodyFont: "font-music-body",
    accent: "font-music-accent text-amber-600",
    accentMuted: "font-music-accent text-slate-400",
    accentBorder: "border-amber-800/50",
    label: "Music Theory",
  },
};

export function getCourseTheme(course: CourseId): CourseTheme {
  return courseThemes[course];
}
