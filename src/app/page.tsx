import type { Metadata } from "next";

import HeroSection from "@/Components/sectionn/Home/home";
import About from "@/Components/sectionn/about/page";
import TechnicalExpertise from "@/Components/sectionn/skill/page";
import Experience from "@/Components/sectionn/Experience/page";
import ProjectsSection from "@/Components/sectionn/Project/page";
import ServicesSection from "@/Components/sectionn/services/page";
import Education from "@/Components/sectionn/Education/page";
import PersonalBrandCard from "@/Components/sectionn/OthersWebLink/page";
import ContactPAge from "@/Components/sectionn/contact/page";
import GoogleMap from "@/Components/sectionn/Map/page";
import BlogSection from "@/Components/sectionn/Blog/page";


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

<div>
     <Experience />
</div>

<div id="projects">
     <ProjectsSection />
</div>

<section>
     <ServicesSection />
</section>

<div>
    <Education />
</div>

<div id="blogs">
     <BlogSection />
</div>

<div>
     <PersonalBrandCard />
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