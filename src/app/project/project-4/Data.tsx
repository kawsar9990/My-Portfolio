import { ProjectDetails } from "@/types/ProjectDetails";

export const kawsarLiveStreamData: ProjectDetails = {
  id: "kawsar-livestream",
  title: "KawsarStream+ | Live TV & Sports Hub",
  description:
    "Kawsar LiveStream + is a full-stack OTT streaming web application for watching live sports, cricket matches, news, and TV channels with adaptive HLS video playback.",
  images: [
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790188188/Screenshot_2026-09-23_231100_sfz7ko.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790188187/Screenshot_2026-09-23_231030_aad3ek.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790188188/Screenshot_2026-09-23_231100_sfz7ko.png",
    "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790188188/Screenshot_2026-09-23_231016_ffcthd.png",
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
  duration: "15 days",
  team: "Solo Project",
  role: "Full Stack Developer",
  liveDemoLink: "https://github.com/kawsar9990/kawsar-livestream-project-frontend",
  frontendCodeLink: "https://github.com/kawsar9990/kawsar-livestream-project-frontend",
  backendCodeLink: "https://github.com/kawsar9990/kawsar-livestream-project-backend",
  overview:
    "Kawsar LiveStream + provides high-quality, low-latency live streaming for sports enthusiasts and TV viewers. Users can watch live cricket & football matches, access 24/7 news channels, view real-time match scores, and interact in live community match chats.",
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