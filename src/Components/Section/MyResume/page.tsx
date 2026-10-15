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
    <section className="relative w-full bg-slate-50 dark:bg-[#141C2B] py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-gray-800 dark:text-gray-100 font-sans antialiased transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto">
     
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#9333ea] dark:text-purple-400 uppercase bg-purple-100 dark:bg-purple-950/60 px-4 py-1.5 rounded-full mb-3 border border-purple-200 dark:border-purple-800">
            Qualification & History
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            My <span className="text-[#9333ea] dark:text-purple-400">Resume</span>
          </h2>
          <div className="w-12 h-1 bg-[#9333ea] dark:bg-purple-500 rounded-full mt-3" />
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
         
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#9333ea] dark:text-purple-400">
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
              <h3 className="text-2xl font-bold text-[#9333ea] dark:text-purple-400">
                Experience
              </h3>
            </div>

 
            <div className="grid grid-cols-1 gap-6 h-full">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 bg-white dark:bg-[#1E293B]/70 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
              
                    <h4 className="text-[15px] sm:text-lg font-bold text-gray-900 dark:text-white leading-snug">
                      {item.title}
                    </h4>

                   
                    <div className="flex flex-wrap items-center gap-2 justify-between">
                      <span className="text-[11px] sm:text-sm font-semibold text-purple-600 dark:text-purple-400">
                        {item.organization}
                      </span>
                      <span className="text-[8px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-900/30 text-[#9333ea] dark:text-purple-300 border border-purple-100 dark:border-purple-800/50">
                        {item.period}
                      </span>
                    </div>

           
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

       
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#9333ea] dark:text-purple-400">
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
              <h3 className="text-2xl font-bold text-[#9333ea] dark:text-purple-400">
                Education
              </h3>
            </div>

   
            <div className="grid grid-cols-1 gap-6 h-full">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 bg-white dark:bg-[#1E293B]/70 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
            
                    <h4 className="text-[15px] sm:text-lg font-bold text-gray-900 dark:text-white leading-snug">
                      {item.title}
                    </h4>

              
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <span className="text-[11px] sm:text-sm font-semibold text-purple-600 dark:text-purple-400">
                        {item.organization}
                      </span>
                      <span className="text-[8px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-900/30 text-[#9333ea] dark:text-purple-300 border border-purple-100 dark:border-purple-800/50">
                        {item.period}
                      </span>
                    </div>

            
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed pt-1">
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