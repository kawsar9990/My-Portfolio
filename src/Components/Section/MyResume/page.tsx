'use client';

interface ResumeItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

const experienceData: ResumeItem[] = [
  {
    title: "Frontend Developer",
    organization: "Self-Driven Learning & Projects",
    period: "2023 - Present",
    description:
      "Learned web development via Apna College, practicing and designing interactive college institute projects.",
  },
  {
    title: "Full Stack Developer",
    organization: "Self-Driven Learning & Projects",
    period: "2023 - Present",
    description:
      "Learned full-stack development via CodeWithHarry & Programming with Mosh, building real college institute projects.",
  },
];

const educationData: ResumeItem[] = [
  {
    title: "Diploma in Computer Science & Technology",
    organization: "Tangail Govt. Polytechnic Institute (TPI)",
    period: "2024 - Present",
    description:
      "Currently studying CST and serving as an active key member & Assistant Teacher at TPI Computer Club.",
  },
  {
    title: "Secondary School Certificate (Science)",
    organization: "MBK High School",
    period: "2018 - 2022",
    description:
      "Completed SSC in Science group while building strong foundational knowledge in basic-to-advanced computer skills.",
  },
];

export default function ResumeSection() {
  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#141C2B] py-10 md:py-10 px-4 sm:px-6 lg:px-8 text-slate-800 dark:text-slate-100 font-sans antialiased transition-colors duration-500 overflow-hidden">
      
     
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-200/30 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-violet-200/30 dark:bg-violet-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
       
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-4 py-1.5 rounded-full mb-3 border border-indigo-200 dark:border-indigo-800">
            Qualification & History
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">Resume</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-3" />
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
        
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-indigo-600 dark:text-indigo-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15l-3.5 2 1-4-3-2.5 4-.5L12 7l1.5 3 4 .5-3 2.5 1 4L12 15z"
                  />
                  <circle cx="12" cy="12" r="9" strokeWidth={2} />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Experience
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-5 h-full">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="group p-5 sm:p-6 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <h4 className="text-[15px] sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h4>

                    <div className="flex flex-wrap items-center gap-2 justify-between">
                      <span className="text-[11px] sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {item.organization}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/50">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

       
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-indigo-600 dark:text-indigo-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14v7"
                  />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-5 h-full">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="group p-5 sm:p-6 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <h4 className="text-[15px] sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h4>

                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <span className="text-[11px] sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {item.organization}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/50">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}