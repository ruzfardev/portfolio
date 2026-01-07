export const profile = {
  name: "Farrukh Ruzmetov",
  role: "Full Stack Engineer",
  tagline: "Crafting high-quality, user-friendly web experiences",
  bio: "Passionate full stack engineer with 2+ years of experience specializing in React.js, TypeScript, and modern web technologies. Currently pursuing Business Information Systems at Westminster International University in Tashkent.",
  email: "farrukhruzmetov2002@gmail.com",
  location: "Tashkent, Uzbekistan",
  social: {
    github: "https://github.com/ruzfardev",
    linkedin: "https://linkedin.com/in/farrukh-ruzmetov-298761203",
    telegram: "https://t.me/fmy_ruzmetov",
  },
  resumeUrl: "/Resume-Farrukh-Ruzmetov.pdf",
  // Telegram Bot Config (for contact form)
  // Set these in .env file (see .env.example)
  telegram: {
    botToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "",
    chatId: import.meta.env.VITE_TELEGRAM_CHAT_ID || "",
  },
  availableForWork: true,
};
