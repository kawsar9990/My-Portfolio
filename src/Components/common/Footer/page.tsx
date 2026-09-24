import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedinIn className="text-lg text-white" />,
      url: "https://www.linkedin.com/in/kawsar-ahmed-2a466441b", 
      label: "LinkedIn",
    },
    {
      id: 2,
      icon: <FaGithub className="text-lg text-white" />,
      url: "https://github.com/kawsar9990", 
      label: "GitHub",
    },
    {
      id: 4,
      icon: <FaFacebookF className="text-lg text-white" />,
      url: "https://www.facebook.com/profile.php?id=61594494171535", 
      label: "Facebook",
    },
  ];

  return (
    <footer className="w-full bg-[#f3e8ff] dark:bg-[#141C2B] py-8 px-4 sm:px-8 md:px-16 border-t border-purple-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#8b5cf6] dark:text-purple-400">
            Kawsar Ahmed
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 font-medium">
            Software Engineer | Full-Stack Developer
          </p>
        </div>

 
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="w-10 h-10 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] dark:bg-purple-600 dark:hover:bg-purple-500 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center mt-6 pt-4 border-t border-purple-200/50 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {currentYear} Kawsar Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}