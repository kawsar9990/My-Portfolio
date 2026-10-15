"use client";

import { FileSpreadsheet, Code2, BrainCircuit, Sun, Moon } from 'lucide-react';

export default function ServicesSection() {

  const services = [
    {
      title: 'OFFICE & GRAPHIC SUPPORT',
      icon: <FileSpreadsheet className="w-12 h-12 text-purple-600 dark:text-purple-400" />,
      description:
        'Professional data management using MS Office, Basic SEO, combined with quick visual content creation, photo editing, and social media banners using Canva and Photoshop.',
    },
    {
      title: 'FULL STACK DEVELOPMENT',
      icon: <Code2 className="w-12 h-12 text-purple-600 dark:text-purple-400" />,
      description:
        'Services covering front-end, back-end, databases, and APIs — specializing in MERN, MEVN, and PERN stacks for fast, scalable, modern web solutions.',
    },
    {
      title: 'DATA ANALYTICS & RESEARCH',
      icon: <BrainCircuit className="w-12 h-12 text-purple-600 dark:text-purple-400" />,
      description:
        'Exploring data processing, Basic Python, Dev Ops, basic Linux workflows, and research-driven tasks related to Machine Learning and core data analysis.',
    },
  ];

return (
<div>
<section className="py-16 px-4 bg-slate-50 dark:bg-[#141C2B] transition-colors duration-300 flex flex-col justify-center items-center relative">
        
<div className="max-w-6xl mx-auto text-center">
      
<div className="flex flex-col items-center text-center mb-7">
  <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#9333ea] dark:text-purple-400 uppercase bg-purple-100 dark:bg-purple-950/60 px-4 py-1.5 rounded-full mb-3 border border-purple-200 dark:border-purple-800">
    What I Do
  </span>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
    Services <span className="text-[#9333ea] dark:text-purple-400">Offered</span>
  </h2>
  <div className="w-12 h-1 bg-[#9333ea] dark:bg-purple-500 rounded-full mt-3" />
</div>
     
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer dark:bg-gray-800 rounded-lg p-8 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center">
          
                  <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-950/50 rounded-full">
                    {service.icon}
                  </div>

         
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
                    {service.title}
                  </h3>

        
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}