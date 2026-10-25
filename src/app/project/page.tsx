"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/Data/ProjectData";
import { ProjectCategory } from "@/types/Project";

export default function AllProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);


  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesTab =
        activeTab === "all" ? true : project.category === activeTab;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMore) return;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 250
      ) {
        setIsLoading(true);
        setTimeout(() => {
          setVisibleCount((prev) => prev + 6);
          setIsLoading(false);
        }, 700);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);

  return (
    <main className="relative w-full min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#141C2B] font-sans antialiased overflow-hidden transition-colors duration-500">
      
  
      <div className="max-w-7xl mx-auto relative z-10">
        
       
        <div className="flex flex-col items-center text-center mb-10 pt-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">Projects</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-3" />
        </div>

        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 w-full">
          
       
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 w-full md:w-auto">
            {[
              { id: "all", label: "All Project" },
              { id: "full-stack", label: "Full Stack" },
              { id: "frontend", label: "Frontend" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as ProjectCategory);
                    setVisibleCount(6);
                  }}
                  className={`
                    px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer focus:outline-none
                    ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105"
                        : "bg-indigo-50/80 dark:bg-slate-800/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-900/40 hover:bg-indigo-100 dark:hover:bg-slate-700"
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

        
      <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search Projects..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6);
              }}
              className="w-full pl-10 pr-4 py-2.5 bg-indigo-50/50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-xl border border-indigo-200/80 dark:border-indigo-900/40 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all duration-300"
            />
            <svg
              className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-500 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

      
        {displayedProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProjects.map((project) => (
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
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          
            {isLoading && (
              <div className="flex items-center justify-center py-10">
                <svg
                  className="animate-spin h-8 w-8 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-20"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-90"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white/40 dark:bg-slate-900/40 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium capitalize">
              No projects found matching your search.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}