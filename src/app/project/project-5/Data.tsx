import { ProjectDetails } from "@/types/ProjectDetails";

export const artAiData: ProjectDetails = {
  id: "art-ai-printers",
  title: "art.ai | AI Art Generation & Premium Printer Marketplace",
  description:
    "art.ai is a full-stack e-commerce and AI creation platform where users can generate custom AI artwork, buy high-end commercial printers, and order custom canvas prints.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790188653/Screenshot_2026-09-23_170433_w1xmp9.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790188654/Screenshot_2026-09-23_170448_bqt4ju.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790188653/Screenshot_2026-09-23_170433_w1xmp9.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790188653/Screenshot_2026-09-23_170508_ciemcd.png",
  ],
  technologies: [
    "Next.js",
    "React",
    "Javascript",
    "Redux",
    "Tailwind CSS",
    "Framer Motion",
  ],
  duration: "13 days",
  team: "Solo Project",
  role: "Mern Stack Developer",
  liveDemoLink: "https://artworks-selling-project.netlify.app",
  frontendCodeLink: "https://github.com/kawsar9990/artworks-selling-project",
  backendCodeLink: "https://github.com/kawsar9990/artworks-selling-project",
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
};