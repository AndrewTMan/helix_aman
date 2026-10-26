import Link from "next/link";

type Unit = {
  slug: string;
  title: string;
  lessons: {
    slug: string;
    title: string;
  }[];
};

export default function CourseSidebar({
  units,
  basePath,
}: {
  units: Unit[];
  basePath: string;
}) {
  return (
    <aside className="w-80 border-r border-slate-800 p-6 overflow-y-auto">

      <h2 className="font-bold text-xl mb-6">
        Course Contents
      </h2>

      {units.map((unit) => (
        <div key={unit.slug} className="mb-6">

          <h3 className="font-semibold text-slate-300">
            {unit.title}
          </h3>

          <div className="mt-2 space-y-2">

            {unit.lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`${basePath}/${unit.slug}/${lesson.slug}`}
                className="
                  block
                  text-sm
                  text-slate-400
                  hover:text-white
                "
              >
                {lesson.title}
              </Link>
            ))}

          </div>

        </div>
      ))}

    </aside>
  );
}