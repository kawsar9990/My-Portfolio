'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { kawsarLiveStreamData } from "./Data";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
} from "react-icons/fi";

export default function ProjectDetailsPage() {
  const [selectedImage, setSelectedImage] = React.useState<string>(
    kawsarLiveStreamData.images[0]
  );

  return (
    <main className="bg-slate-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-100 min-h-screen pt-24 sm:pt-28 py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        
      
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold text-xs sm:text-sm transition-colors group"
          >
            <FiArrowLeft className="text-base transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

       
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-full sm:w-4/5 bg-white dark:bg-[#121624] border border-slate-200 dark:border-[#1e2a4a] rounded-xl p-1.5 shadow-md">
            <div className="relative w-full h-[200px] sm:h-[280px] md:h-[320px] rounded-lg overflow-hidden bg-slate-100 dark:bg-[#1a2138]">
              <Image
                src={selectedImage}
                alt={kawsarLiveStreamData.title}
                fill
                priority
                className="object-cover object-top transition-all duration-300"
              />
            </div>
          </div>

         
          <div className="w-full sm:w-1/5 min-w-0 flex sm:flex-col gap-2 overflow-x-auto sm:overflow-x-hidden sm:overflow-y-auto pb-2 sm:pb-0">
          {kawsarLiveStreamData.images.map((imgSrc, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(imgSrc)}
              className={`relative flex-shrink-0 cursor-pointer w-16 h-12 sm:w-full sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedImage === imgSrc
                  ? "border-indigo-600 dark:border-indigo-400 shadow-sm"
                  : "border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={imgSrc}
                alt={`Thumbnail ${index + 1}`}
                fill
                sizes="(max-width: 639px) 64px, 20vw"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
        </div>


        <div className="bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-indigo-950/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6">
          <div>
            <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
              {kawsarLiveStreamData.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              {kawsarLiveStreamData.description}
            </p>
          </div>

 
          <div className="flex flex-wrap gap-1.5">
            {kawsarLiveStreamData.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-[11px] font-medium px-2.5 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

       
          <div className="flex flex-wrap gap-2.5 pt-2">
            <Link
              href={kawsarLiveStreamData.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40"
            >
              <FiExternalLink className="text-sm" />
              <span>Live Demo</span>
            </Link>

            <Link
              href={kawsarLiveStreamData.ProjectRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-indigo-200 font-semibold text-xs sm:text-sm rounded-xl transition-all border border-slate-200 dark:border-slate-700"
            >
              <FiGithub className="text-sm" />
              <span>View Code</span>
            </Link>
          </div>
        </div>

       
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-indigo-950/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-600 rounded-full"></span>
            Project Overview
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            {kawsarLiveStreamData.overview}
          </p>
        </div>

   
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-indigo-950/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-600 rounded-full"></span>
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {kawsarLiveStreamData.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <FiCheckCircle className="text-emerald-500 dark:text-emerald-400 text-base flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium leading-snug">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-indigo-950/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-600 rounded-full"></span>
            Challenges & Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            {kawsarLiveStreamData.challengesAndSolutions}
          </p>
        </div>

      </motion.div>
    </main>
  );
}