"use client";

import { FaUserCheck, FaExternalLinkAlt } from "react-icons/fa";
import { useMountedTheme } from "@/hook/useMountedTheme";

export default function PersonalBrandCard() {
  const { isDarkMode } = useMountedTheme();

  return (
    <div
      className={`flex items-center w-full justify-center p-4 sm:p-6 transition-colors duration-300 ${
        isDarkMode ? "bg-[#141C2B]" : "bg-[#FFFFFF]"
      }`}
    >
      <div
        className={`w-full max-w-6xl border rounded-2xl px-5 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm transition-all duration-300 ${
          isDarkMode
            ? "bg-[#111827] border-gray-800 text-white shadow-violet-950/20"
            : "bg-[#faf5ff] border-fuchsia-100 text-gray-900"
        }`}
      >
   
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-15 h-15 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center text-white shrink-0 shadow-md">
            <FaUserCheck className="text-xl" />
          </div>
          <div>
            <h3
              className={`text-[13px] sm:text-xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Want to know more about me?
            </h3>
            <p
              className={`text-[10px] mt-0.5 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Explore my personal story, leadership journey, and public updates
              <span className="inline-block mx-1.5 text-fuchsia-400">•</span>
              <span
                className={`font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Personal Brand
              </span>
            </p>
          </div>
        </div>

        <a
          href="https://kawsarshop-ecommerce-web.netlify.app/" 
          target="_blank"
          rel="noopener noreferrer"
          className=" w-full flex justify-center sm:justify-start items-center sm:items-start sm:w-50 gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm px-5 py-3 rounded-xl hover:opacity-90 transition shrink-0 shadow-sm hover:shadow-violet-500/25"
        >
          Visit Branding Site <FaExternalLinkAlt className="text-xs" />
        </a>
      </div>
    </div>
  );
}