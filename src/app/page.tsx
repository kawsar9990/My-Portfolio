import type { Metadata } from "next";

import HeroSection from "@/Components/Section/Home/home";
import About from "@/Components/Section/about/page";
import TechnicalExpertise from "@/Components/Section/skill/page";
import ProjectsSection from "@/Components/Section/Project/page";
import ServicesSection from "@/Components/Section/services/page";
import ContactPAge from "@/Components/Section/contact/page";
import GoogleMap from "@/Components/Section/Map/page";
import ResumeSection from "@/Components/Section/MyResume/page";
import BlogSection from "@/Components/Section/Blog/page";


export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
return (
<main className="relative min-h-screen">
 
<section id="home">
     <HeroSection />
</section>

<section id="about">
     <About />
</section>

<section id="skills">
     <TechnicalExpertise />
</section>

<div id="projects">
     <ProjectsSection />
</div>

<div>
     <ResumeSection />
</div>

<section id="services">
     <ServicesSection />
</section>


<div id="blogs">
     <BlogSection />
</div>

<section id="contact">
     <ContactPAge />
</section>

<section>
     <GoogleMap />
</section>
</main>
);
}