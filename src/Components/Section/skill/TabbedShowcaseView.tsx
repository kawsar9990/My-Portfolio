import React from 'react';
import { Category, CategoryId } from '../../../types/Skill';


interface TabNavigationProps {
  categories: Category[];
  activeTab: CategoryId;
  setActiveTab: (id: CategoryId) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ 
  categories, 
  activeTab, 
  setActiveTab 
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 my-6 px-2">
      {categories.map((tab) => {
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
                  ? 'bg-[#A020F0] text-white shadow-xl shadow-purple-500/40 scale-105'
                  : 'bg-[#F4F0FA] dark:bg-[#1A1425] text-[#A020F0] dark:text-[#C050FF] border border-[#E9DDF8] dark:border-purple-900/40 hover:bg-[#EBDCFB] dark:hover:bg-[#251A38]'
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