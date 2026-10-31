import { Project } from "@/types/Project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "KawsarShop | Premium Shoping Platfrom",
    description: "KawsarShop is an end-to-end full-stack e-commerce web application featuring real-time inventory management, seamless checkout, and admin analytics.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791688547/kawsarshop-thumbnail_jgwswu.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    category: "full-stack",
    projectLink: "/project/kawsarshop-ecommerce-project",
  },
  {
    id: 2,
    title: "Kawsar.Resturents | Modern Food Ordering & Reservation Platform",
    description: "Kawsar.Restaurant is a full-stack food delivery, table reservation, and online menu management web application built for seamless dining experiences.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791689290/kawsar-restaurant-thumbnail_xufarq.png",
    technologies: ["React", "Tailwind CSS", "Javascript", "Redux Toolkit"],
    category: "full-stack",
    projectLink: "/project/kawsar-restaurant-project",
  },
  {
    id: 3,
    title: "GoKawsar | Online Ticket Booking Platfrom",
    description: "GoKawsar is a full-stack online ticketing platform for booking bus, train, launch, and event tickets with real-time seat selection and instant SMS ticketing.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791689770/gokawsar-thumbnail_tki6yl.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis", "Socket.io"],
    category: "full-stack",
    projectLink: "/project/gokawsar-online-ticket-project",
  },
  {
    id: 4,
    title: "KMStreamX | Online IPTV Platfrom",
    description: "Watch live TV channels, sports events, and premium entertainment all in one place. KawsarStream+ delivers a seamless streaming experience with high-quality content anytime, anywhere.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791690223/kmstreamx-thumbnail_n5d8vx.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Fastify", "Socket.io"],
    category: "full-stack",
    projectLink: "/project/kmstreamx-online-livestream-platfrom",
  },
  {
    id: 7,
    title: "PassGen | Secure Password Generator Tool",
    description: "A modern password generator that helps users create strong, secure, and customizable passwords instantly. Features include adjustable password length, character selection, and one-click copy functionality for enhanced security and convenience.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791691493/password-generator-v4-terminal_u4lv3r.png",
    technologies: ["React", "Javascript", "Tailwind CSS"],
    category: "frontend",
    projectLink: "/project/password-generator-project",
  },
  {
    id: 8,
    title: "Oggy Ai | Kawsar Smart AI Assistant",
    description: "Oggy AI is a powerful AI chatbot that helps you answer questions, generate content, solve problems, and boost productivity with intelligent conversations.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791691680/oggy-thumbnail_hdjdsq.png",
    technologies: ["React", "Next.Js", "Javascript", "Tailwind CSS"],
    category: "frontend",
    projectLink: "/project/oggy-ai-assistant-project"
  },
  {
    id: 9,
    title: "WeatherX | Real Time & Fast Weather Forecasts",
    description: "WeatherX is a fast and lightweight app that delivers real-time weather updates, live rain radar, and daily forecasts to help you plan your day with confidence.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793289159/weather-app-cover_ya9fpp.png",
    technologies: ["Vue.Js", "Typescript", "Tailwind CSS", "pnpm"],
    category: "frontend",
    projectLink: "/project/weatherx-app"
  },
];