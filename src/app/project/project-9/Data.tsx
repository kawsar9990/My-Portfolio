import { ProjectDetails } from "@/types/ProjectDetails";

export const WeatherX: ProjectDetails = {
  id: "weather-x-project",
  title: "WeatherX | Real Time & Fast Weather Forecasts",
  description:
    "WeatherX is a fast and lightweight app that delivers real-time weather updates, live rain radar, and daily forecasts to help you plan your day with confidence.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793289368/dedf6bab-1c89-4e2e-912b-bc61258d617a.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793289346/bf125b87-ac40-4446-b057-546a62ed3e6f.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793289413/9b0a27b4-1306-4c8a-b743-fdade4a06e31.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793289346/bf125b87-ac40-4446-b057-546a62ed3e6f.png",
  ],
  technologies: [
    "Vue Js",
    "Typescript",
    "Tailwind CSS",
    "Framer Motion",
    "Lucide React",
    "pnpm"
  ],
  liveDemoLink: "https://weatherx-ks.netlify.app/",
  ProjectRepo: "https://github.com/kawsar9990/weatherx-app",
  overview:
    "WeatherX is a fast, lightweight, and modern weather forecasting web application built with Vue 3, Vite, and TypeScript. It integrates the OpenWeatherMap API to deliver real-time weather updates, interactive live weather details, and multi-day forecasts through a clean, highly responsive interface.",
  keyFeatures: [
    "Real-time local and global weather forecasts powered by OpenWeatherMap API",
    "Hourly temperature updates, 7-day extended forecasts, and humidity/wind metrics",
    "Interactive global city search with instant suggestions and fast data fetching",
    "Air Quality Index (AQI), UV Index, and outdoor activity suitability indicators",
    "Fully responsive UI with modern glassmorphism aesthetics and smooth transitions",
    "State management using Pinia for efficient active city and weather data persistence",
    "Clean TypeScript codebase configured with pnpm and Vite for super-fast build times",
  ],
  challengesAndSolutions:
    "Managing seamless state synchronization between dynamic search inputs and real-time API queries without triggering rate limits was a challenge. Solved by implementing debounced search handlers and optimized cache management with Pinia. Ensuring high UI performance during rapid location switching was achieved using Vue 3 reactivity and lightweight SVG animations.",
};