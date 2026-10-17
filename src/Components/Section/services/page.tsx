"use client";

import { FileSpreadsheet, Code2, BrainCircuit } from 'lucide-react';

export default function ServicesSection() {

  const services = [
    {
      title: 'OFFICE & GRAPHIC SUPPORT',
      icon: <FileSpreadsheet className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
      description:
        'Professional data management using MS Office, Basic SEO, combined with quick visual content creation, photo editing, and social media banners using Canva and Photoshop.',
    },
    {
      title: 'FULL STACK DEVELOPMENT',
      icon: <Code2 className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
      description:
        'Services covering front-end, back-end, databases, and APIs — specializing in MERN, MEVN, and PERN stacks for fast, scalable, modern web solutions.',
    },
    {
      title: 'DATA ANALYTICS & RESEARCH',
      icon: <BrainCircuit className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
      description:
        'Exploring data processing, Basic Python, Dev Ops, basic Linux workflows, and research-driven tasks related to Machine Learning and core data analysis.',
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#141C2B] font-sans antialiased overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-4 py-1.5 rounded-full mb-3 border border-indigo-200 dark:border-indigo-800">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">Offered</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white/80 dark:bg-slate-900/70 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col items-center text-center justify-between overflow-hidden"
            >
              <div className="flex flex-col items-center w-full relative z-10">

                <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-800/50 rounded-2xl">
                  {service.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}