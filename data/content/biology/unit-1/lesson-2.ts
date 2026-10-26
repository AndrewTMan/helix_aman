import type { LessonContent } from "@/data/lessonContentTypes";

const content: LessonContent = {
  introduction:
    `This lesson is the first lesson of Campbell’s Biology’s first Unit, The Chemistry of Life. It provides surface level introduction to Chemistry. Overall, it should be a review of basic chemistry to those who have taken High School Chemistry before. 

The Lesson delves into topics of compounds, elements, and molecules. It describes properties of each and their different types. It also delves very lightly into ideas about radiation, energy, and other abstract chemistry topics.`,
  videoUrl:"https://www.youtube.com/embed/kRVPVGHqLWU?si=YCVuKfi-luE59XCk",
  notes: `
  The following notes are a basic synopsis of the ideas talked about in the video. I recommend you read them in order to fully review the ideas you just listened to and also just in case I missed any topics or glazed over them.

### Chapter 2 Review – Summary of Key Concepts

**Concept 2.1: Elements and Compounds**

- Matter is made of **elements** (pure substances) and **compounds** (two or more elements combined in fixed ratios).
- Elements cannot be broken down chemically.
- Four elements—oxygen, carbon, hydrogen, and nitrogen—make up ~96% of living matter.

**Concept 2.2: Atomic Structure and Properties**

- An **atom** consists of:
    - **Protons (+)** and **neutrons (0)** in the nucleus
    - **Electrons (–)** in orbitals around the nucleus
- The number of protons = **atomic number**.
- **Mass number** = protons + neutrons.
- **Isotopes** vary in neutron number; some are radioactive.
- Electrons occupy **energy levels (shells)** and **orbitals**.
- The **valence shell** determines chemical reactivity.

**Concept 2.3: Chemical Bonds and Molecules**

- **Covalent bonds** form when atoms share electrons (single or double bonds).
- **Nonpolar covalent bonds**: equal sharing of electrons.
- **Polar covalent bonds**: unequal sharing (due to electronegativity differences).
- **Ions** form when atoms gain or lose electrons.
- **Ionic bonds** are attractions between oppositely charged ions.
- Weak interactions:
    - **Hydrogen bonds** (partial charges attract)
    - **Van der Waals interactions** (temporary weak attractions)
- A molecule’s **shape** (based on valence orbitals) is critical for its function.

**Concept 2.4: Chemical Reactions**

- Chemical reactions convert **reactants → products** while conserving matter.
- Reactions are reversible.
- **Chemical equilibrium** occurs when forward and reverse reaction rates are equal.
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
        "How does the isotope phosphorus-32 differ from phosphorus-31?",
      options: [
        "It has a different atomic number",
        "It contains one additional proton",
        "It contains one additional electron",
        "It contains one additional neutron",
      ],
      correctIndex: 3,
      explanation:
        "Remember the relationship between all of the subatomic particles. Both of the given atoms, P-31 and P-32, are both the same element of P. We know that proton and atomic number are both directly correlative to the identity of the element, so those are off the table since the element remained the same. We know that the side number, whether it be 31 or 32, is determined by the mass. Neutrons add mass to the nucleus, so it must be a difference in the neutrons. Electrons have no effect on this number.",
    },
    {
      id: "q2",
      question: "What does the word \"trace\" indicate in the phrase \"trace element\"?",
      options: [
        "The element is required in very small amounts",
        "The element can be used as a label to trace atoms through an organism’s metabolism",
        "The element is very rare on Earth",
        "The element enhances health but is not essential for the organism’s long-term survival",
      ],
      correctIndex: 0,
      explanation:
        "A is the most accurate definition for the term, Trace Element",
    },
    {
      id: "q3",
      question:
        "What is primarily responsible for an atom's chemical reactivity?",
      options: [
        "The average distance of the outermost electron shell from the nucleus",
        "The existence of unpaired electrons in the valence shell",
        "The sum of the potential energies of all the electron shells",
        "The potential energy of the valence shell",
      ],
      correctIndex: 1,
      explanation:
        "Remember that electrons determine the reactivity of an element. The valence shell of an atom, simply put, is what interacts with its surroundings. We've seen that chemical reactions happen based on how the electrons within this valence shell interact with other valence shells.",
    },
    {
      id: "q4",
      question:
        "Which statement must be true for every atom that carries a negative charge (an anion)?",
      options: [
        "The atom has more electrons than protons",
        "The atom has more protons than electrons",
        "The atom has fewer protons than does a neutral atom of the same element",
        "The atom has more neutrons than protons",
      ],
      correctIndex: 0,
      explanation:
        "An anion is a negatively charged atom. Electrons are what make an atom negative, protons are what make an atom positive. In order for an atom to be an anion, or negatively charged, then it must have more electrons (negatives) than protons (positives).",
    },
    {
      id: "q5",
      question:
        "What is true of a chemical reaction once it has reached equilibrium?",
      options: [
        "The concentrations of products and reactants are equal",
        "The reaction is now irreversible",
        "Both forward and reverse reactions have halted",
        "The rates of forward and reverse reactions are equal",
      ],
      correctIndex: 3,
      explanation:
        "A chemical reaction is at equillibrium when the forward and reverse reactions occur in such a way that there is no net change in the concentrations of the reactants and products. Thus, their rates must be equal, so the correct answer is D.",
    },
    {
      id: "q6",
      question:
        "(Use the Periodic Table to assist you in answering this question) Atoms can be represented by listing their numbers of protons, neutrons, and electrons (for example, helium can be written as 2p+, 2n0, and 2e-). Which option correctly represents the oxygen-18 isotope?",
      options: [
        "7p+, 2n0, 9e-",
        "8p+, 10n0, 8e-",
        "9p+, 9n0, 9e-",
        "10p+, 8n0, 9e-",
      ],
      correctIndex: 1,
      explanation:
        "We know that based off of the periodic table of elements the atomic number of oxygen is 8. This means that the number of protons is 8. We also know that the mass number of oxygen-18 is 18. This means that the number of neutrons is 18 - 8 = 10. We also know that the number of electrons is equal to the number of protons in a neutral atom. Therefore, the O-18 Isotope of Oxygen is represented by 8p+, 10n0, 8e-.",
    },
    {
      id: "q7",
      question:
        "(Use the Periodic Table to assist you in answering this question) Sulfur has an atomic number of 16 and forms a covalent compound with hydrogen called hydrogen sulfide. Using sulfur's valence electrons, which molecular formula would you predict for this compound?",
      options: [
        "HS",
        "HS2",
        "H2S",
        "H4S",
      ],
      correctIndex: 2,
      explanation:
        "You're given that the atomic number of sulfur is 16. Since we know that the atomic number is equal to the number of protons, and that is equal to the number of electrons, we know Sulfur has 16 electrons. We also learned that the pattern for electron shells is 2, 8, and 8 electrons. Since Sulfur has 16 electrons, this means that the first two shells (2, 8), are filled, thus leaving 6 out of 8 electrons in the final shell. This means that there are 2 open spots for electrons in the shell. We know that hydrogen only has one electron due to its atomic number being one, and so two hydrogen can bond to sulfur. Thus, the correct answer is H2S.",
    },
    {
      id: "q8",
      question: `(Use the Periodic Table to assist you in answering this question) Determine the coefficients needed to balance the following chemical equation.

      C6H12O6 => __C2H6O + __CO2`,
      options: [
        "2; 1",
        "3; 1",
        "1; 3",
        "2; 2",
      ],
      correctIndex: 3,
      explanation:
        "Remember that chemical equations have to be balanced. The left side and the right side of the equation must have the same number of each element. We see that there are 6 carbons, 12 hydrogens, and 6 oxygens on the reactants side of the equation. We see that there is an unknown number of carbon dioxide, which is 1 carbon and 2 oxygens, and an unknwon number of ethanol, which is 2 carbons, 6 hydrogens, and 1 oxygen. Given this, we can use algebra to solve for the coefficients. The only answer choice that balances all elements in the equation is 2 and 2. Thus, the correct answer is D.",
    },
  ],
};

export default content;
