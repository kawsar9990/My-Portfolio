import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  status?: string;
  side: 'left' | 'right';
}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "Diploma in Computer Science & Technology",
    institution: "Tangail Polytechnic Institute",
    location: "Tangail, Bangladesh",
    duration: "2024 - Present",
    description:
      "Pursuing Diploma in Computer Science & Technology, focusing on Web Technologies, Software Engineering, Database Systems, and Computer Networks.",
    side: 'left',
  },
  {
    id: 2,
    degree: "Secondary School Certificate (SSC)",
    institution: "MBK High School",
    location: "Tangail, Bangladesh",
    duration: "2018 - 2023",
    description:
      "Completed Secondary School Certificate in Science background with strong fundamentals in Mathematics and Information Technology.",
    side: 'right',
  },
];

export default function Education() {
  return (
    <section className="py-12 px-4 sm:px-2 md:px-8 bg-[#FFFFFF] dark:bg-[#141C2B] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">


       <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#A020F0] dark:text-[#C050FF] tracking-tight">
          Education
        </h2>
        </div>

        <div className="relative p-2">
     
          <div className="absolute border-2 border-purple-400 dark:border-purple-600 h-full left-5 md:left-1/2 -translate-x-1/2"></div>

          {educationData.map((item) => {
            const isRight = item.side === 'right';

            return (
              <div
                key={item.id}
                className="mb-10 flex items-center w-full relative"
              >
            
                <div className="z-20 absolute left-5 md:left-1/2 flex items-center justify-center bg-[#8b5cf6] dark:bg-purple-600 shadow-lg w-10 h-10 rounded-full -translate-x-1/2 ring-4 ring-white dark:ring-[#141C2B]">
                  <FaGraduationCap className="text-white text-base" />
                </div>

                
                <div
                className={`w-full md:w-1/2 ${
                    isRight
                      ? 'hidden md:block'
                      : 'pl-14 md:pl-0 md:mr-20 text-left'
                  }`}>
                    <div className=''>
                  {!isRight && (
                    <div className="bg-white dark:bg-[#131927] border border-purple-100 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-500/50 rounded-2xl shadow-md p-6 transition-all duration-300">
                        <h3 className="font-semibold pb-3 text-[15px] sm:text-[19px] text-gray-800 dark:text-white">
                          {item.degree}
                        </h3>


                      <div className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-md bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40 mb-3">
                        <FaCalendarAlt className="text-purple-500 text-xs" />
                        <span>{item.duration}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
                        <span>{item.institution}</span>
                        <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1 font-normal text-xs">
                          <FaMapMarkerAlt className="text-purple-500 text-xs" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-[10px] sm:text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
                </div>

            
                <div
                  className={`w-full md:w-1/2 ${
                    isRight
                      ? 'pl-14 md:pl-10 text-left'
                      : 'hidden md:block'
                  }`}
                >
                  {isRight && (
                    <div className="bg-white dark:bg-[#131927] border border-purple-100 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-500/50 rounded-2xl shadow-md p-6 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
                        <h3 className="text-[15px] sm:text-[19px] font-semibold text-gray-800 dark:text-white">
                          {item.degree}
                        </h3>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-md bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40 mb-3">
                        <FaCalendarAlt className="text-purple-500 text-xs" />
                        <span>{item.duration}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
                        <span>{item.institution}</span>
                        <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1 font-normal text-xs">
                          <FaMapMarkerAlt className="text-purple-500 text-xs" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-[10px] sm:text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}