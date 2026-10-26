import type { LessonContent } from "@/data/lessonContentTypes";

const content: LessonContent = {
  introduction: `This lesson is not actually a part of the first Unit of Campbell’s Biology, which is called, "The Chemistry of Life". This lesson is an introductory foundation for biology as a whole.

This lesson primarily delves into a basic introduction to the concept and central ideas of Biology. It is very surface level information, the basics. If you have already taken a biology course in school, then it is possible you may be able to skip this first lesson. However, I would recommend you partake in this lesson in order to be familiar with my videos, notes, and overall teaching style.
    `,
  videoUrl: "https://www.youtube.com/embed/VTeNAORe7-k?si=D6-_5bsTcKM0KJGA",
  notes: `The following notes are a basic synopsis of the ideas talked about in the video. I recommend you read them in order to fully review the ideas you just listened to and also just in case I missed any topics or glazed over them.
  
### Chapter 1 Review – Key Concepts

**Concept 1.1 – Themes of Life**

- Life is organized in a hierarchy from **molecules → biosphere**, with **emergent properties** at each level.
- **Structure relates to function** at all levels.
- Cells are the basic unit of life:
    - **Prokaryotic** (no nucleus)
    - **Eukaryotic** (with nucleus and organelles)
- **DNA** stores genetic information and directs protein production (**gene expression**).
- **Energy flows** through ecosystems; organisms transform energy and cycle matter.

**Concept 1.2 – Evolution**

- **Evolution** explains both unity and diversity of life.
- All species are related through **common ancestry**.
- **Natural selection**: individuals with advantageous traits reproduce more successfully.
- Evolution depends on:
    - Variation
    - Overproduction
    - Competition
    - Environmental pressures

** Concept 1.3 – Scientific Inquiry **

- Scientists use **inductive reasoning** (specific → general) to form hypotheses and **deductive reasoning** (general → specific) to test them.
- **Hypotheses must be testable** through experiments or observations.
- **Controlled experiments** isolate one variable to determine its effect using control and experimental groups.
- A **scientific theory** is broad, well-supported by evidence, and generates new hypotheses.
- Science focuses on **testing ideas**, influenced by exploration, collaboration, and societal context.

**Concept 1.4 – Science as a Collaborative Process**

- Science is a **social activity** where scientists build on each other’s work and must ensure results are repeatable.
- Different scientific approaches complement one another.
- **Technology** applies scientific knowledge for practical purposes and impacts society.
- **Diversity among scientists** leads to more perspectives and drives scientific progress.
  
  
  `,
  resources: [
    {
      title: "No additional resources necessary for this lesson.",
      description: "",
    },
    {
      title: "",
      description: "",
      url: "",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "Every living organism found on your school campus together forms...",
      options: [
        "An ecosystem",
        "A community",
        "A population",
        "A taxonomic domain",
      ],
      correctIndex: 1,
      explanation:
        "An ecosystem contains both living and non-living entities, a population only contains a single species, and a taxonomic domain is not something we have learned. Community contains all living entities, so it must be B.",
    },
    {
      id: "q2",
      question: "The primary goal of systems biology is to...",
      options: [
        "Analyze genomes from different species",
        "Simplify complex problems by reducing the system into smaller, less complex units",
        "Understand the behavior of entire biological systems by studying interactions among its component parts",
        "Build high-throughput machines to rapidly acquire data",
      ],
      correctIndex: 2,
      explanation:
        "C is the correct definition for the term, Systems Biology",
    },
    {
      id: "q3",
      question:
        "Which option provides the strongest evidence for the unity of all living organisms?",
      options: [
        "Emergent Properties",
        "Descent with Modification",
        "The Structure and Function of DNA",
        "Natural Selection as a means of Evolutionary Progression",
      ],
      correctIndex: 2,
      explanation:
        "DNA's structure and function is a constant across all organisms on Earth. It remains the same throughout all life, demonstrating unity.",
    },
    {
      id: "q4",
      question:
        "Which statement correctly defines a controlled experiment?",
      options: [
        "It is carried out slowly so observations can be recorded carefully",
        "It compares an experimental group with a control group under parallel conditions",
        "It is repeated many times to ensure the results are accurate",
        "It keeps every variable constant throughout the experiment",
      ],
      correctIndex: 1,
      explanation:
        "A controlled experiment is one that only keeps certain groups and variables constant. These are then compared with changing variables, the experimental group. Answer choice A and C are good habits of experiments but are not unique to controlled experiments.",
    },
    {
      id: "q5",
      question:
        "Which statement most accurately compares scientific hypotheses and scientific theories?",
      options: [
        "Theories are hypotheses that have been proved",
        "Hypotheses are guesses; theories are correct answers",
        "Theories are proved true; hypotheses are often contradicted by experimental results",
        "Hypotheses usually are relatively narrow in scope; theories have broad explanatory power",
      ],
      correctIndex: 3,
      explanation:
        "By definition, hypotheses are specific, testable explanations based on a relatively narrow set of observations. Theories are comphrehensive explanations that integrate a wide range and variety of observations, laws, and tested hypotheses.",
    },
    {
      id: "q6",
      question:
        "Which of the following would be considered qualitative data?",
      options: [
        "The fish swam in a zigzag motion",
        "The contents of the stomach are mixed every 20 seconds",
        "The temperature decreased from 20 C to 15 C",
        "The six pairs of robins hatched an average of three chicks each",
      ],
      correctIndex: 0,
      explanation:
        "Qualitative data has quality to it, this is often in the form of detailed descriptions. Quantitative data on the other hand usually contains quantities, such as numerical values and measurements.",
    },
    {
      id: "q7",
      question:
        "Which statement best reflects how scientific reasoning works?",
      options: [
        "If I generate a testable hypothesis, tests and observations will support it",
        "If my prediction is correct, it will lead to a testable hypothesis",
        "If my observations are accurate, they will support my hypothesis",
        "If my prediction turns out to be correct, my hypothesis is supported",
      ],
      correctIndex: 3,
      explanation:
        "Remember that scientific inquiry uses deductive reasoning, which follows an if..., then... structure.",
    },
  ],
};

export default content;
