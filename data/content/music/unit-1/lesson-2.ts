import type { LessonContent } from "@/data/lessonContentTypes";

const content: LessonContent = {
  introduction:
    "This lesson discusses intervals, including major, minor, diminished, and augmented intervals, advanced rhythm concepts such as syncopation, polyrhythm, and hemiola, and the four types of musical texture: monophony, homophony, polyphony, and heterophony.",
  videoUrl: "https://www.youtube.com/embed/QMjg86TTH-s?si=6_z0zGNIKMt5A4p2",
  notes: `
The following notes are a basic synopsis of the ideas talked about in the video. I recommend you read them in order to fully review the ideas you just listened to and also just in case I missed any topics or glazed over them.

## Intervals

### Interval Qualities

The quality of an interval is determined by its **scale degree spelling and its distance from the note in question**, not simply by the key or scale being used.

- **Major** — the standard interval quality for 2nds, 3rds, 6ths, and 7ths
- **Minor** — one half step smaller than a major interval
- **Augmented** — one half step larger than the corresponding major or perfect interval
- **Diminished** — one half step smaller than the corresponding minor or perfect interval

The **scale does not matter** when identifying an interval. What matters is the **intervallic relationship between the two notes**.

### Seconds

For intervals beginning on **C**:

- **C → D♭** — Minor 2nd
- **C → D** — Major 2nd
- **C → D♯** — Augmented 2nd
- **C → D♭♭** — Diminished 2nd

The interval's **spelling determines its number**. C to D is some type of 2nd because the letter names are two scale degrees apart, regardless of the number of half steps.

### Diminished and Augmented Unisons

- **C → C♯** — Augmented unison
- **C → C♭** — Diminished unison

An **augmented unison and diminished unison can be enharmonically equivalent** in equal temperament because they may sound like the same pitch, but they have different spellings and therefore different interval identities.

## Rhythm

### Syncopation

**Syncopation** is the emphasis of a normally **weak or offbeat portion of the meter**.

Instead of emphasizing the expected strong beats, syncopation shifts emphasis toward weaker beats or parts of beats.

### Polyrhythm

A **polyrhythm** is the use of **two or more different rhythms at the same time**.

The contrasting rhythms occur simultaneously and create rhythmic complexity.

### Hemiola

A **hemiola** is a rhythmic device that creates the **feeling that the meter or time signature is shifting**, even though the underlying meter may remain unchanged.

Hemiolas are particularly associated with composers such as **Johannes Brahms**, who frequently used them to create a change in rhythmic emphasis and phrasing.

## Timbre

**Timbre** is the quality or color of a sound that allows us to distinguish between different voices, instruments, or combinations of instruments, even when they play the same pitch.

### Four Types of Timbre

#### Monophonic

**Monophony** consists of a **single melodic line**.

Multiple voices or instruments can still be considered monophonic when they perform the **same melody in octaves**.

#### Homophonic

**Homophony** consists of a primary melody supported by accompanying material.

Two common types are:

- **Melody and Accompaniment** — one voice carries the melody while other voices provide accompaniment
- **Chordal Homophony** — multiple voices move together rhythmically to form chords

#### Polyphonic

**Polyphony** consists of **two or more independent melodic lines** occurring simultaneously.

Two common types are:

- **Imitative Polyphony** — one melodic line imitates another, such as through a canon or fugue
- **Non-Imitative Polyphony** — multiple independent melodies occur simultaneously without directly imitating one another

#### Heterophony

**Heterophony** occurs when multiple voices perform **the same basic melody simultaneously but with different ornaments or variations**.

The underlying melody remains recognizable, but each performer may alter it slightly through ornamentation.
  `,
  quiz: [
    {
      id: "q1",
      question:
        "According to this lesson, what is the most important factor when identifying an interval between two notes?",
      options: [
        "The key signature of the passage",
        "The scale being used in the surrounding music",
        "The intervallic relationship and spelling between the two notes",
        "Whether the interval appears in a major or minor scale",
      ],
      correctIndex: 2,
    },
    {
      id: "q2",
      question:
        "Starting on C, which interval is formed by C up to D♭?",
      options: ["Major 2nd", "Minor 2nd", "Diminished 2nd", "Augmented 2nd"],
      correctIndex: 1,
    },
    {
      id: "q3",
      question:
        "C to C♯ and C to C♭ are labeled as an augmented unison and diminished unison respectively. Why might they still sound like the same pitch in equal temperament?",
      options: [
        "Because unisons always ignore spelling in every tuning system",
        "Because they can be enharmonically equivalent despite different interval identities",
        "Because augmented and diminished intervals are always perfect intervals",
        "Because the letter name changes but the half-step count stays the same",
      ],
      correctIndex: 1,
    },
    {
      id: "q4",
      question:
        "Which description best defines syncopation?",
      options: [
        "Two different meters occurring at the same time",
        "Emphasis placed on a normally weak or offbeat part of the meter",
        "A shift in key signature caused by accidentals",
        "Multiple independent melodies sounding together",
      ],
      correctIndex: 1,
    },
    {
      id: "q5",
      question:
        "What is a polyrhythm?",
      options: [
        "A rhythm that temporarily feels like the meter has changed",
        "A single melody performed in octaves by different instruments",
        "Two or more different rhythms occurring simultaneously",
        "A melody supported by block chords moving together",
      ],
      correctIndex: 2,
    },
    {
      id: "q6",
      question:
        "Which statement best describes a hemiola?",
      options: [
        "It combines two unrelated keys at once",
        "It creates the feeling that the meter or time signature is shifting",
        "It requires two independent melodic lines in strict imitation",
        "It emphasizes only the strongest beats of every measure",
      ],
      correctIndex: 1,
    },
    {
      id: "q7",
      question:
        "What does timbre allow a listener to distinguish?",
      options: [
        "Whether a melody is major or minor",
        "The difference between voices or instruments playing the same pitch",
        "The number of sharps in a key signature",
        "Whether a texture is imitative or non-imitative",
      ],
      correctIndex: 1,
    },
    {
      id: "q8",
      question:
        "An ensemble performs the same melody, with some instruments playing it an octave higher. Which texture is this?",
      options: ["Homophony", "Polyphony", "Monophony", "Heterophony"],
      correctIndex: 2,
    },
    {
      id: "q9",
      question:
        "Which example best represents homophony?",
      options: [
        "A fugue in which one voice enters imitating another",
        "A solo melody with no accompaniment",
        "A melody supported by chordal accompaniment moving rhythmically together",
        "Two performers playing the same tune with different ornaments",
      ],
      correctIndex: 2,
    },
    {
      id: "q10",
      question:
        "Which description best fits imitative polyphony?",
      options: [
        "One melodic line enters and imitates another, as in a canon or fugue",
        "Multiple voices move in block chords on the same rhythm",
        "Performers ornament the same melody in slightly different ways",
        "A single melodic line is doubled in octaves",
      ],
      correctIndex: 0,
    },
    {
      id: "q11",
      question:
        "Which texture occurs when multiple voices perform the same basic melody at once, but each adds different ornamentation?",
      options: ["Monophony", "Homophony", "Polyphony", "Heterophony"],
      correctIndex: 3,
    },
  ],
};

export default content;
