'use client';

import { useState } from 'react';
import { SKILL_CATEGORIES, SKILLS_DATA } from '@/Data/SkillData';
import { TabNavigation } from './TabbedShowcaseView';
import { SkillCard } from './AllSkillsDataView';
import { CategoryId } from '../../../types/Skill';

export default function TechnicalExpertise() {
  const [activeTab, setActiveTab] = useState<CategoryId>('highlights');

  const activeSkills = SKILLS_DATA[activeTab] || [];

  return (
    <section className="relative w-full py-16 md:py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#141C2B] font-sans antialiased overflow-hidden transition-colors duration-500">
      <div className="absolute top-10 left-0 w-[400px] h-[400px] bg-indigo-200/30 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-violet-200/30 dark:bg-violet-950/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-4 py-1.5 rounded-full mb-3 border border-indigo-200 dark:border-indigo-800">
            Skills & Stack
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">Expertise</span>
          </h2>
          
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-3 mb-4" />

          <p className="max-w-xl text-slate-600 dark:text-slate-300 text-sm md:text-base font-normal leading-relaxed">
            Architecting scalable software solutions with modern frameworks, reliable system architectures, and cutting-edge tools.
          </p>
        </div>

  
        <TabNavigation 
          categories={SKILL_CATEGORIES} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

      
        <main className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {activeSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </main>

      </div>
    </section>
  );
}