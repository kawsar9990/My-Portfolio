import { 
  FaWhatsapp,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedin,
  FaEnvelope,
  FaAngleRight,
  FaMapMarkerAlt
} from "react-icons/fa";

const footerLinks = {
  quickLinks: [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "My Services", href: "#services" },
    { title: "Projects", href: "#projects" },
    { title: "Blog", href: "#blogs" },
  ],
  services: [
    { title: "Front End Developer"},
    { title: "Back End Developer"},
    { title: "MERN Stack Developer"},
    { title: "Full Stack Developer"},
    { title: "Problem Solving"},
  ]
};

export default function Footer() {
  const socialBtnClass = 
    "w-9 h-9 cursor-pointer rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/70 dark:border-indigo-800/50 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:text-white dark:hover:text-white hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105";

  return (
    <footer className="w-full bg-slate-50 dark:bg-[#141C2B] text-slate-700 dark:text-slate-400 text-xs border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-500 mt-auto font-sans relative overflow-hidden">
      
    
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-violet-200/20 dark:bg-violet-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          
    
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-xl text-lg font-bold shadow-md shadow-indigo-500/20">
                K
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Kawsar Ahmed
                </h2>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  Full Stack Developer
                </p>
              </div>
            </div>
            
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 max-w-sm">
              Building scalable, high-performance web applications that transform ideas into powerful digital experiences and drive measurable business growth.
            </p>

      
            <div className="flex items-center gap-2 pt-1">
              <a 
                href="https://wa.me/8801602084187" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={socialBtnClass}
              >
                <FaWhatsapp className="h-3.5 w-3.5" />
              </a>

              <a 
                href="https://www.facebook.com/profile.php?id=61595245975203" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={socialBtnClass}
              >
                <FaFacebookF className="h-3 w-3" />
              </a>

              <a 
                href="https://www.linkedin.com/in/kawsar-ahmed-2a466441b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={socialBtnClass}
              >
                <FaLinkedin className="h-3 w-3" />
              </a>

              <a 
                href="mailto:kawsar158464@gmail.com" 
                className={socialBtnClass}
              >
                <FaEnvelope className="h-3 w-3" />
              </a>
            </div>
          </div>
          
     
          <div className="sm:col-span-1 lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5 group">
                    <FaAngleRight className="text-[10px] text-indigo-500/70 dark:text-indigo-400/70 group-hover:translate-x-0.5 transition-transform" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  

          <div className="sm:col-span-1 lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <div className="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5 group cursor-pointer">
                    <FaAngleRight className="text-[10px] text-indigo-500/70 dark:text-indigo-400/70 group-hover:translate-x-0.5 transition-transform" />
                    {link.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>

      
          <div className="sm:col-span-2 lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Get In Touch
            </h3>
            <div className="space-y-2.5">
              <a href="mailto:kawsar158464@gmail.com" className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <FaEnvelope className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <span className="text-xs truncate">kawsar158464@gmail.com</span>
              </a>

              <a href="tel:+8801611236444" className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <FaPhoneAlt className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <span className="text-xs">+880 1611 236 444</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 pt-0.5">
                <FaMapMarkerAlt className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs leading-relaxed">Tangail, Dhaka, Bangladesh</span>
              </div>

        
              <div className="flex gap-2 pt-2">
                <a 
                  href="https://github.com/kawsar9990"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={socialBtnClass}
                >
                  <FaGithub className="h-3.5 w-3.5" />
                </a>
                <a 
                  href="https://instagram.com/tmr_kawsar_x" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={socialBtnClass}
                >
                  <FaInstagram className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
        
    
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Kawsar Ahmed. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5 font-medium">
            <span>Powered by</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Next.js & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}