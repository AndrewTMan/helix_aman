import type { LessonContent } from "@/data/lessonContentTypes";

const content: LessonContent = {
  introduction:
    `This lesson delves into the complexities of water. It discusses water’s many unique properties and the chemical cause of them. The lesson also explains why water is necessary for life and how its unique properties contribute to the overall function of biology as a whole.`,
  videoUrl:"https://www.youtube.com/embed/XlzQv7dZq2g?si=e8FsFy-eGrVikKq7",
  notes: `
  The following notes are a basic synopsis of the ideas talked about in the video. I recommend you read them in order to fully review the ideas you just listened to and also just in case I missed any topics or glazed over them.

## Chapter 3 Review - Summary of Key Concepts

### 3.1 Polar Covalent Bonds & Hydrogen Bonding

- **Water as a Polar Molecule**
    - Water has an uneven distribution of charge.
    - Oxygen is more electronegative than hydrogen.
    - This causes electrons to be pulled closer to oxygen, creating partial charges:
        - Oxygen: partial negative (δ−)
        - Hydrogen: partial positive (δ+)
- **Hydrogen Bonds**
    - Attraction between:
        - Partial positive hydrogen of one water molecule
        - Partial negative oxygen of another water molecule
    - Individually weak (~1/20th the strength of a covalent bond)
    - Form and break rapidly
    - Responsible for many of water’s unique properties

### 3.2 Four Emergent Properties of Water

These properties arise from hydrogen bonding between water molecules.

**1. Cohesion and Surface Tension**

- **Cohesion**: Water molecules stick to each other via hydrogen bonds
    - Helps transport water and nutrients in plants against gravity
- **Adhesion**: Water sticks to other substances (e.g., cell walls)
- **Surface Tension**: Resistance of a liquid surface to being stretched or broken
    - Allows some insects to walk on water

**2. Moderation of Temperature**

- **High Specific Heat**
    - Water resists temperature changes
    - Heat energy is used to break hydrogen bonds before raising temperature
    - Helps stabilize climate (oceans and atmosphere)
- **Evaporative Cooling**
    - When water evaporates, the remaining liquid cools
    - Example: sweating

**3. Expansion Upon Freezing (Ice Floats)**

- Water is less dense as a solid than as a liquid
- At 0°C:
    - Water forms a crystalline lattice
    - Molecules are spaced further apart
- Result:
    - Ice floats
    - Bodies of water do not freeze solid from the bottom
    - Supports aquatic life

**4. Solvent of Life**

- **Solution**: Homogeneous mixture of substances
- **Solvent**: Substance that dissolves other substances (water)
- **Hydrophilic**:
    - Polar or ionic substances that interact well with water
- **Hydrophobic**:
    - Nonpolar substances that repel water (e.g., oils)

### 3.3 Acids, Bases, and pH

- **pH Scale**
    - Measures hydrogen ion (H⁺) concentration
- **Acids**
    - Increase H⁺ concentration
    - pH range: 0–6
- **Bases**
    - Decrease H⁺ concentration (increase OH⁻)
    - pH range: 8–14
- **Buffers**
    - Resist changes in pH
    - Maintain stable conditions in biological systems
    - Example: blood pH ≈ 7.4
- **Ocean Acidification**
    - CO₂ dissolves in seawater
    - Forms carbonic acid (H₂CO₃)
    - Lowers ocean pH
    - Threatens coral reefs and shell-forming organisms
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
        "Which of the following substances would most likely repel water?",
      options: [
        "Paper",
        "Table Salt",
        "Wax",
        "Sugar",
      ],
      correctIndex: 2,
      explanation:
        "Hydrophobic essentially means a material that repels water. We know that paper gets soaking wet when touching water and salt and sugar both dissolve in water. Wax, however, is unaffected, as it is hydrophobic.",
    },
    {
      id: "q2",
      question: "A mole of table sugar and a mole of vitamin C must contain the same...",
      options: [
        "Mass",
        "Volume",
        "Number of atoms",
        "Number of molecules",
      ],
      correctIndex: 3,
      explanation:
        "A mole is a set number of anything. You can have a mole of Magnesium, a mole of Iron, a mole of boats, a mole of humans. The number of them is always the same. Since in this question we're dealing with molecules, the number of molecules for both is the same.",
    },
    {
      id: "q3",
      question:
        "A scientist measures the pH of a lake and determines it is 4.0. What is the concentration of hydrogen ions in the lake?",
      options: [
        "4.0 M",
        "10^-10 M",
        "10^-4 M",
        "10^4 M",
      ],
      correctIndex: 2,
      explanation:
        "We know that pH is the negative log base 10 of the number of hydrogen ions. Since we are given that the pH is 4, we can undo the negative logarithm by simply using exponents. 10 to the negative 4th power.",
    },
    {
      id: "q4",
      question:
        "Using the lake from the previous question, what is its hydroxide ion concentration?",
      options: [
        "10^-10 M",
        "10^-4 M",
        "10^-7 M",
        "10.0 M",
      ],
      correctIndex: 0,
      explanation:
        "We know that pH and pOH are complements of each other, since the maximum pH is 14 and the minimum pH is 0. This means that the negative log base 10 of the hydrogen ion count and the negative log base 10 of the hydroxide ion count must always sum to 14. We know that the pH 4 is 4, so pOH must be 10, as 14 - 4 is 10. Doing what we did in the last problem, we get a hydroxide count of 10 ^ -10 M.",
    },
    {
      id: "q5",
      question:
        "A pizza contains 500 kcal of energy. If all of this energy could be transferred as heat to a 50-L container of cold water, approximately how much would the water temperature increase? (Assume that 1 liter of water has a mass of about 1 kg)",
      options: [
        "50 C",
        "5 C",
        "100 C",
        "10 C",
      ],
      correctIndex: 3,
      explanation:
        "We know that 1 kCal is the amount of heat energy needed to raise the temperature of 1 Kilogram of water by 1 degrees Celcius. Since we have 50 liters of water, we it would take 50 kCals to raise its temperature by 1 degree Celcius. Therefore, 500 kCals would raise it by 10 degrees Celcius.",
    },
  ],
};

export default content;
