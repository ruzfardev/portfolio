export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // Featured Projects
  {
    id: "prava-olamiz",
    title: "Prava Olamiz",
    description: "Full-stack driving license preparation platform with practice tests, theory lessons, and progress tracking for Uzbekistan drivers.",
    image: "/images/icons/prava-olamiz.svg",
    tags: ["Next.js", "TypeScript", "React", "Education"],
    liveUrl: "https://pravaolamiz.uz",
    sourceUrl: "https://github.com/ruzfardev/prava_olamiz",
    featured: true,
  },
  {
    id: "safehisob",
    title: "SafeHisob",
    description: "Privacy-first budget calculator that keeps all your financial data securely stored on your device. No cloud, no tracking.",
    image: "/images/icons/safehisob.svg",
    tags: ["Next.js", "TypeScript", "PWA", "LocalStorage"],
    liveUrl: "https://safehisob.uz",
    sourceUrl: "https://github.com/ruzfardev/safehisob",
    featured: true,
  },
  {
    id: "react-tube",
    title: "React Tube",
    description: "Full-featured YouTube clone with video search, playback, and channel browsing. Built with React, Redux, and YouTube Data API.",
    image: "/images/icons/react-tube.svg",
    tags: ["React", "TypeScript", "Redux", "YouTube API", "MUI"],
    liveUrl: "https://reactube.vercel.app/",
    sourceUrl: "https://github.com/ruzfardev/my_portfolio/tree/main/react-youtube",
    featured: true,
  },
  // Other Projects
  {
    id: "react-player",
    title: "React Player",
    description: "Desktop-style music player that reads local audio files using FileReader API. Features playlist management and modern interface.",
    image: "/images/icons/react-player.svg",
    tags: ["React", "TypeScript", "Redux", "FileReader API"],
    liveUrl: "https://react-player-ruzfardev.vercel.app/",
    sourceUrl: "https://github.com/ruzfardev/react-player",
    featured: false,
  },
  {
    id: "natours",
    title: "Natours",
    description: "Stunning travel agency landing page showcasing advanced CSS techniques including animations, clip-paths, and responsive design.",
    image: "/images/icons/natours.svg",
    tags: ["HTML", "CSS", "SASS", "Responsive Design"],
    liveUrl: "https://natours-exciting-tours.netlify.app/",
    sourceUrl: "https://github.com/ruzfardev/my_portfolio",
    featured: false,
  },
  // {
  //   id: "fast-pay",
  //   title: "Fast Pay",
  //   description: "Professional fintech landing page with modern UI design, smooth animations, and fully responsive layout.",
  //   image: "/images/icons/fast-pay.svg",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   liveUrl: "https://web-tech-cw.netlify.app/",
  //   sourceUrl: "https://github.com/ruzfardev/my_portfolio",
  //   featured: false,
  // },
  {
    id: "memory-match",
    title: "Memory Match",
    description: "Football-themed memory card game with flip animations and score tracking. Match club logos to win!",
    image: "/images/icons/memory-match.svg",
    tags: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    liveUrl: "https://memory-game-ruzfardev.netlify.app/",
    sourceUrl: "https://github.com/ruzfardev/my_portfolio",
    featured: false,
  },
  {
    id: "pig-game",
    title: "Pig Dice Game",
    description: "Two-player dice game where strategy meets luck. Roll to accumulate points but risk losing it all!",
    image: "/images/icons/pig-game.svg",
    tags: ["JavaScript", "HTML", "CSS", "Game Logic"],
    liveUrl: "https://pig-game-ruzfardev.netlify.app/",
    sourceUrl: "https://github.com/ruzfardev/my_portfolio",
    featured: false,
  },
  {
    id: "number-guess",
    title: "Number Guessing Game",
    description: "Interactive guessing game with hints and scoring. Guess the secret number between 1-20 in fewest attempts.",
    image: "/images/icons/number-guess.svg",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://guess-my-number-gamee.netlify.app/",
    sourceUrl: "https://github.com/ruzfardev/my_portfolio",
    featured: false,
  },
];
