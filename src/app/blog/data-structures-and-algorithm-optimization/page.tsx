'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Bookmark,
  Share2,
  Check,
  Copy,
  Sparkles,
} from 'lucide-react';

export default function DSAOptimizationBlogPage() {
  const [copiedSection1, setCopiedSection1] = useState(false);
  const [copiedSection2, setCopiedSection2] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const naiveLoopCode = `// Naive Approach: O(N^2) Time Complexity using nested loops
function findPairsNaive(arr: number[], target: number) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}`;

  const optimizedHashMapCode = `// Optimized Approach: O(N) Time Complexity using Hash Map (Set)
function findPairsOptimized(arr: number[], target: number) {
  const seen = new Set<number>();
  const pairs = [];

  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
}`;

  const handleCopy = (text: string, section: number) => {
    navigator.clipboard.writeText(text);
    if (section === 1) {
      setCopiedSection1(true);
      setTimeout(() => setCopiedSection1(false), 2000);
    } else {
      setCopiedSection2(true);
      setTimeout(() => setCopiedSection2(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 pt-28 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500 relative overflow-hidden">
      
     
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px] dark:bg-purple-500/10" />

      <article className="max-w-4xl mx-auto relative z-10">
      
       
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-[10px] sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all shadow-sm"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Articles
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2.5 cursor-pointer rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-all shadow-sm ${
                bookmarked
                  ? 'text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Bookmark Article"
            >
              <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Data Structures & Algorithm Optimization',
                    url: window.location.href,
                  });
                }
              }}
              className="p-2.5 cursor-pointer rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
              title="Share Article"
            >
              <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

     
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/50 text-[10px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Algorithms & Logic
          </span>
        </div>

       
        <h1 className="text-[17px] sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15] mb-6">
          Data Structures & Algorithm Optimization: Solving Complex Problems Cleanly
        </h1>

       
        <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 gap-4 sm:gap-6 mb-8 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-indigo-50 dark:bg-indigo-950/60 rounded-lg text-indigo-600 dark:text-indigo-400">
              <User className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <span className="text-[10px] sm:text-[14px] font-semibold text-slate-800 dark:text-slate-200">
              Kawsar Ahmed
            </span>
          </div>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <div className="flex items-center space-x-2">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
            <span className="text-[10px] sm:text-[14px]">Sep 19, 2026</span>
          </div>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <div className="flex items-center space-x-2">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
            <span className="text-[10px] sm:text-[14px]">18 min read</span>
          </div>
        </div>

        
        <div className="relative h-64 sm:h-[420px] w-full rounded-2xl overflow-hidden mb-10 bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-indigo-500/5">
          <Image
            src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1790221774/laptop_realistic_problem_solving_k5lp4x.png"
            alt="Algorithms and Logic Optimization"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>

       
        <div className="my-8 p-6 bg-white/70 dark:bg-slate-900/60 border-l-4 border-indigo-600 dark:border-indigo-500 rounded-r-2xl border-y border-r border-slate-200/60 dark:border-slate-800/60 shadow-sm backdrop-blur-sm">
          <p className="text-[12px] sm:text-xl italic font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
            &ldquo;Writing working code is easy; writing memory-efficient, fast, and scalable logic requires strong algorithmic thinking and dynamic problem-solving.&rdquo;
          </p>
        </div>

        <section className="space-y-4 mb-10">
          <h2 className="text-[15px] sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            1. Understanding Time vs. Space Complexity
          </h2>
          <p className="text-slate-600 text-[12px] sm:text-[15px] dark:text-slate-300 leading-relaxed text-base">
            Before writing a single line of production logic, analyzing Big-O notation is essential. A simple function processing 100 items will work smoothly with nested loops, but processing 1,000,000 items with O(N^2) complexity will choke the application thread.
          </p>
        </section>

      
        <section className="space-y-4 mb-10 border-b border-slate-200/80 dark:border-slate-800/80 pb-8">
          <h2 className="text-[15px] sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            2. Refactoring O(N^2) Loops to O(N) Hash Lookups
          </h2>
          <p className="text-slate-600 text-[12px] sm:text-[15px] dark:text-slate-300 leading-relaxed text-base">
            Let&apos;s compare a naive nested loop pattern against a space-efficient Hash Map solution when looking for complementary pairs.
          </p>

       
          <div className="relative group rounded-2xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-lg my-4">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800/90 dark:bg-slate-900/90 border-b border-slate-700/60 text-xs text-slate-300 font-mono">
              <span className="text-[10px] sm:text-[15px] font-semibold text-slate-300">logic/naive_solution.ts (Slow: O(N^2))</span>
              <button
                onClick={() => handleCopy(naiveLoopCode, 1)}
                className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                {copiedSection1 ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[10px] sm:text-[13px] font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[10px] sm:text-[13px]">Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 text-[5px] md:text-[10px] lg:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{naiveLoopCode}</code>
            </pre>
          </div>

        
          <div className="relative group rounded-2xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-lg my-4">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800/90 dark:bg-slate-900/90 border-b border-slate-700/60 text-xs text-slate-300 font-mono">
              <span className="text-[10px] sm:text-[15px] font-semibold text-slate-300">logic/optimized_solution.ts (Fast: O(N))</span>
              <button
                onClick={() => handleCopy(optimizedHashMapCode, 2)}
                className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                {copiedSection2 ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[10px] sm:text-[13px] font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[10px] sm:text-[13px]">Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 text-[5px] md:text-[10px] lg:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{optimizedHashMapCode}</code>
            </pre>
          </div>
        </section>


        <section className="space-y-4 mb-12">
          <h2 className="text-[15px] sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            3. Memory Tuning & Resource Optimization
          </h2>
          <p className="text-slate-600 text-[12px] sm:text-[15px] dark:text-slate-300 leading-relaxed text-base">
            Optimizing logic isn&apos;t just about execution speed—managing garbage collection, preventing memory leaks, and keeping heap memory light is crucial whether running backends or embedded IoT nodes.
          </p>

          <div className="p-5 bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl space-y-3">
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                Prefer in-place array transformations when memory overhead is strict.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                Use two-pointer and sliding window patterns for sub-array calculations.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                Clear unused memory buffers and dereference heavy structures proactively.
              </p>
            </div>
          </div>
        </section>

  
        <div className="p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-5 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md shadow-indigo-500/20">
            K
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Written by Kawsar Ahmed
            </h4>
            <p className="text-[10px] sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Software Engineer specializing in Data Structures, Problem Solving, and Algorithmic Performance Tuning.
            </p>
          </div>
        </div>

      </article>
    </main>
  );
}