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
    { title: "Project", href: "#projects" },
    { title: "Blog", href: "#blogs" },
  ],
  services: [
    { title: "Front End Developer"},
    { title: "Back End Developer"},
    { title: "Mern Stack Developer"},
    { title: "Full Stack Developer"},
    { title: "Problem Solving"},
  ]
};



export default function Footer() {
return (
<footer className="w-full bg-[#FFFFFF] dark:bg-[#141C2B] text-slate-700 dark:text-slate-400 text-xs border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300 mt-auto font-sans">
  <div className="max-w-[1200px] mx-auto px-4 py-8">
    
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-slate-200 dark:border-slate-800/60">
          
         
<div className="lg:col-span-4 space-y-3">
  <div className="flex items-center gap-2">
    <div className="flex items-center gap-4">
    <div className="flex h-12 w-12 items-center justify-center bg-slate-900 text-white dark:bg-white dark:text-black rounded-xl text-lg font-bold shadow-md transition-transform group-hover:scale-105 md:h-12 md:w-12">
      K
    </div>
    
    <div className="space-y-0.5">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kawsar Ahmed</h2>
      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Full Stack Developer</p>
    </div>
  </div>
  </div>
  
  <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-400 capitalize max-w-sm">
    Building scalable, high-performance web applications that transform ideas into powerful digital experiences and drive measurable business growth.
  </p>
            


<div className="flex items-center gap-2 pt-1">
<a 
  href="https://wa.me/8801602084187" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-9 h-9 cursor-pointer rounded-full bg-slate-100 dark:bg-slate-800/60 hover:bg-[#C050FF] hover:text-white dark:hover:bg-[#C050FF]/80 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-300 shadow-sm"
>
  <FaWhatsapp className="h-3.5 w-3.5" />
</a>

<a 
  href="https://www.facebook.com/profile.php?id=61595245975203" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-9 h-9 cursor-pointer rounded-full bg-slate-100 dark:bg-slate-800/60 hover:bg-[#C050FF] hover:text-white dark:hover:bg-[#C050FF]/80 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-300 shadow-sm"
>
  <FaFacebookF className="h-3 w-3" />
</a>

<a 
  href="https://www.linkedin.com/in/kawsar-ahmed-2a466441b" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-9 h-9 cursor-pointer rounded-full bg-slate-100 dark:bg-slate-800/60 hover:bg-[#C050FF] hover:text-white dark:hover:bg-[#C050FF]/80 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-300 shadow-sm"
>
  <FaLinkedin className="h-3 w-3" />
</a>

<a 
  href="mailto:kawsar158464@gmail.com" 
  className="w-9 h-9 cursor-pointer rounded-full bg-slate-100 dark:bg-slate-800/60 hover:bg-[#C050FF] hover:text-white dark:hover:bg-[#C050FF]/80 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-300 shadow-sm"
>
  <FaEnvelope className="h-3 w-3" />
</a>
</div>
</div>
          
         
<div className="lg:col-span-2 space-y-3">
  <h4 className="text-[12px] font-semibold text-slate-900 dark:text-white tracking-wide">Explore</h4>
  <ul className="space-y-2">
    {footerLinks.quickLinks.map((link, index) => (
      <li key={index}>
        <a href={link.href} className="text-[12px] text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
          <FaAngleRight className="text-[10px] text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
          {link.title}
        </a>
      </li>
    ))}
  </ul>
</div>
          

<div className="lg:col-span-3 space-y-3">
  <h4 className="text-[12px] font-semibold text-slate-900 dark:text-white tracking-wide">Services</h4>
  <ul className="space-y-2">
    {footerLinks.services.map((link, index) => (
      <li key={index}>
        <div className="text-[12px] text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
          <FaAngleRight className="text-[10px] text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
          {link.title}
        </div>
      </li>
    ))}
  </ul>
</div>

     
<div className="lg:col-span-3 space-y-3">
<h4 className="text-[12px] font-semibold text-slate-900 dark:text-white tracking-wide uppercase">Get In Touch</h4>
<div className="space-y-3">
  <a href="mailto:kawsar158464@gmail.com" className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
    <FaEnvelope className="h-3.5 w-3.5 text-[#C050FF] flex-shrink-0" />
    <span className="text-[12px]">kawsar158464@gmail.com</span>
  </a>

<a href="tel:+8801611236444" className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
  <FaPhoneAlt className="h-3.5 w-3.5 text-[#C050FF] flex-shrink-0" />
  <span className="text-[12px]">+880 1611 236 444</span>
</a>

<div className="flex gap-2 pt-1">
  <a 
  href="https://github.com/kawsar9990"
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-9 h-9 cursor-pointer rounded-full bg-slate-100 dark:bg-slate-800/60 hover:bg-[#C050FF] hover:text-white dark:hover:bg-[#C050FF]/80 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-300 shadow-sm"
>
  <FaGithub className="h-3.5 w-3.5" />
</a>
  <a 
  href="https://instagram.com/tmr_kawsar_x" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-9 h-9 cursor-pointer rounded-full bg-slate-100 dark:bg-slate-800/60 hover:bg-[#C050FF] hover:text-white dark:hover:bg-[#C050FF]/80 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-300 shadow-sm"
>
  <FaInstagram className="h-3 w-3" />
</a>
</div>

<div className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 pt-1">
  <FaMapMarkerAlt className="h-3.5 w-3.5 text-[#C050FF] mt-0.5 flex-shrink-0" />
  <span className="text-[12px] leading-relaxed">Tangail, Dhaka, Bangladesh</span>
</div>
</div>
</div>
</div>
        

<div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-slate-500">
  <p>© {new Date().getFullYear()} Kawsar Ahmed. All Rights Reserved.</p>
  <div className="flex items-center gap-1">
    <span>Powered by</span>
    <span>Next.js & Tailwind CSS</span>
  </div>
</div>

</div>
</footer>
);
}