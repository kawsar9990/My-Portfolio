import { ProjectDetails } from "@/types/ProjectDetails";

export const kawsarRentalsData: ProjectDetails = {
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
  duration: "15 days",
  team: "Solo Project",
  role: "Mern Stack Developer",
  liveDemoLink: "https://github.com/kawsar9990/car-rental-project",
  frontendCodeLink: "https://github.com/kawsar9990/car-rental-project",
  backendCodeLink: "https://github.com/kawsar9990/car-rental-project",
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
};