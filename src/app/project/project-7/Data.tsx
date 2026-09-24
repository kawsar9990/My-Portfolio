import { ProjectDetails } from "@/types/ProjectDetails";

export const passShieldData: ProjectDetails = {
  id: "pass-shield-generator",
  title: "PassGen | Secure Password Generator Tool",
  description:
    "A modern password generator that helps users create strong, secure, and customizable passwords instantly. Features include adjustable password length, character selection, and one-click copy functionality for enhanced security and convenience.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790189485/Screenshot_2026-09-23_233624_cgedua.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790189485/Screenshot_2026-09-23_233659_mr0ve1.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790189485/Screenshot_2026-09-23_233645_vpbwvv.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790189485/Screenshot_2026-09-23_233624_cgedua.png",
  ],
  technologies: [
    "Vite",
    "React",
    "Javascript",
    "Tailwind CSS",
    "Framer Motion",
    "Redux",
    "Lucide React",
  ],
  duration: "3 days",
  team: "Solo Project",
  role: "Frontend Developer",
  liveDemoLink: "https://kawsar-password-gen-app.netlify.app",
  frontendCodeLink: "https://github.com/kawsar9990/password-generate-project",
  backendCodeLink: "https://github.com/kawsar9990/password-generate-project",
  overview:
    "PassShield runs entirely in the browser using the native Web Crypto API for client-side cryptographic security. Users can generate strong passwords with customizable length, symbols, numbers, and case rules, analyze password entropy, and copy credentials instantly.",
  keyFeatures: [
    "Cryptographically secure pseudo-random password generation via Web Crypto API",
    "Customizable rules: length slider (4 to 64 chars), uppercase, lowercase, numbers, and symbols",
    "Real-time password strength meter based on entropy calculations",
    "One-click copy to clipboard with instant visual feedback toast",
    "Local session history for recently generated passwords (stored safely in memory)",
    "Pronounceable and easy-to-read password preset options",
    "Zero backend dependencies: 100% client-side, offline-ready, and private",
    "Sleek, fully responsive UI with dark and light theme toggle support",
  ],
  challengesAndSolutions:
    "Standard `Math.random()` isn't cryptographically secure for password generation. Solved this by utilizing browser-native `window.crypto.getRandomValues()` to guarantee true randomness. Implemented entropy algorithms to evaluate password strength accurately without transmitting data anywhere.",
};