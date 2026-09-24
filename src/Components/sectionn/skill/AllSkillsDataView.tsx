import React from 'react';
import { Skill } from '../../../types/Skill';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div 
      className={`
        group relative flex flex-col items-center justify-center 
        p-5 rounded-2xl transition-all duration-300 ease-out
        cursor-pointer transform hover:-translate-y-1 hover:shadow-lg
        border border-black/[0.03] dark:border-white/[0.05]
        ${skill.lightBg} ${skill.darkBg}
      `}
    >
      <div className="w-9 h-9 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {skill.customIcon}
      </div>

      <span className="font-semibold text-slate-800 dark:text-slate-100 text-sm sm:text-base text-center tracking-tight">
        {skill.name}
      </span>
    </div>
  );
};