import { ProjectDetails } from "@/types/ProjectDetails";
export const kawsarShopData: ProjectDetails = {
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
  duration: "3 Month",
  team: "Solo Project",
  role: "Full Stack Developer",
  liveDemoLink: "https://kawsarshop-ecommerce-web.netlify.app",
  frontendCodeLink: "https://github.com/kawsar9990/kawsarshop-ecommerce-project",
  backendCodeLink: "https://github.com/kawsar9990/kawsarshop-ecommerce-backend",
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
};