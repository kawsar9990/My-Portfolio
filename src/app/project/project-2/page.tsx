'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { kawsarRestaurantData } from "./Data";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiServer,
  FiCalendar,
  FiUsers,
  FiCode,
  FiCheckCircle,
} from "react-icons/fi";

export default function ProjectDetailsPage() {
  const [selectedImage, setSelectedImage] = React.useState<string>(
    kawsarRestaurantData.images[0]
  );

  return (
    <main className="bg-slate-100 dark:bg-[#141B2A] text-slate-800 dark:text-gray-100 min-h-screen pt-25 sm:pt-30 py-6 px-3 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-5">
        
   
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-purple-600 dark:text-[#c084fc] hover:underline font-medium text-xs sm:text-sm"
          >
            <FiArrowLeft className="text-base" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

     
        <div className="flex flex-col sm:flex-row gap-3 items-start">
            <div className="w-full sm:w-4/5 bg-white dark:bg-[#121624] border border-slate-200 dark:border-[#1e2a4a] rounded-xl p-1.5 shadow-md">
            <div className="relative w-full h-[200px] sm:h-[280px] md:h-[320px] rounded-lg overflow-hidden bg-slate-100 dark:bg-[#1a2138]">
              <Image
                src={selectedImage}
                alt={kawsarRestaurantData.title}
                fill
                priority
                className="object-cover object-top transition-all duration-300"
              />
            </div>
          </div>

       
          <div className="w-full sm:w-1/5 flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0">
            {kawsarRestaurantData.images.map((imgSrc, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(imgSrc)}
                className={`relative flex-shrink-0 cursor-pointer w-16 h-12 sm:w-full sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  selectedImage === imgSrc
                    ? "border-purple-600 dark:border-[#a855f7] scale-105 shadow-sm"
                    : "border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>

    
        <div className="bg-white dark:bg-[#121624] border border-slate-200 dark:border-[#1e2a4a] rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {kawsarRestaurantData.title}
            </h1>
            <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
              {kawsarRestaurantData.description}
            </p>
          </div>

        
          <div className="flex flex-wrap gap-1.5">
            {kawsarRestaurantData.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-purple-100/70 dark:bg-[#6b21a8]/30 border border-purple-200 dark:border-[#a855f7]/40 text-purple-700 dark:text-[#d8b4fe] text-[11px] font-medium px-2.5 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

        
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-[#1e2a4a]">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-purple-600 dark:text-[#a855f7] text-sm sm:text-base flex-shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 dark:text-gray-400">Duration</p>
                <p className="font-semibold text-[8px] sm:text-xs text-slate-800 dark:text-white">{kawsarRestaurantData.duration}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FiUsers className="text-purple-600 dark:text-[#a855f7] text-sm sm:text-base flex-shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 dark:text-gray-400">Team</p>
                <p className="font-semibold text-[8px] sm:text-xs text-slate-800 dark:text-white">{kawsarRestaurantData.team}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FiCode className="text-purple-600 dark:text-[#a855f7] text-sm sm:text-base flex-shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 dark:text-gray-400">Role</p>
                <p className="font-semibold text-[8px] sm:text-xs text-slate-800 dark:text-white">{kawsarRestaurantData.role}</p>
              </div>
            </div>
          </div>

          
          <div className="flex flex-wrap gap-2.5 pt-2">
            <Link
              href={kawsarRestaurantData.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-[#a855f7] dark:hover:bg-[#9333ea] text-white font-medium text-xs sm:text-sm rounded-xl transition-all shadow-sm"
            >
              <FiExternalLink className="text-sm" />
              <span>Live Demo</span>
            </Link>

            <Link
              href={kawsarRestaurantData.frontendCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-purple-500/40 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 font-medium text-xs sm:text-sm rounded-xl transition-all"
            >
              <FiGithub className="text-sm" />
              <span>View Code</span>
            </Link>

            <Link
              href={kawsarRestaurantData.backendCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-purple-500/40 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 font-medium text-xs sm:text-sm rounded-xl transition-all"
            >
              <FiServer className="text-sm" />
              <span>Backend Code</span>
            </Link>
          </div>
        </div>

       
        <div className="bg-white dark:bg-[#121624] border border-slate-200 dark:border-[#1e2a4a] rounded-2xl p-4 sm:p-5 shadow-sm space-y-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Project Overview
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
            {kawsarRestaurantData.overview}
          </p>
        </div>

      
        <div className="bg-white dark:bg-[#121624] border border-slate-200 dark:border-[#1e2a4a] rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {kawsarRestaurantData.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <FiCheckCircle className="text-green-500 dark:text-emerald-400 text-sm flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm leading-tight">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-white dark:bg-[#121624] border border-slate-200 dark:border-[#1e2a4a] rounded-2xl p-4 sm:p-5 shadow-sm space-y-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Challenges & Solutions
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
            {kawsarRestaurantData.challengesAndSolutions}
          </p>
        </div>

      </div>
    </main>
  );
}