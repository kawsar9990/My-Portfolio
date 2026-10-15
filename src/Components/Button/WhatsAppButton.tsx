import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/8801602084187" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
      
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 pointer-events-none"></span>
        <FaWhatsapp className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
}