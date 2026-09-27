import { ProjectDetails } from "@/types/ProjectDetails";

export const OggyAiData: ProjectDetails = {
  id: "Oggy-ai-assistant",
  title: "Oggy Ai | Kawsar Smart AI Assistant",
  description:
    "Oggy AI is a powerful AI chatbot that helps you answer questions, generate content, solve problems, and boost productivity with intelligent conversations.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790479311/Screenshot_2026-09-27_092030_qtjfqn.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790479859/Screenshot_2026-09-27_093039_uvmdkq.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790479311/Screenshot_2026-09-27_092030_qtjfqn.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790479859/Screenshot_2026-09-27_093039_uvmdkq.png",
  ],
  technologies: [
    "Next Js",
    "React",
    "Javascript",
    "Tailwind CSS",
    "Framer Motion",
    "Lucide React",
  ],
  duration: "1 days",
  team: "Solo Project",
  role: "Frontend Developer",
  liveDemoLink: "https://oggy-ai.netlify.app",
  frontendCodeLink: "https://github.com/kawsar9990/Oggy-Ai",
  backendCodeLink: "https://github.com/kawsar9990/Oggy-Ai",
  overview:
    "Oggy AI is a modern frontend-driven personal assistant interface that directly integrates client-side AI APIs. Built entirely as a single-page frontend application, it provides real-time streaming responses, markdown rendering, chat history management, and custom persona options with zero backend reliance.",
  keyFeatures: [
    "Real-time streaming text responses with type-writer effect using frontend AI integration",
    "Full Markdown and syntax-highlighted code block rendering for programming queries",
    "Multiple AI personas and system prompts selection for tailored interactions",
    "Local chat history management saved securely in browser LocalStorage",
    "One-click copy for AI responses and code snippets",
    "Voice-to-text input support utilizing browser Web Speech API",
    "Fully responsive interface with dynamic dark/light mode themes and fluid animations",
    "Zero custom backend: complete frontend architecture running directly in the browser",
  ],
  challengesAndSolutions:
    "Handling streaming API responses smoothly on the frontend without UI lagging was a challenge. Solved by implementing chunked buffer state updates and Framer Motion layout transitions. Managing multi-turn conversation context entirely client-side was achieved through optimized Redux state slices and LocalStorage persistence.",
};