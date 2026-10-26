export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  /** Optional stimulus image shown above the question */
  imageUrl?: string;
  imageAlt?: string;
  explanation?: string;
};

export type Resource = {
  title: string;
  description?: string;
  url?: string;
};

export type LessonContent = {
  /** Optional decorative image shown beside lesson content on wide screens */
  sideImageUrl?: string;
  /** Short intro shown before the video. Use blank lines between paragraphs. */
  introduction?: string;
  videoUrl?: string;
  /**
   * Lesson notes. Supports lightweight markdown:
   * - ## Heading / ### Subheading
   * - **bold**
   * - - bullet lists
   * - ![alt text](https://your-image-url.jpg) for inline images
   */
  notes?: string;
  resources?: Resource[];
  quiz?: QuizQuestion[];
};

export type CourseId = "biology" | "music";

export type AssessmentContent = {
  title?: string;
  description?: string;
  questions: QuizQuestion[];
};
