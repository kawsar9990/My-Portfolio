import React from 'react';
import { Skill } from '../../../types/Skill';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  
const proficiency = skill.proficiency || 50;  
  
return (
    <div 
      className={`
        group relative flex flex-col items-center justify-between
        p-5 rounded-2xl transition-all duration-300 ease-out
        cursor-pointer transform hover:-translate-y-1 shadow-sm hover:shadow-xl
        border border-black/[0.05] dark:border-white/[0.08]
        min-h-[170px]
        ${skill.lightBg} ${skill.darkBg}
      `}
    >
  
      <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mb-2">
        {skill.customIcon}
      </div>


      <span className="font-semibold text-slate-800 dark:text-slate-100 text-sm sm:text-base text-center tracking-tight mb-3">
        {skill.name}
      </span>

  
    
        <div className="w-full mt-auto pt-2 border-t border-black/[0.04] dark:border-white/[0.04]">
          <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">
            <span>Proficiency</span>
            <span>{proficiency}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700/60 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-indigo-600 dark:bg-indigo-400 h-full rounded-full transition-all duration-500 group-hover:bg-violet-500" 
              style={{ width: `${proficiency}%` }}
            />
          </div>
        </div>
   
    </div>
  );
};