import type { LessonContent } from "@/data/lessonContentTypes";

const content: LessonContent = {
  introduction:
    `This lesson covers the various aspects of Carbon, the most important element to life as a whole, The lesson also covers the essential chemical groups that are crucial to biochemistry and molecular function.`,
  videoUrl:"https://www.youtube.com/embed/kO-1ZTvY56c?si=bHlq0bqsEHcrWiKq",
  notes: `
  The following notes are a basic synopsis of the ideas talked about in the video. I recommend you read them in order to fully review the ideas you just listened to and also just in case I missed any topics or glazed over them.

### Chapter 4 Review – Summary of Key Concepts

**Concept 4.1: Organic Chemistry and the Origin of Life**

- **Organic compounds**, once thought to arise only within living organisms, were successfully synthesized in laboratory settings.
- Living matter is composed mostly of carbon, oxygen, hydrogen, and nitrogen.
- Biological diversity results from carbon's unique ability to form a huge variety of molecules with specific shapes and chemical properties.

**Concept 4.2: Carbon Bonding and Diversity**

- Carbon has a **valence of 4**, allowing it to form up to four covalent bonds with other atoms (such as O, H, N, and other carbon atoms).
- **Carbon skeletons** form the backbone of organic molecules and vary in length, shape, and bonding arrangement.
- **Hydrocarbons** consist entirely of carbon and hydrogen.
- **Isomers** are compounds with the same molecular formula but different structural arrangements and properties:
    - **Structural isomers**: Differ in the covalent arrangements of their atoms.
    - **Cis-trans isomers**: Differ in spatial arrangements around a double bond.
    - **Enantiomers**: Mirror-image isomers that differ in shape due to an asymmetric carbon.

**Concept 4.3: Functional Groups and ATP**

- **Chemical/Functional groups** attached to carbon skeletons participate directly in chemical reactions or influence molecular shape and biological function.
- **ATP (adenosine triphosphate)** consists of adenosine attached to three phosphate groups.
- Reaction with water converts ATP into **ADP (adenosine diphosphate)** and **inorganic phosphate** ($P_i$), releasing energy for cellular use.
`,
  resources: [
    {
      title: "Blooket: Memorize the Functional Groups",
      description: "I made this blooket to help you memorize all 7 essential chemical groups and their compound names. It also helps you memorize certain concepts about a few of them.",
      url: "https://dashboard.blooket.com/set/6a62a0941e4693fdea166f9b",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "Modern organic chemistry is best described as the study of...",
      options: [
        "The study of compounds made only by living cells",
        "The study of carbon compounds",
        "The study of natural (as opposed to synthetic) compounds",
        "The study of hydrocarbons",
      ],
      correctIndex: 1,
      explanation:
        "By definition, organic chemistry is the study of carbon compounds. This includes both natural and synthetic compounds, as well as hydrocarbons and other carbon-containing molecules.",
    },
    {
      id: "q2",
      question:
        "Search up the amino acid glutamine. Find an image that shows its molecular structure, similar to those you see in the video. Which of the following are all chemical groups in glutamine's molecular structure?",
      options: [
        "Hydroxyl, Amino, Sulfhydryl, and Methyl",
        "Carboxyl, Amino, Phosphate, and Methyl",
        "Hydroxyl, Carbonyl, Carboxyl, and Amino",
        "None of the above",
      ],
      correctIndex: 2,
      explanation:
        "The structure for glutamine contains a hydroxyl group (-OH), a carbonyl group (C=O), a carboxyl group (-COOH), and an amino group (-NH2). Note that the hydroxyl and carbonyl group make up the carboxyl group.",
    },
    {
      id: "q3",
      question:
        "Which functional group most commonly gives an organic compound basic properties?",
      options: [
        "Hydroxyl",
        "Carbonyl",
        "Amino",
        "Phosphate",
      ],
      correctIndex: 2,
      explanation:
        "Amino groups act as a base, and so being a part of an organic molecule would allow similarly that molecule to act as a base. This is because amino groups can pick up positively charged hydrogen ions from its surroundings (primarily water, in humans). We can also think of amino acting as a base because NH2, which is what makes up an amino group, is typically basic.",
    },
    {
      id: "q4",
      question:
        "Which of the following hydrocarbons contains a carbon-carbon double bond?",
      options: [
        "C3H8",
        "C2H6",
        "C2H4",
        "C2H2",
      ],
      correctIndex: 2,
      explanation:
        "Using our knowledge of chemistry, we can determine that C2H4 is the only hydrocarbon in this list that contains a double bond. This is because the number of hydrogens in a hydrocarbon is determined by the number of carbons and the number of bonds between them. We know that carbon can form 4 bonds total. Each carbon is taken by 2 hydrogens each, and so a double bond must be formed between the two to complete the valence shell. A tip to better visualize chemical structures like this is to just draw it out.",
    },
    {
      id: "q5",
      question:
        "Search up the chemical structure of Butane and Isobutane, similar to the depictions in the video. Choose the term that correctly describes the relationship between the two chemical structures.",
      options: [
        "Structural Isomers",
        "Cis-Trans Isomers",
        "Enantiomers",
        "Isotopes",
      ],
      correctIndex: 0,
      explanation:
        "Structural isomers are compounds that have the same molecular formula but different structural arrangements. Butane and Isobutane are both C4H10, but they have different structural formulas.",
    },
    {
      id: "q6",
      question:
        "Search up the open chain chemical structure of glucose. How many asymmetric carbons are there?",
      options: [
        "None",
        "1",
        "5",
        "6",
      ],
      correctIndex: 2,
      explanation:
        "An asymmetric carbon is a carbon that is bonded to four different atoms or groups. Open chain glucose has 6 carbons in its structure. The first carbon is double bonded to oxygen, meaning that it does not qualify as an asymmetric carbon. The rest, however, are all bonded to unique atoms or groups. This creates 5 asymmetric carbons in the structure.",
    },
    {
      id: "q7",
      question:
        "Which of the following changes would convert a carboxyl group into a carbonyl group?",
      options: [
        "The replacement of the -OH of a carboxyl group with a hydrogen atom",
        "The addition of a thiol to a hydroxyl",
        "The addition of a hydroxyl to a phosphate",
        "The replacement of the nitrogen of an amine with oxygen",
      ],
      correctIndex: 0,
      explanation:
        "Think back to the structure of each of these groups. A carboxyl group is simply a carbonyl group with a hydroxyl group (-OH) attached to it (as we established in question 2). If we replace the -OH with a hydrogen atom, the structure becomes a carbonyl group.",
    },
  ],
};

export default content;
