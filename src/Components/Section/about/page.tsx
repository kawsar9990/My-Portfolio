'use client';

import Image from 'next/image';

export default function About() {
return (
<section className="relative w-full bg-slate-50 dark:bg-[#141C2B] py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-gray-800 dark:text-gray-100 antialiased font-sans overflow-hidden transition-colors duration-500">
<div className="absolute top-10 right-0 w-[450px] h-[450px] bg-purple-200/40 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
<div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-indigo-200/30 dark:bg-indigo-950/10 rounded-full blur-3xl pointer-events-none" />

<div className="max-w-6xl mx-auto relative z-10">
      
   
<div className="flex flex-col items-center text-center mb-12 md:mb-16">
  <span className="text-xs sm:text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-4 py-1.5 rounded-full mb-3 border border-indigo-200 dark:border-indigo-800">
    Get To Know Me
  </span>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] to-indigo-500">Myself</span>
  </h2>
  <div className="w-16 h-1 bg-[#9333ea] rounded-full mt-4" />
</div>

      
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">      
<div className="lg:col-span-5 flex flex-col items-center justify-center w-full h-full">
<div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none h-full group flex-1">          
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-800 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              
 <div className="relative h-full w-full aspect-[4/5] lg:aspect-auto max-h-[420px] lg:max-h-none min-h-[350px] lg:min-h-0 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg border border-gray-200/80 dark:border-slate-800">
    <Image
      src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1791688271/28491541824_rgb5ve.jpg"
      alt="Kawsar Ahmed - Software Engineer"
      fill
      priority
      sizes="(max-width: 768px) 100vw, 40vw"
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />
  </div>
  </div>
</div>

     
<div className="lg:col-span-7 flex flex-col justify-center space-y-4">
<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight text-center sm:text-left">
  Building Scalable Systems & <span className="text-indigo-600 dark:text-indigo-400">Elegant Code</span> to Solve Complex Challenges
</h3>
  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
    I&apos;m <strong className="text-gray-900 dark:text-white font-semibold">Kawsar Ahmed</strong>, a dedicated{' '}
    <strong className="text-gray-900 dark:text-white font-semibold">Software Engineer</strong> and{' '}
    <strong className="text-gray-900 dark:text-white font-semibold">Full-Stack Web Developer</strong> with a proven passion for engineering high-performance, search-optimized web applications that deliver exceptional user experiences and real value.
  </p>
  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
   Backed by a deep understanding of core Software Engineering, Web Technologies, Networking, and Database Architecture, I turn complex technical challenges into clean, maintainable, and scalable production-ready software.
 </p>
 
<p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
  Currently, my domain focus centers around Advanced Algorithms, AI Integration, and Workflow Automation — building intelligent SaaS platforms designed for modern web demands.
</p>
          
 <div className="grid grid-cols-2 gap-3 pt-2">
  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/60 border border-gray-200/60 dark:border-slate-700/60 shadow-sm">
    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Specialization</p>
    <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 mt-0.5">Full-Stack & SaaS</p>
  </div>
  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/60 border border-gray-200/60 dark:border-slate-700/60 shadow-sm">
    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Core Focus</p>
    <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 mt-0.5">Scalability & Clean Code</p>
  </div>
</div>

   
<div className="pt-4 flex items-center gap-3 w-full sm:w-auto">
  <a
    href="#contact"
    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-xs sm:text-base px-4 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center whitespace-nowrap"
  >
    Let&apos;s Connect
    <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </a>
  <a
    href="#projects"
    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-800 dark:text-gray-200 font-semibold text-xs sm:text-base px-4 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-gray-300/80 dark:border-slate-700 shadow-sm transition-all duration-300 text-center whitespace-nowrap"
  >
    <span>View Projects</span>
  </a>
</div>

</div>

</div>

</div>
</section>
  );
}