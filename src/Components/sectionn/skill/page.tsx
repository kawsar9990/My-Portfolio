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
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#141C2B] font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        

        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#A020F0] dark:text-[#C050FF] tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Modern frameworks, robust databases, and DevOps tools I utilize to build scalable web software.
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