import React from "react";
import { ProjectCategory } from "@/types/Project";

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Project" },
  { id: "full-stack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
];

interface ProjectTabsProps {
  activeTab: ProjectCategory;
  setActiveTab: (id: ProjectCategory) => void;
}

export const ProjectTabs: React.FC<ProjectTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-8 px-2">
      {projectCategories.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-3 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-[13px] font-bold
              transition-all duration-300 ease-in-out cursor-pointer
              focus:outline-none
               ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/30 scale-105'
                    : 'bg-indigo-50 dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-900/40 hover:bg-indigo-100 dark:hover:bg-slate-800'
                }
              `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};