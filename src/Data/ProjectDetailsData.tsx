import { ProjectDetails } from "@/types/ProjectDetails";


export const projectsDetailsData: Record<string, ProjectDetails> = {
"kawsarshop-ecommerce-project": {
  id: "kawsar-shop",
  title: "KawsarShop | Premium Shoping Platfrom",
  description:
    "KawsarShop is an end-to-end full-stack e-commerce web application featuring real-time inventory management, seamless checkout, and admin analytics.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790186055/Screenshot_2026-09-23_162955_jpyqt2.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790186055/Screenshot_2026-09-23_162901_ek3ocw.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790186125/Screenshot_2026-09-23_235444_w0hvp2.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790186124/Screenshot_2026-09-23_235508_edmwhy.png",
  ],
  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "JWT",
    "NextAuth",
    "Complex API",
    "Redux",
    "Tailwind CSS",
    "Resend",
  ],
  liveDemoLink: "https://kawsarshop-ecommerce-web.netlify.app",
  ProjectRepo: "https://github.com/kawsar9990/kawsarshop-ecommerce-project",
  overview:
    "KawsarShop provides a modern, fast, and secure online shopping experience. It incorporates high-performance database querying, real-time stock management, and local payment gateways along with international options.",
  keyFeatures: [
    "Full-featured e-commerce storefront with category filtering & instant search",
    "User authentication using NextAuth, JWT, and Google OAuth",
    "Integrated cart & wishlist state management with persistent storage",
    "Seamless checkout with bKash, Nagad, Credit Card (Stripe), and Cash on Delivery (COD)",
    "Automated order confirmation email and SMS gateway integration",
    "Role-based access control (RBAC) for Admin and Customer dashboards",
    "Interactive Admin Panel with real-time sales charts and inventory control",
    "Fully responsive UI optimized for desktop, tablet, and mobile devices",
  ],
  challengesAndSolutions:
    "Building KawsarShop involved tackling complex race conditions during high-volume product orders. This was resolved by implementing optimistic locking in MongoDB. Additionally, integrated multi-currency support and local Bangladeshi payment gateways to provide a frictionless payment experience.",
},



"kawsar-restaurant-project" : {
  id: "kawsar-restaurant",
  title: "Kawsar.Restaurant | Modern Food Ordering & Reservation Platform",
  description:
    "Kawsar.Restaurant is a full-stack food delivery, table reservation, and online menu management web application built for seamless dining experiences.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790187075/Screenshot_2026-09-23_165631_aksgq9.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790187074/Screenshot_2026-09-24_001027_idj6ap.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790187075/Screenshot_2026-09-23_165604_owwyai.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790187073/Screenshot_2026-09-24_001042_anvwpv.png",
  ],
  technologies: [
    "React",
    "Javascript",
    "Tailwind CSS",
    "Redux",
    "React Router",
    "Framer Motion",
  ],
  liveDemoLink: "https://kawsar-restaurent-project.netlify.app",
  ProjectRepo: "https://github.com/kawsar9990/restaurant-project",
  overview:
    "Kawsar.Restaurant simplifies online food ordering and table bookings. Customers can browse food categories, customize meal options, book tables with real-time slot selection, and track live order progress.",
  keyFeatures: [
    "Interactive digital food menu with category filter and search",
    "Real-time table reservation system with automated confirmation",
    "Cart & checkout integration supporting bKash, Nagad, Cards, and COD",
    "Live order status tracking with automated SMS notifications",
    "Customer reviews and rating system for dishes",
    "Admin dashboard for live order management and menu updates",
    "Kitchen display interface for real-time order processing",
    "Fully responsive UI with dark and light mode support",
  ],
  challengesAndSolutions:
    "Managing real-time table reservation slot double-bookings during peak hours was a key challenge. Solved it by implementing transactional database locking in MongoDB. Integrated local payment gateways alongside SMS APIs for automated instant booking alerts.",
},


"gokawsar-online-ticket-project" : {
  id: "gokawsar-ticket",
  title: "GoKawsar | Online Ticket Booking Platfrom",
  description:
    "GoKawsar is a full-stack online ticketing platform for booking bus, train, launch, and event tickets with real-time seat selection and instant SMS ticketing.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791689717/17c8d321-a01a-4b7e-b70c-89b4ddec1a8d.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790187761/Screenshot_2026-09-23_171323_gnz1tb.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790187756/Screenshot_2026-09-23_171405_z8ay2q.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790187755/Screenshot_2026-09-24_002113_kicqix.png",
  ],
  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "PostgreSQL",
    "Redis",
    "Socket.io",
    "JWT",
    "NextAuth",
    "Context API",
    "Tailwind CSS",
  ],
  liveDemoLink: "https://gokawsar.netlify.app",
  ProjectRepo: "https://github.com/kawsar9990/kawsar-online-ticket-booking-frontend",
  overview:
    "GoKawsar streamlines travel and event ticket purchasing in Bangladesh. Users can search routes, choose specific seats interactively, download digital PDF tickets, and receive instant booking verification via SMS.",
  keyFeatures: [
    "Interactive seat layout matrix with real-time seat selection & hold timers",
    "Multi-mode search for Bus, Train, Launch, and Event ticket availability",
    "Automated PDF ticket generation with QR code verification",
    "Seamless payment integration with bKash, Nagad, Visa/Mastercard, and Rocket",
    "Instant SMS gateway integration for booking confirmation & ticket details",
    "User booking history, downloadable invoices, and ticket cancellation workflow",
    "Admin dashboard for route management, schedule creation, and revenue analytics",
    "Fully responsive dark & light theme UI optimized for mobile booking",
  ],
  challengesAndSolutions:
    "Preventing concurrent seat selection conflicts (two users picking the same seat simultaneously) was solved using Redis temporary seat locking and atomic updates in MongoDB. Integrated local SMS APIs to ensure fast PDF e-ticket distribution right after payment completion.",
},


"kmstreamx-online-livestream-platfrom" : {
  id: "kawsar-livestream",
  title: "KMStreamX | Online IPTV Platfrom",
  description:
    "KMStreamX is a full-stack OTT streaming web application for watching live sports, cricket matches, news, and TV channels with adaptive HLS video playback.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791689969/1a91bbd9-a7b2-45e9-a578-8fad72e9d613.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791690063/2cb67678-3edd-48c4-8fb4-876dd6ebc6c5.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791690008/2b4070dc-28a2-4feb-a251-2bd0918c2869.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791690039/aaa817a2-3658-4c78-b19b-89b8305bf573.png",
  ],
  technologies: [
    "Next.js",
    "React",
    "Fastify",
    "Socket.io",
    "Redis",
    "PostgreSQL",
    "Docker",
    "Tailwind CSS",
  ],
  liveDemoLink: "https://kmstreamx.netlify.app",
  ProjectRepo: "https://github.com/kawsar9990/KMStreamX-frontend",
  overview:
    "KMStreamX provides high-quality, low-latency live streaming for sports enthusiasts and TV viewers. Users can watch live cricket & football matches, access 24/7 news channels, view real-time match scores, and interact in live community match chats.",
  keyFeatures: [
    "Adaptive HLS video player with quality switching (1080p, 720p, 480p, Auto)",
    "Live sports score integration with real-time ball-by-ball updates",
    "Categorized live TV channels (Sports, News, Entertainment, Movies)",
    "Real-time live chat room for viewers powered by Socket.io during live matches",
    "Subscription & premium channel unlock via bKash, Nagad, and Cards",
    "Picture-in-Picture (PiP) mode and fullscreen support for mobile & desktop",
    "Admin panel for channel stream link management and match schedule creation",
    "Fully responsive dark and light theme layout optimized for smooth video playback",
  ],
  challengesAndSolutions:
    "Reducing video buffering latency during high-traffic live cricket matches was a primary challenge. Solved it by integrating HLS.js adaptive bitrate streaming backed by CDN caching. Implemented Socket.io for lightweight, real-time live match chat and live score scorecards.",
},


"art-ai-generation-project" : {
  id: "art-ai-printers",
  title: "art.ai | AI Art Generation & Premium Printer Marketplace",
  description:
    "art.ai is a full-stack e-commerce and AI creation platform where users can generate custom AI artwork, buy high-end commercial printers, and order custom canvas prints.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791690497/e0bcfb58-efc8-4950-a1af-10122a52c78a.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791690484/cc2145c2-4b7d-436d-9219-e11a500c8eff.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791690410/c11f2a52-4349-4c18-a31f-34cabf3e7a16.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1791690400/788bfd08-c73a-4d82-aca2-add39f40f338.png",
  ],
  technologies: [
    "Next.js",
    "React",
    "Javascript",
    "Redux",
    "Tailwind CSS",
    "Framer Motion",
  ],
  liveDemoLink: "https://artworks-selling-project.netlify.app",
  ProjectRepo: "https://github.com/kawsar9990/artworks-selling-project",
  overview:
    "art.ai combines AI art creation with print-on-demand services and commercial printer sales. Users can generate unique artwork using AI prompts, customize print dimensions on premium canvas, or purchase industrial and desktop photo printers directly.",
  keyFeatures: [
    "Integrated AI image generation engine powered by DALL-E / Stable Diffusion APIs",
    "E-commerce marketplace for commercial, 3D, and photo printer sales with specification filters",
    "Interactive 3D canvas preview tool for custom wall frame and print dimensions",
    "Seamless checkout supporting bKash, Nagad, Credit Cards, and Cash on Delivery (COD)",
    "Custom print order management system with high-res file upload & print status updates",
    "User gallery for saving, showcasing, and downloading generated AI art",
    "Admin dashboard for product inventory, printer stock management, and sales tracking",
    "Responsive dark and light mode interface optimized for artwork visualization",
  ],
  challengesAndSolutions:
    "Handling high-resolution image uploads for canvas printing alongside long-running AI generation API calls was challenging. Solved it by using asynchronous job queues for image processing and storing high-res media directly on Cloudinary with CDN delivery.",
},


"car-rental-platfrom" : {
  id: "kawsar-car-rentals",
  title: "Car Rental | Car Rental & Fleet Management Platform",
  description:
    "A modern car rental platform that allows users to browse, compare, and book vehicles effortlessly. Featuring real-time availability, secure reservations, flexible rental options, and a seamless user experience.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790189028/Screenshot_2026-09-23_233103_skiqmc.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790189027/Screenshot_2026-09-23_233140_xltg6c.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790189028/Screenshot_2026-09-23_233117_bktcid.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790189027/Screenshot_2026-09-23_233204_m8p0ds.png",
  ],
  technologies: [
    "Vite",
    "React",
    "Bootstrap 5",
    "Redux",
    "React Router",
    "Framer Motion",
  ],
  liveDemoLink: "https://kawsar-car-rental.netlify.app",
  ProjectRepo: "https://github.com/kawsar9990/car-rental-project",
  overview:
    "Kawsar Rentals dey make car booking easy and fast. Customers kin search vehicles by category, select rental dates, choose self-drive or driver service, make instant online payments, and track trip status.",
  keyFeatures: [
    "Interactive car filter by brand, seat capacity, fuel type, and price range",
    "Real-time car availability calendar to avoid double booking",
    "Option for self-drive or hired professional driver booking",
    "Integrated checkout with bKash, Nagad, Credit Cards, and Cash on Pick-up",
    "Automated PDF booking confirmation invoice and SMS alerts",
    "Driver tracking and trip status updates for active rentals",
    "Admin dashboard for fleet management, maintenance logs, and revenue analytics",
    "Fully responsive UI with dark and light mode support",
  ],
  challengesAndSolutions:
    "Di main challenge na to prevent double booking when two users try to rent di same car for di same date range. We solve dis by using MongoDB transactional locks and date-collision checks before completing payment.",
},


"password-generator-project" : {
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
  liveDemoLink: "https://kawsar-password-gen-app.netlify.app",
  ProjectRepo: "https://github.com/kawsar9990/password-generate-project",
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
},


"oggy-ai-assistant-project" : {
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
  liveDemoLink: "https://oggy-ai.netlify.app",
  ProjectRepo: "https://github.com/kawsar9990/Oggy-Ai",
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
},


"weatherx-app" : {
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
}
}