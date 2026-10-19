import { ProjectDetails } from "@/types/ProjectDetails";

export const artAiData: ProjectDetails = {
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
};