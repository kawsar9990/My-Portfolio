"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/Data/ProjectData";
import { ProjectTabs } from "./ProjectTabs";
import { ProjectCategory } from "@/types/Project";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const filteredProjects = (
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab)
  ).slice(0, 6);


return (
<section className="relative w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#141C2B] font-sans antialiased overflow-hidden transition-colors duration-500">
    
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-200/30 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-violet-200/30 dark:bg-violet-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
    
        <div className="flex flex-col items-center text-center mb-8 md:mb-8">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-4 py-1.5 rounded-full mb-3 border border-indigo-200 dark:border-indigo-800">
            My Recent Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-3" />
        </div>

      
        <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />   

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-fill transition-transform duration-700 ease-out group-hover:scale-105"
                  />
         
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

             
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed font-normal">
                    {project.description}
                  </p>

        
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

   
              <div className="px-5 pb-5 pt-2 mt-auto">
                <Link
                  href={project.projectLink}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-300 gap-2 shadow-md shadow-indigo-500/20 active:scale-95 text-center"
                >
                  View Project
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

-
       <div className="flex justify-center mt-12">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-indigo-50 dark:bg-slate-800/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/80 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/20 group"
          >
            <span>Explore All Projects</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>   


      </div>
    </section>
  );
}