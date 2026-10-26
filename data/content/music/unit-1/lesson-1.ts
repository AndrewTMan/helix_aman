import type { LessonContent } from "@/data/lessonContentTypes";

const content: LessonContent = {
  introduction: `
  
  This lesson delves into the very basics of music theory. It discusses intervals, minor and major scales, and lastly the circle of fifths and how to understand and memorize the keys. A big part of this lesson's topics should be memorized and overall this is a very basic foundational lesson to music theory as a whole.

  `,
  videoUrl: "https://www.youtube.com/embed/VPZoRM6hj6c?si=PtwJoGoAYsjoTnqc",
  notes: `
The following notes are a basic synopsis of the ideas talked about in the video. I recommend you read them in order to fully review the ideas you just listened to and also just in case I missed any topics or glazed over them.

## Intervals

An **interval** is the distance between two pitches, measured in **half steps** (semitones).

### Interval Sizes

- **Minor 2nd** — 1 half step
- **Major 2nd** — 2 half steps
- **Minor 3rd** — 3 half steps
- **Major 3rd** — 4 half steps
- **Perfect 4th** — 5 half steps
- **Tritone** — 6 half steps
- **Perfect 5th** — 7 half steps
- **Minor 6th** — 8 half steps
- **Major 6th** — 9 half steps
- **Minor 7th** — 10 half steps
- **Major 7th** — 11 half steps
- **Octave** — 12 half steps

### Interval Qualities

- **Augmented** — raised by 1 half step
- **Diminished** — lowered by 1 half step
- **Tritone** — an augmented 4th or a diminished 5th
- **Enharmonic** — same pitch, different spelling

## Scales

### Major Scale

**Pattern:** W – W – H – W – W – W – H

(W = whole step, H = half step)

### Natural Minor

**Pattern:** W – H – W – W – H – W – W

### Harmonic Minor

Natural minor with a **raised 7th**.

### Melodic Minor

- **Ascending** — raised 6th and 7th
- **Descending** — natural minor

## Relative Major and Minor

Every major key has a **relative minor** (and vice versa) that shares the same key signature.

- **Major → relative minor** — down a minor 3rd
- **Minor → relative major** — up a minor 3rd

### Examples

- **C major** → **A minor**
- **C minor** → **E♭ major**

Relative major and minor keys always share the same key signature.

## Circle of Fifths

Each step around the circle is a **perfect fifth**. The circle also shows relative minor keys and enharmonic equivalents.

### Clockwise — Increasing Sharps

**Key progression:** C → G → D → A → E → B → F♯ → C♯

**Number of sharps:**

- **C** — 0
- **G** — 1
- **D** — 2
- **A** — 3
- **E** — 4
- **B** — 5
- **F♯** — 6
- **C♯** — 7

### Counterclockwise — Increasing Flats

**Key progression:** C → F → B♭ → E♭ → A♭ → D♭ → G♭ → C♭

**Number of flats:**

- **C** — 0
- **F** — 1
- **B♭** — 2
- **E♭** — 3
- **A♭** — 4
- **D♭** — 5
- **G♭** — 6
- **C♭** — 7

## Key Identification

When a key signature could represent either a major or minor key:

- Check the **beginning and ending notes/chords** — the tonic is often found at the start or end
- **Accidentals** may indicate minor because of raised 6th/7th scale degrees
- Accidentals alone do **not** prove a piece is minor, especially when **modulation** occurs
  `,
  quiz: [
    {
      id: "q1",
      question:
        "How many half steps are in a major 3rd?",
      options: ["2", "3", "4", "5"],
      correctIndex: 2,
    },
    {
      id: "q2",
      question:
        "Which statement about a tritone is correct according to the notes?",
      options: [
        "It spans 5 half steps and is always called a perfect 4th",
        "It spans 6 half steps and can be spelled as an augmented 4th or diminished 5th",
        "It spans 7 half steps and is enharmonic with an octave",
        "It spans 12 half steps and equals one octave",
      ],
      correctIndex: 1,
    },
    {
      id: "q3",
      question:
        "Which whole-step and half-step pattern represents a major scale?",
      options: [
        "W – H – W – W – H – W – W",
        "W – W – H – W – W – W – H",
        "W – W – W – H – W – W – H",
        "H – W – W – H – W – W – W",
      ],
      correctIndex: 1,
    },
    {
      id: "q4",
      question:
        "Which pattern correctly describes the natural minor scale?",
      options: [
        "W – W – H – W – W – W – H",
        "W – H – W – W – H – W – W",
        "W – H – W – W – W – H – W",
        "H – W – H – W – W – H – W",
      ],
      correctIndex: 1,
    },
    {
      id: "q5",
      question:
        "How does harmonic minor differ from natural minor?",
      options: [
        "It lowers the 7th scale degree",
        "It raises the 7th scale degree",
        "It raises the 6th and 7th only when descending",
        "It replaces half steps with whole steps throughout",
      ],
      correctIndex: 1,
    },
    {
      id: "q6",
      question:
        "Which description of melodic minor is correct?",
      options: [
        "Ascending uses raised 6th and 7th; descending uses natural minor",
        "Ascending and descending both use raised 6th and 7th",
        "Ascending uses natural minor; descending uses raised 6th and 7th",
        "It is identical to harmonic minor in both directions",
      ],
      correctIndex: 0,
    },
    {
      id: "q7",
      question:
        "What is the relative minor of C major?",
      options: ["E minor", "A minor", "G minor", "D minor"],
      correctIndex: 1,
    },
    {
      id: "q8",
      question:
        "Moving clockwise on the circle of fifths from C, which major key has 3 sharps?",
      options: ["D major", "A major", "E major", "B major"],
      correctIndex: 1,
    },
    {
      id: "q9",
      question:
        "Moving counterclockwise on the circle of fifths from C, which major key has 4 flats?",
      options: ["D♭ major", "G♭ major", "A♭ major", "E♭ major"],
      correctIndex: 2,
    },
    {
      id: "q10",
      question:
        "A piece uses a key signature that could be either major or minor. Which clue from the notes would most strongly suggest a minor key?",
      options: [
        "The piece modulates to a distant key in the middle",
        "Accidentals that suggest raised 6th or 7th scale degrees",
        "The presence of any accidental anywhere in the piece",
        "The key signature contains more than three flats",
      ],
      correctIndex: 1,
    },
  ],
};

export default content;
