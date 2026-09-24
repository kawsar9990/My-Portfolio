"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/Data/ProjectData";

export default function ProjectsSection() {
  return (
    <div>
      <section className="bg-[#FFFFFF] dark:bg-[#141C2B] text-slate-800 dark:text-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#9333ea] tracking-tight">
              My Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-[#121624] border border-slate-200 dark:border-[#1e2338] rounded-xl overflow-hidden shadow-md dark:shadow-lg flex flex-col justify-between hover:border-purple-500/50 dark:hover:border-[#a855f7]/50 transition-all duration-300 group"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-[#1a1f33] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover cursor-pointer object-top transition-all duration-1000 ease-in-out group-hover:object-bottom"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white line-clamp-1">
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
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-[#a855f7] dark:hover:bg-[#9333ea] text-white font-medium text-sm rounded-lg transition-colors duration-200 gap-2 shadow-sm hover:shadow-md"
                  >
                    View Project <span className="text-base">→</span>
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