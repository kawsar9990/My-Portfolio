"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/Data/ProjectData";
import { ProjectTabs } from "./ProjectTabs";
import { ProjectCategory } from "@/types/Project";

export default function ProjectsSection() {
const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

return (
<div>
<section className="bg-slate-50 dark:bg-[#141C2B] text-slate-800 dark:text-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen transition-colors duration-300">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col items-center text-center mb-7">
  <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#9333ea] dark:text-purple-400 uppercase bg-purple-100 dark:bg-purple-950/60 px-4 py-1.5 rounded-full mb-3 border border-purple-200 dark:border-purple-800">
    My Recent Work
  </span>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
    My <span className="text-[#9333ea] dark:text-purple-400">Projects</span>
  </h2>
  <div className="w-12 h-1 bg-[#9333ea] dark:bg-purple-500 rounded-full mt-3" />
</div>

       <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />   

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-[#121624] border border-slate-200 dark:border-[#1e2338] rounded-xl overflow-hidden shadow-md dark:shadow-lg flex flex-col justify-between hover:border-purple-500/50 dark:hover:border-[#a855f7]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
            
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-fill cursor-pointer transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
     

                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white line-clamp-1 group-hover:text-purple-600 dark:group-hover:text-[#a855f7] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 dark:bg-[#6b21a8]/40 border border-purple-200 dark:border-[#a855f7]/30 text-purple-700 dark:text-[#d8b4fe] text-xs font-medium px-2.5 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 mt-auto">
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-[#a855f7] dark:hover:bg-[#9333ea] text-white font-medium text-sm rounded-lg transition-all duration-200 gap-2 shadow-sm hover:shadow-md active:scale-95"
                  >
                    View Project <span className="text-base transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}