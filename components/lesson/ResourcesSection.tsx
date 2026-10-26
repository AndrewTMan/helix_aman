import type { CourseId, Resource } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";
import SectionHeader from "./SectionHeader";

type ResourcesSectionProps = {
  resources?: Resource[];
  course: CourseId;
};

export default function ResourcesSection({
  resources,
  course,
}: ResourcesSectionProps) {
  const theme = getCourseTheme(course);
  const items = (resources ?? []).filter(
    (resource) => resource.title.trim() || resource.url?.trim()
  );

  const linkHover =
    course === "biology" ? "text-cyan-400 hover:text-cyan-300" : "text-amber-400 hover:text-amber-300";

  return (
    <section>
      <SectionHeader
        course={course}
        title="Additional Resources"
        subtitle="Readings, worksheets, and external links"
      />

      {items.length === 0 ? (
        <div className="bg-slate-900/40 border border-dashed border-slate-700 rounded-2xl p-6">
          <p className={`text-slate-400 text-sm ${theme.bodyFont}`}>
            Supplementary readings, worksheets, and links will be added here.
          </p>
        </div>
      ) : (
        <ul className="grid sm:grid-cols-2 gap-3">
          {items.map((resource, index) => (
            <li
              key={`${resource.title || "resource"}-${resource.url || index}`}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition"
            >
              {resource.url ? (
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium ${linkHover} transition ${theme.bodyFont}`}
                >
                  {resource.title} ↗
                </a>
              ) : (
                <p className={`font-medium text-white ${theme.bodyFont}`}>
                  {resource.title}
                </p>
              )}

              {resource.description && (
                <p className={`text-slate-400 text-sm mt-1.5 ${theme.bodyFont}`}>
                  {resource.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
