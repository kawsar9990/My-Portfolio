'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className={`
    w-full bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-gray-800 antialiased font-sans dark:bg-[#141C2B] dark:text-white`}>
      <div className="max-w-6xl mx-auto">
        
      
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#9333ea] tracking-tight">
            About me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 gap-8 md:gap-8 lg:gap-12 items-stretch">
       
          <div className="lg:col-span-5 md:col-span-5 flex justify-center w-full">
            <div className="relative w-full h-full min-h-[350px] lg:min-h-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-black group">
              <Image
                src="/IMG_8948.JPG.jpeg"
                alt="Kawsar Ahmed - Web Developer and SEO Specialist"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-7 md:col-span-5 flex flex-col justify-between space-y-3 text-gray-700 dark:text-white text-base md:text-lg leading-relaxed">
            
            <p className="text-[15px]">
              I&apos;m <strong className="text-gray-900 font-bold dark:text-white">Kawsar Ahmed</strong>, a{' '}
              <strong className="text-gray-900 font-bold dark:text-white">Software Engineer</strong> and{' '}
              <strong className="text-gray-900 font-bold dark:text-white">Full-Stack Web Developer</strong> passionate about building high-performance, user-centric, and search-optimized web applications that drive real business results.
            </p>

            <p className="text-[15px]">
              With a strong foundation in Software Engineering, Web Technologies, Networking, and Database Systems, I specialize in designing and developing modern, production-ready web applications with a focus on performance, scalability, accessibility, maintainability, and clean engineering practices.
            </p>

            <p className="text-[15px]">
              Beyond writing code, I enjoy solving complex technical challenges, designing software architecture, collaborating with cross-functional teams, and transforming ideas into reliable digital products. I believe great software is built through continuous learning, effective communication, and a commitment to engineering excellence.
            </p>

            <p className="text-[15px]">
              Currently, I&apos;m advancing my expertise in Advanced Algorithms, Artificial Intelligence, and Workflow Automation, with a focus on building scalable SaaS platforms and intelligent applications that create meaningful value for users and businesses.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#9333ea] hover:bg-[#7e22ce] text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer"
              >
                Contact Me
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}