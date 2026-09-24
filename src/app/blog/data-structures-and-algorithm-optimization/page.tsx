'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Bookmark,
  Share2,
  Check,
  Copy,
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
    <main className="min-h-screen bg-white dark:bg-[#030712] pt-25 text-slate-800 dark:text-slate-200 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <article className="max-w-4xl mx-auto">
   
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>

          <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-400">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                bookmarked ? 'text-purple-600 dark:text-purple-400' : ''
              }`}
              title="Bookmark Article"
            >
              <Bookmark className="w-4 h-4" />
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
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Share Article"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

  
        <div className="mb-4">
          <span className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">
            Algorithms & Logic
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight mb-6">
          Data Structures & Algorithm Optimization: Solving Complex Problems Cleanly
        </h1>

       
        <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 gap-4 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-1.5">
            <User className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Kawsar Ahmed
            </span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-4 h-4" />
            <span>Sep 19, 2026</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4" />
            <span>18 min read</span>
          </div>
        </div>

        
        <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-10 bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
          <img
            src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1790221774/laptop_realistic_problem_solving_k5lp4x.png"
            alt="Algorithms and Logic Optimization"
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="my-8 pl-6 border-l-4 border-purple-600 dark:border-purple-500 py-1 bg-purple-50/50 dark:bg-purple-950/20 rounded-r-lg">
          <p className="text-[13px] sm:text-lg italic font-medium text-slate-700 dark:text-slate-300">
            &ldquo;Writing working code is easy; writing memory-efficient, fast, and scalable logic requires strong algorithmic thinking and dynamic problem-solving.&rdquo;
          </p>
        </div>

        
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            1. Understanding Time vs. Space Complexity
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Before writing a single line of production logic, analyzing Big-O notation is essential. A simple function processing 100 items will work smoothly with nested loops, but processing 1,000,000 items with O(N^2) complexity will choke the application thread.
          </p>
        </section>

        
        <section className="space-y-4 mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            2. Refactoring O(N^2) Loops to O(N) Hash Lookups
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Let&apos;s compare a naive nested loop pattern against a space-efficient Hash Map solution when looking for complementary pairs.
          </p>

          
          <div className="relative group rounded-xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-md my-4">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/80 dark:bg-slate-900/80 border-b border-slate-700/50 text-xs text-slate-400 font-mono">
              <span className='text-[10px]'>logic/naive_solution.ts (Slow: O(N^2))</span>
              <button
                onClick={() => handleCopy(naiveLoopCode, 1)}
                className="flex items-center space-x-1 hover:text-slate-200 transition-colors"
              >
                {copiedSection1 ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 text-[8px] sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{naiveLoopCode}</code>
            </pre>
          </div>

        
          <div className="relative group rounded-xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-md my-4">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/80 dark:bg-slate-900/80 border-b border-slate-700/50 text-xs text-slate-400 font-mono">
              <span className='text-[10px]'>logic/optimized_solution.ts (Fast: O(N))</span>
              <button
                onClick={() => handleCopy(optimizedHashMapCode, 2)}
                className="flex items-center space-x-1 hover:text-slate-200 transition-colors"
              >
                {copiedSection2 ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 text-[8px] sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{optimizedHashMapCode}</code>
            </pre>
          </div>
        </section>

       
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            3. Memory Tuning & Resource Optimization
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Optimizing logic isn&apos;t just about execution speed—managing garbage collection, preventing memory leaks, and keeping heap memory light is crucial whether running backends or embedded IoT nodes.
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm list-disc pl-5">
            <li>Prefer in-place array transformations when memory overhead is strict.</li>
            <li>Use two-pointer and sliding window patterns for sub-array calculations.</li>
            <li>Clear unused memory buffers and dereference heavy structures proactively.</li>
          </ul>
        </section>

       
        <div className="px-3 py-3 sm:p-6 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-[#0F172B] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
            K
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Written by Kawsar Ahmed
            </h4>
            <p className="text-[10px] sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Software Engineer specializing in Data Structures, Problem Solving, and Algorithmic Performance Tuning.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}