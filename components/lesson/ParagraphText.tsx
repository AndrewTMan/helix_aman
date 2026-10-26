type ParagraphTextProps = {
  text: string;
  className?: string;
  paragraphClassName?: string;
};

/**
 * Renders plain text with paragraph breaks (blank lines) and line breaks within a paragraph.
 */
export default function ParagraphText({
  text,
  className = "",
  paragraphClassName = "",
}: ParagraphTextProps) {
  const trimmed = text.trim();
  if (!trimmed) return null;

  const paragraphs = trimmed
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`whitespace-pre-line leading-relaxed ${paragraphClassName} ${
            index > 0 ? "mt-4" : ""
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
