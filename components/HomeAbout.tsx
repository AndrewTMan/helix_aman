import type { HomeContent, HomeSideImage } from "@/data/home";
import HomeImageCarousel from "@/components/HomeImageCarousel";

type HomeAboutProps = {
  content: HomeContent["about"];
  sideImages?: HomeSideImage[];
};

export default function HomeAbout({ content, sideImages }: HomeAboutProps) {
  return (
    <section className="border-b border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {content.heading}
            </h2>

            <p className="mt-5 text-lg text-slate-300 max-w-2xl leading-relaxed">
              {content.intro}
            </p>

            <div className="mt-10 space-y-8 max-w-2xl">
              {content.blocks.map((block) => (
                <div key={block.title}>
                  <h3 className="text-lg font-semibold text-white">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {sideImages && sideImages.length > 0 && (
            <HomeImageCarousel images={sideImages} />
          )}
        </div>
      </div>
    </section>
  );
}
