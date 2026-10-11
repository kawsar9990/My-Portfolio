import { ProjectDetails } from "@/types/ProjectDetails";

export const kawsarLiveStreamData: ProjectDetails = {
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
  duration: "10 days",
  team: "Solo Project",
  role: "Full Stack Developer",
  liveDemoLink: "https://kmstreamx.netlify.app",
  frontendCodeLink: "https://github.com/kawsar9990/KMStreamX-frontend",
  backendCodeLink: "https://github.com/kawsar9990/KMStreamX-backend",
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
};