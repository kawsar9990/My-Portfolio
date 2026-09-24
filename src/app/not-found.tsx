"use client";

import { useEffect } from 'react';
import { useNotFound } from '@/context/NotFoundContext';
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
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
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center gap-6 max-w-md"
      >
       
        <motion.h1
          variants={item}
          className="text-8xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

       
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.15,
            y: [0, -12, 0],
          }}
          transition={{
            scale: { duration: 0.6 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -z-10 h-40 w-40 rounded-full bg-primary blur-3xl"
        />

        <motion.div variants={item} className="space-y-2">
          <h2 className="text-2xl font-semibold">Page not found</h2>
          <p className="text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-3 mt-2"
        >
          <Button className={`cursor-pointer`}
          onClick={() => (window.location.href = "/")}>
            <Home className="mr-2 h-4 w-4" />
            Go home
          </Button>

          <Button className={`cursor-pointer`}
           variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go back
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
