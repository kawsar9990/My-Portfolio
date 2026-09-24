import { ProjectDetails } from "@/types/ProjectDetails";

export const kawsarRestaurantData: ProjectDetails = {
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
  duration: "20 days",
  team: "Solo Project",
  role: "Front End Developer",
  liveDemoLink: "https://kawsar-restaurent-project.netlify.app",
  frontendCodeLink: "https://github.com/kawsar9990/restaurant-project",
  backendCodeLink: "https://github.com/kawsar9990/restaurant-project",
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
};