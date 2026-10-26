import type { LessonContent } from "@/data/lessonContentTypes";

const content: LessonContent = {
  introduction: `This lesson covers the various large biological molecules, primarily carbohydrates, lipids, proteins, and nucleic acids. It also covers each of their usages and their different types. This lesson is the final lesson of this unit.`,
  videoUrl: "https://www.youtube.com/embed/bVmsVUg3Yek?si=YOE5Fhe7FhIxB4dA",
  notes: `
  The following notes are a basic synopsis of the ideas talked about in the video. I recommend you read them in order to fully review the ideas you just listened to and also just in case I missed any topics or glazed over them.

### Chapter 5 Review – Summary of Key Concepts

**Concept 5.1: Macromolecules Are Polymers, Built from Monomers**

- **Polymers** are long chains made of repeating units called **monomers**. Major biological polymers include **polysaccharides, proteins, and nucleic acids**.
- **Dehydration reaction** joins monomers together to form polymers by removing a molecule of water (H2O).
- **Hydrolysis** breaks polymers apart into individual monomers by adding a molecule of water (H2O).

**Concept 5.2: Carbohydrates Serve as Fuel and Building Material**

- **Monosaccharides** are simple sugars that serve as carbohydrate monomers. Examples include **glucose** and **fructose**, which provide fuel and carbon sources for building other molecules.
- **Disaccharides** consist of two monosaccharides joined together and can serve as fuel sources. Examples include **lactose** and **sucrose**.
- **Polysaccharides** are carbohydrate polymers with important energy-storage and structural functions:
    - **Cellulose** strengthens plant cell walls.
    - **Starch** stores glucose for energy in plants.
    - **Glycogen** stores glucose for energy in animals.
    - **Chitin** strengthens animal exoskeletons and fungal cell walls.

**Concept 5.3: Lipids Are a Diverse Group of Hydrophobic Molecules**

- **Lipids** are hydrophobic molecules that are not considered true polymers or macromolecules.
- **Triacylglycerols (fats and oils)** consist of **glycerol and three fatty acids** and serve as an important energy source.
- **Phospholipids** consist of **glycerol, a phosphate group, and two fatty acids**. They form the lipid bilayers of cell membranes, with **hydrophilic heads** and **hydrophobic tails**.
- **Steroids** contain **four fused carbon rings** with attached chemical groups. **Cholesterol** is a component of cell membranes, while other steroids function as signaling molecules such as hormones.

**Concept 5.4: Proteins Include a Diversity of Structures, Resulting in a Wide Range of Functions**

- **Proteins** are polymers made from **amino acid monomers**. There are **20 different amino acids** commonly used to build proteins.
- **Enzymes** catalyze chemical reactions.
- **Defensive proteins** protect against disease.
- **Storage proteins** store amino acids.
- **Transport proteins** transport substances across membranes or throughout the body.
- **Hormonal proteins** coordinate organismal responses.
- **Receptor proteins** receive signals from outside the cell.
- **Motor proteins** function in cell movement.
- **Structural proteins** provide physical support.

**Concept 5.5: Nucleic Acids Store, Transmit, and Help Express Hereditary Information**

- **Nucleic acids** are polymers made of **nucleotides**, each consisting of a **phosphate group, 5-carbon sugar, and nitrogenous base**.
- **DNA (deoxyribonucleic acid)** contains **deoxyribose** and the bases **cytosine (C), guanine (G), adenine (A), and thymine (T)**. It is usually double-stranded and stores hereditary information.
- **RNA (ribonucleic acid)** contains **ribose** and the bases **cytosine (C), guanine (G), adenine (A), and uracil (U)**. It is usually single-stranded and has various roles in gene expression, including carrying instructions from DNA to ribosomes.

**Concept 5.6: Genomics and Proteomics Have Transformed Biological Inquiry and Applications**

- **Genomics** analyzes large sets of genes or entire genomes.
- **Proteomics** analyzes large sets of proteins.
- **Bioinformatics** uses computational tools and software to analyze large biological datasets.
- Organisms with more **similar DNA sequences** are generally more closely related evolutionarily.
- DNA sequence data can **confirm evolutionary models** based on fossil and anatomical evidence.
`,
  resources: [
    {
      title: "Blooket: Memorize the 20 Amino Acids",
      description: "I made this blooket to help you memorize all 20 amino acids and their properties.",
      url: "https://dashboard.blooket.com/set/69dac3e6ed8c3145949a4a22",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "Which option represents the broadest biological classification among the choices below?",
      options: ["Disaccharides", "Polysaccharides", "Starch", "Carbohydrates"],
      correctIndex: 3,
      explanation:
        "Carbohydrates are the general category of macromolecules. The rest are more specific variants of carbohydrates.",
    },
    {
      id: "q2",
      question:
        "Amylase hydrolyzes glycosidic bonds only when the glucose subunits are in the alpha configuration. Which group of molecules would this enzyme be able to digest?",
      options: [
        "Glycogen, Starch, and Amylopectin",
        "Glycogen and Cellulose",
        "Cellulose and Chitin",
        "Starch, Chitin, and Cellulose",
      ],
      correctIndex: 0,
      explanation:
        "Glucose ring structures have an alpha and a beta form. The alpha form has hydroxide on the bottom of the hydrogen on the right side (left and right sides of the ring in parallel), while in the beta form the right-side hydroxide is on top of the hydrogen on the bottom, creating diagonal hydroxides and hydrogens. We can almost think of the alpha and beta form as cis and trans isomers. Earlier in the lesson, it was pre-established that glycogen, starch, and amylopectin are all in the alpha form. Therefore, since amylase can only break down monomers in the alpha form, only those three glucose polymers could be broken down by amylase.",
    },
    {
      id: "q3",
      question: "Which statement accurately describes unsaturated fats?",
      options: [
        "They are found more commonly in animals than in plants",
        "Their fatty acid chains contain one or more carbon-carbon double bonds",
        "They are typically solid at room temperature",
        "They contain more hydrogen atoms than saturated fats with the same number of carbon atoms.",
      ],
      correctIndex: 1,
      explanation:
        "Unsaturated fats are called unsaturated fats because they are not saturated with hydrogens. The only reason for this is due to the fact that their double bonds in their fatty acid chains prevent hydrogen atoms from bonding, causing a lack of hydrogen saturation.",
    },
    {
      id: "q4",
      question:
        "If hydrogen bonds throughout a protein were disrupted, which level of protein structure would remain the most unaffected?",
      options: [
        "Primary Structure",
        "Secondary Structure",
        "Tertiary Structure",
        "Quaternary Structure",
      ],
      correctIndex: 0,
      explanation:
        "The primary level is just the amino acid sequence, a string of letters. The rest of the options are all 3-dimensional conformations of that sequence determined by chemical physics and bonding procedures, so hydrogen bonding plays a big role.",
    },
    {
      id: "q5",
      question:
        "Certain enzymes digest DNA by hydrolyzing the covalent bonds that connect adjacent nucleotides. What is the direct result of this reaction?",
      options: [
        "The two strands of the double helix would separate",
        "The phosphodiester bonds within the sugar-phosphate backbone would be broken",
        "The pyrimidine bases would detach from the sugar-phosphate backbone",
        "Every nitrogenous base would separate from its deoxyribose sugar",
      ],
      correctIndex: 1,
      explanation:
        "The 'covalent bonds that join nucleotides together' are also called phosphodiester bonds. These bonds are formed through dehydration synthesis (which forms bonds by removing water), and so when hydrolysis (undos dehydration synthesis via adding water) is catalyzed (sped up), these bonds quickly fall apart. Thus, these bonds that joined nucleotides within the polynucleotide backbone would break.",
    },
    {
      id: "q6",
      question:
        "A glucose molecule has the formula C6H12O6. After ten glucose molecules are joined into a single polysaccharide through dehydration reactions, what is the resulting molecular formula?",
      options: ["C60H120O60", "C60H102O51", "C60H100O50", "C60H111O51"],
      correctIndex: 1,
      explanation:
        "Dehydration reactions consist of the removal of water to form bonds. When bonding 10 glucose molecules together, we form 9 bonds via dehydration synthesis. Because of this, we must remove 9 H2O molecules, or 18 hydrogens and 9 oxygens, from the 10-glucose structure of C60H120O60, resulting in C60H102O51.",
    },
    {
      id: "q7",
      question:
        "Which pair of nucleotide sequences could correctly base-pair to form a segment of double-stranded DNA?",
      options: [
        "5'-AGCT-3' with 5'-TCGA-3'",
        "5'-GCGC-3' with 5'-TATA-3'",
        "5'-ATGC-3' with 5'-GCAT-3'",
        "All of these sequence pairs are valid",
      ],
      correctIndex: 2,
      explanation:
        "Remember that A goes with T and G goes with C. Also remember that the two strands of DNA that form the double helix run in opposite directions of each other, with one side going from 5' to 3' while the other side goes from 3' to 5'. Because of this, C is the only correct answer when applying these rules.",
    },
  ],
};

export default content;
