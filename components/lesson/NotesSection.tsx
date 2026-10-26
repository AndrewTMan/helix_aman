import type { CourseId } from "@/data/lessonContentTypes";
import { getCourseTheme } from "@/data/courseThemes";
import SectionHeader from "./SectionHeader";

type NotesSectionProps = {
  notes?: string;
  course: CourseId;
};

const IMAGE_PATTERN = /^!\[([^\]]*)\]\(([^)]+)\)$/;

type NotesBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "list-item"; text: string }
  | { type: "image"; alt: string; src: string };

function parseNotes(notes: string): NotesBlock[] {
  const blocks: NotesBlock[] = [];
  let paragraphLines: string[] = [];

  const flushParagraph = () => {
    if (paragraphLines.length === 0) return;
    blocks.push({ type: "paragraph", text: paragraphLines.join("\n") });
    paragraphLines = [];
  };

  for (const line of notes.split("\n")) {
    const trimmed = line.trim();

    if (trimmed === "") {
      flushParagraph();
      continue;
    }

    const imageMatch = trimmed.match(IMAGE_PATTERN);
    if (imageMatch) {
      flushParagraph();
      blocks.push({
        type: "image",
        alt: imageMatch[1],
        src: imageMatch[2],
      });
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      blocks.push({ type: "heading2", text: line.slice(3) });
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      blocks.push({ type: "heading3", text: line.slice(4) });
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      blocks.push({ type: "list-item", text: line.slice(2) });
      continue;
    }

    paragraphLines.push(line);
  }

  flushParagraph();
  return blocks;
}

function formatInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderBlock(block: NotesBlock, index: number, course: CourseId) {
  const theme = getCourseTheme(course);
  const textColor =
    course === "music" ? "text-slate-200" : "text-slate-300";

  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className={`whitespace-pre-line leading-relaxed ${textColor} ${theme.bodyFont}`}
        >
          {formatInline(block.text)}
        </p>
      );
    case "heading2":
      return (
        <h3
          key={index}
          className={`text-xl font-semibold text-white mt-8 mb-3 first:mt-0 ${theme.displayFont}`}
        >
          {block.text}
        </h3>
      );
    case "heading3":
      return (
        <h4
          key={index}
          className={`text-lg font-semibold text-white mt-6 mb-2 ${theme.displayFont}`}
        >
          {block.text}
        </h4>
      );
    case "list-item":
      return (
        <li
          key={index}
          className={`${textColor} ml-4 list-disc ${theme.bodyFont}`}
        >
          {formatInline(block.text)}
        </li>
      );
    case "image":
      return (
        <figure key={index} className="my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt || "Lesson illustration"}
            className="w-full rounded-xl border border-slate-700/80"
          />
          {block.alt && (
            <figcaption
              className={`mt-2 text-center text-sm text-slate-500 italic ${theme.bodyFont}`}
            >
              {block.alt}
            </figcaption>
          )}
        </figure>
      );
  }
}

export default function NotesSection({ notes, course }: NotesSectionProps) {
  const theme = getCourseTheme(course);
  const blocks = parseNotes(notes ?? "");

  const panelBorder =
    course === "biology" ? "border-cyan-900/30" : "border-amber-900/30";

  const rendered: React.ReactNode[] = [];
  let listItems: NotesBlock[] = [];
  let blockIndex = 0;

  const flushList = () => {
    if (listItems.length === 0) return;
    rendered.push(
      <ul key={`list-${blockIndex}`} className="space-y-1">
        {listItems.map((item, i) =>
          renderBlock(item, blockIndex + i, course)
        )}
      </ul>
    );
    blockIndex += listItems.length;
    listItems = [];
  };

  for (const block of blocks) {
    if (block.type === "list-item") {
      listItems.push(block);
      continue;
    }

    flushList();
    rendered.push(renderBlock(block, blockIndex, course));
    blockIndex++;
  }

  flushList();

  return (
    <section>
      <SectionHeader course={course} title="Notes" />

      <div
        className={`bg-slate-900/60 border ${panelBorder} rounded-2xl p-6 lg:p-8`}
      >
        <div
          className={`space-y-4 ${course === "music" ? "text-xl" : "text-[1.05rem]"} ${theme.bodyFont}`}
        >
          {rendered}
        </div>
      </div>
    </section>
  );
}
