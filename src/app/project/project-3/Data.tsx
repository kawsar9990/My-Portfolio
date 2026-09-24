import { ProjectDetails } from "@/types/ProjectDetails";

export const goKawsarData: ProjectDetails = {
  id: "gokawsar-ticket",
  title: "GoKawsar | Online Ticket Booking Platfrom",
  description:
    "GoKawsar is a full-stack online ticketing platform for booking bus, train, launch, and event tickets with real-time seat selection and instant SMS ticketing.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790187756/Screenshot_2026-09-23_171516_sz2kqw.png",
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
  duration: "3 Month",
  team: "Solo Project",
  role: "Full Stack Developer",
  liveDemoLink: "https://gokawsar.netlify.app/",
  frontendCodeLink: "https://github.com/kawsar9990/kawsar-online-ticket-booking-frontend",
  backendCodeLink: "https://github.com/kawsar9990/kawsar-online-ticket-booking-backend",
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
};