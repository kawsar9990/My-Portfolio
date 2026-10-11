
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
  description: "Learned web development via Apna College, practicing and designing interactive college institute projects.",
},
{
  title: "Full Stack Developer",
  organization: "Self-Driven Learning & Projects",
  period: "2023 - Present",
  description: "Learned full-stack development via CodeWithHarry & Programming with Mosh, building real college institute projects.",
},
];

const educationData: ResumeItem[] = [
{
  title: "Diploma in Computer Science & Technology",
  organization: "Tangail Govt. Polytechnic Institute (TPI)",
  period: "2024 - Present",
  description: "Currently studying CST and serving as an active key member & Assistant Teacher at TPI Computer Club.",
},
{
  title: "Secondary School Certificate (Science)",
  organization: "MBK High School",
  period: "2018 - 2022",
  description: "Completed SSC in Science group while building strong foundational knowledge in basic-to-advanced computer skills.",
}
];

export default function ResumeSection() {
return (
    <section className="bg-white dark:bg-[#141C2B] text-gray-900 dark:text-white min-h-screen py-16 px-6 md:px-16 lg:px-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-600 dark:text-[#00f2fe] mb-16 tracking-wide">
          My Resume
        </h2>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          

          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-cyan-600 dark:text-[#00f2fe]">
     
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15l-3.5 2 1-4-3-2.5 4-.5L12 7l1.5 3 4 .5-3 2.5 1 4L12 15z" />
                  <circle cx="12" cy="12" r="9" strokeWidth={2} />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-cyan-600 dark:text-[#00f2fe]">Experience</h3>
            </div>

            <div className="space-y-10">
              {experienceData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 font-medium">
                    <span>{item.organization}</span>
                    <span>{item.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>


          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-cyan-600 dark:text-[#00f2fe]">
     
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-cyan-600 dark:text-[#00f2fe]">Education</h3>
            </div>

            <div className="space-y-10">
              {educationData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 font-medium">
                    <span>{item.organization}</span>
                    <span>{item.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}