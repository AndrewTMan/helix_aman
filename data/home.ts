/**
 * HOMEPAGE CONTENT
 * ----------------
 * Edit this file to update the homepage copy and images.
 *
 * heroBackgroundUrl  — full-width background behind the top hero
 * aboutSideImages    — slideshow beside the About section (desktop only)
 * about.blocks       — "What is this", "What we do", "Why we do this" sections
 */

export type HomeAboutBlock = {
  title: string;
  body: string;
};

export type HomeSideImage = {
  url: string;
  caption?: string;
};

export type HomeContent = {
  heroBackgroundUrl?: string;
  aboutSideImages?: HomeSideImage[];
  about: {
    heading: string;
    intro: string;
    blocks: HomeAboutBlock[];
  };
};

export const homeContent: HomeContent = {
  heroBackgroundUrl:
    "https://biomodal.com/wp-content/uploads/2025/01/DNA-double-helix.webp",

  aboutSideImages: [
    {
      url: "https://lanalchemist.github.io/banner/1AL0_bateriophage1_1_8k.png",
      caption: "Visualization of the Protein Structure of 1AL0, the protein that forms the capsid of the bacteriophage",
    },
    {
      url: "https://i.ytimg.com/vi/pT6SN4tPbv8/maxresdefault.jpg",
      caption: "Score image of Brahms's Symphony No. 4",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQydGrk0TVBPL6aRZDnk5tJ5nMseoc4Rs6SKgtcmASEwrjiR60dVQsZAI&s=10",
      caption: "Human Cardiovascular System",
    },
  ],

  about: {
    heading: "About Helix",
    intro:
      "Helix is a free, open learning platform built to make as much education accessible possible to anyone with internet access.",
    blocks: [
      {
        title: "What is this?",
        body: "Helix is a course platform that hosts completely free full-length courses made completely from scratch. The two current curriculums are in advanced Biology - USA Biology Olympiad (USABO), and Music Theory - Classical Music Composition.",
      },
      {
        title: "What we do",
        body: "We are in the process of publishing two complete courses for the USA Biology Olympiad and Music Theory. The curriculum for USABO is based off of the textbook, Campbell's Biology, 12th edition. The music theory course is designed completely from scratch and contains components of ABRSM Grade 8 and AP level theory.",
      },
      {
        title: "Why we do this",
        body: "On a personal level, I truly do care about democratizing education. I do not believe it's fair that those who are disadvantaged, determined solely by the household or location they're born in, end up in a much worse off position than others who win the lottery of life. For example, the textbook to study for USABO, Campbell's biology, is hundreds of dollars, and advanced Music Theory education isn't exactly prevalent. I specialize in these two fields, and so I do my best to democratize information for all.",
      },
    ],
  },
};
