"use client";

import { useEffect } from 'react';
import { useNotFound } from '@/context/NotFoundContext';
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Home, ArrowLeft, Compass, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function NotFound() {
  const { setIsNotFound } = useNotFound();

  useEffect(() => {
    setIsNotFound(true);
  }, [setIsNotFound]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center px-4 overflow-hidden bg-background select-none">
      
   
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [-30, 30, -30],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 -z-10 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-[100px]"
      />
      
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 -z-10 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-[100px]"
      />

      <motion.div
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[400px] sm:h-[550px] sm:w-[550px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-rose-500/15 to-emerald-500/15 blur-[120px]"
      />


      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center gap-4 sm:gap-6 max-w-2xl z-10"
      >
        

        <motion.div variants={item}>
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl shadow-purple-500/25 cursor-pointer inline-flex items-center justify-center"
          >
            <Compass className="h-7 w-7 sm:h-9 sm:w-9 animate-pulse" />
          </motion.div>
        </motion.div>

     
        <motion.div variants={item} className="relative">
          <motion.h1
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
            className="text-7xl sm:text-9xl md:text-[140px] font-black leading-none tracking-tighter bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-xl"
          >
            404
          </motion.h1>
          
          <div className="absolute top-1 right-0 sm:-top-2 sm:-right-4">
            <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-pink-400 animate-bounce" />
          </div>
        </motion.div>

     
        <motion.div variants={item} className="space-y-2 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </motion.div>

    
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-2 w-full max-w-xs sm:max-w-md px-4"
        >
          <motion.div 
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="w-full sm:w-auto cursor-pointer bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 text-white shadow-lg shadow-purple-500/25 border-0 font-semibold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-xl sm:rounded-2xl transition-all duration-300"
              onClick={() => (window.location.href = "/")}
            >
              <Home className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Go home
            </Button>
          </motion.div>

          <motion.div 
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="w-full sm:w-auto cursor-pointer border-2 border-indigo-500/30 hover:border-indigo-500/60 hover:bg-indigo-500/10 font-semibold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-xl sm:rounded-2xl backdrop-blur-md transition-all duration-300"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Go back
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}