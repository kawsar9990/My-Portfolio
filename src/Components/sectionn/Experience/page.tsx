import { FaLaptopCode, FaUsers, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Self Taught Full Stack Developer",
    company: "Self-Driven Learning (YouTube & Open Source)",
    type: "3 Years Journey",
    duration: "2023 - Present",
    location: "Remote / Bangladesh",
    description:
      "Spent 3+ years mastering full-stack web development through self-directed learning and project-based practice. Followed structured curricula from Programming with Mosh, CodeWithHarry, and Apna College to build production-ready applications.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Redux",
      "PostgreSQL"
    ],
    icon: <FaLaptopCode className="text-white text-lg" />,
  },
  {
    id: 2,
    role: "Active Tech Member",
    company: "TPI Computer Club",
    type: "Club Activity",
    duration: "2 Years",
    location: "Campus / On-site",
    description:
      "Participated in Tangail Polytechnic Institute Computer club workshops, technology sessions, and peer learning activities over 2 years. Collaborated with fellow members to solve programming challenges and discuss web development concepts.",
    skills: [
      "C++",
      "Python",
      "Peer Learning",
      "Teamwork",
      "Problem Solving",
      "Communication",
    ],
    icon: <FaUsers className="text-white text-lg" />,
  },
];

export default function Experience() {
  return (
    <section className="py-10 px-3 sm:px-3 xl:px-0 bg-white dark:bg-[#141C2B] transition-colors duration-300">
    <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#A020F0] dark:text-[#C050FF] tracking-tight">
         Work Experience
        </h2>
        </div>


        <div className="relative border-l-4 border-purple-500/80 ml-4 sm:ml-8 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10">
         
              <div className="absolute -left-[22px] top-1.5 w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shadow-md ring-4 ring-white dark:ring-gray-900">
                {exp.icon}
              </div>

       
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-5 shadow-sm hover:shadow-md border border-purple-100 dark:border-gray-700 transition-all duration-300">
              
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-[20px] sm:text-[20px] font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-[12px] sm:text-[15px] text-purple-600 dark:text-purple-400 mt-0.5">
                      {exp.company}{" "}
                      <span className="text-gray-500 dark:text-gray-400 font-normal">
                        • {exp.type}
                      </span>
                    </p>
                  </div>

              
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center text-[10px] gap-1 bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-md font-medium">
                      <FaCalendarAlt className="text-purple-500" />
                      {exp.duration}
                    </span>
                    <span className="flex text-[10px] items-center gap-1">
                      <FaMapMarkerAlt className="text-purple-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

          
                <p className="text-gray-600 dark:text-gray-300 text-[12px] sm:text-[13px] leading-relaxed mb-6">
                  {exp.description}
                </p>

   
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3.5 py-1 text-[10px] font-medium rounded-full bg-purple-100/70 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}