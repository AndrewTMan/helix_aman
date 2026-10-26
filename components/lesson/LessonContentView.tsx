import type { CourseId, LessonContent } from "@/data/lessonContentTypes";
import IntroductionSection from "./IntroductionSection";
import VideoSection from "./VideoSection";
import NotesSection from "./NotesSection";
import ResourcesSection from "./ResourcesSection";
import Quiz from "./Quiz";

type LessonContentViewProps = {
  content: LessonContent;
  course: CourseId;
};

export default function LessonContentView({
  content,
  course,
}: LessonContentViewProps) {
  return (
    <div className="relative">
      {content.sideImageUrl && (
        <div
          className="hidden xl:block pointer-events-none absolute -right-4 top-0 w-40 opacity-[0.12]"
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={content.sideImageUrl}
            alt=""
            className="w-full rounded-2xl"
          />
        </div>
      )}

      <div className="space-y-14">
        <IntroductionSection
          introduction={content.introduction}
          course={course}
        />
        <VideoSection videoUrl={content.videoUrl} course={course} />
        <NotesSection notes={content.notes} course={course} />
        {course === "biology" && (
          <ResourcesSection resources={content.resources} course={course} />
        )}
        <Quiz questions={content.quiz} course={course} />
      </div>
    </div>
  );
}
