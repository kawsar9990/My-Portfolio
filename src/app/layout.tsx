import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import { ThemeProvider } from "@/Components/Provider/ThemeProvider";
import "../style/globals.css";
import ClientLayout from "@/Components/layout/ClientLayout";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://kawsar9990.netlify.app"),

  title: {
    default: "Kawsar Ahmed | Software Engineer",
    template: "%s | Kawsar Ahmed",
  },

 description:
  "Kawsar Ahmed is a Software Engineer focused on building modern, high-performance, and meaningful digital experiences with clean design and scalable technologies.",



keywords: [
  "Kawsar Ahmed",
  "Kawsar",
  "Software Engineer",
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "JavaScript Developer",
  "Software Engineer",
  "Node.js Developer",
  "Portfolio",
  "Web Development",
],

authors: [
  {
    name: "Kawsar Ahmed",
  },
],

creator: "Kawsar Ahmed",
publisher: "Kawsar Ahmed",

applicationName: "Kawsar Ahmed Portfolio",

category: "technology",

robots: {
  index: true,
  follow: true,

  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
},

openGraph: {
  type: "website",
  locale: "en_US",

  siteName: "Engineer MD.Kawsar Ahmed",

  title: "Kawsar Ahmed | Software Engineer",

  description:
  "Software Engineer passionate about crafting modern digital experiences through innovative technologies, clean architecture, and scalable solutions.",
  
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Kawsar Ahmed - Software Engineer",
    },
  ],
},

twitter: {
  card: "summary_large_image",

  title: "Kawsar Ahmed | Software Engineer",

  description:
    "Software Engineer crafting modern digital experiences with modern web technologies.",

  images: ["/og-image.png"],
},

icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
}
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#141C2B" },
  ],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground"
      suppressHydrationWarning>
         <ThemeProvider>
        <ClientLayout>
          {children}
        </ClientLayout>
         </ThemeProvider>
      </body>
    </html>
  );
}