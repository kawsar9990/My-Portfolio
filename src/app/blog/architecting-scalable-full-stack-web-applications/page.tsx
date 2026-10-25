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

export default function WebDevBlogPage() {
  const [copiedSection2, setCopiedSection2] = useState(false);
  const [copiedSection3, setCopiedSection3] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const dynamicImportCode = `import dynamic from 'next/dynamic';

// Heavy chart library loaded only when rendered
const AnalyticsChart = dynamic(() => import('@/components/AnalyticsChart'), {
  loading: () => <div className="h-64 bg-slate-100 dark:bg-slate-800/80 animate-pulse rounded-2xl" />,
  ssr: false,
});`;

  const imageOptCode = `import Image from 'next/image';

<Image 
  src="/dashboard-preview.png" 
  alt="Dashboard Preview" 
  width={1200} 
  height={600} 
  priority={true} // Eliminates LCP delays
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
/>`;

  const handleCopy = (text: string, section: number) => {
    navigator.clipboard.writeText(text);
    if (section === 2) {
      setCopiedSection2(true);
      setTimeout(() => setCopiedSection2(false), 2000);
    } else {
      setCopiedSection3(true);
      setTimeout(() => setCopiedSection3(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 pt-28 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500 relative overflow-hidden">
      
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px] dark:bg-purple-500/10" />

      <article className="max-w-4xl mx-auto relative z-10">


        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/50 text-[10px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Frontend & Architecture
          </span>
        </div>

     
        <h1 className="text-[17px] sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15] mb-6">
         Architecting Scalable Full-Stack Web Applications: From API Design to UI Performance
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
            <span className='text-[10px] sm:text-[14px]'>Jul 23, 2026</span>
          </div>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <div className="flex items-center space-x-2">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
            <span className='text-[10px] sm:text-[14px]'>15 min read</span>
          </div>
        </div>

       
        <div className="relative h-64 sm:h-[420px] w-full rounded-2xl overflow-hidden mb-10 bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-indigo-500/5">
          <Image
            src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1790221612/laptop_coding_illustration_itxv1a.png"
            alt="Performance Dashboard Preview"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>

       
        <div className="my-8 p-6 bg-white/70 dark:bg-slate-900/60 border-l-4 border-indigo-600 dark:border-indigo-500 rounded-r-2xl border-y border-r border-slate-200/60 dark:border-slate-800/60 shadow-sm backdrop-blur-sm">
          <p className="text-[12px] sm:text-xl italic font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
            &ldquo;Master Core Web Vitals using Server Components, Intelligent TanStack Query caching, Dynamic Imports, and Image priority strategies.&rdquo;
          </p>
        </div>

       
        <section className="space-y-4 mb-10">
          <h2 className="text-[15px] sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Why Performance is Non-Negotiable
          </h2>
          <p className="text-slate-600 text-[12px] sm:text-[15px] dark:text-slate-300 leading-relaxed text-base">
            A 100ms delay in website load time can hurt conversion rates by up to 7%. In modern web applications built with Next.js and React, performance optimization is a continuous process that spans both client and server boundaries.
          </p>
        </section>

      
        <section className="space-y-4 mb-10 border-b border-slate-200/80 dark:border-slate-800/80 pb-8">
          <h2 className="text-[15px] sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            1. Leveraging React Server Components (RSC)
          </h2>
          <p className="text-slate-600 text-[12px] sm:text-[15px] dark:text-slate-300 leading-relaxed text-base">
            Server Components allow you to render UI on the server and send zero JavaScript to the client browser for those elements.
          </p>

          <div className="p-5 bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl space-y-3">
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                <strong className="text-slate-900 dark:text-slate-100 font-semibold">Client Component (Heavy Bundle):</strong> Loads entire syntax highlighter or markdown parsing library directly on the client side.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                <strong className="text-slate-900 dark:text-slate-100 font-semibold">Server Component Solution:</strong> Keep heavy data parsing and markdown rendering on the server side so the user only downloads clean static HTML.
              </p>
            </div>
          </div>
        </section>

       
        <section className="space-y-4 mb-10 border-b border-slate-200/80 dark:border-slate-800/80 pb-8">
          <h2 className="text-[15px] sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            2. Dynamic Imports for Heavy Components
          </h2>
          <p className="text-slate-600 text-[12px] sm:text-[15px] dark:text-slate-300 leading-relaxed text-base">
            Do not force users to load components they haven&apos;t interacted with yet (e.g., Modals, Charts, Rich Text Editors).
          </p>

          <div className="relative group rounded-2xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-lg">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800/90 dark:bg-slate-900/90 border-b border-slate-700/60 text-xs text-slate-300 font-mono">
              <span className="text-[10px] sm:text-[15px] font-semibold text-slate-300">components/AnalyticsSection.tsx</span>
              <button
                onClick={() => handleCopy(dynamicImportCode, 2)}
                className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                {copiedSection2 ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[10px] sm:text-[13px] font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className='text-[10px] sm:text-[13px]'>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 text-[5px] md:text-[10px] lg:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{dynamicImportCode}</code>
            </pre>
          </div>
        </section>

       
        <section className="space-y-4 mb-12">
          <h2 className="text-[15px] sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            3. Optimizing Images with Next/Image
          </h2>
          <p className="text-slate-600 text-[12px] sm:text-[15px] dark:text-slate-300 leading-relaxed text-base">
            Images often account for more than 60% of total web page weight. Using intelligent image components ensures LCP (Largest Contentful Paint) remains fast.
          </p>

          <div className="relative group rounded-2xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-lg">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800/90 dark:bg-slate-900/90 border-b border-slate-700/60 text-xs text-slate-300 font-mono">
              <span className="text-[10px] sm:text-[15px] font-semibold text-slate-300">components/HeroBanner.tsx</span>
              <button
                onClick={() => handleCopy(imageOptCode, 3)}
                className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                {copiedSection3 ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[10px] sm:text-[13px] font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className='text-[10px] sm:text-[13px]'>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 text-[5px] md:text-[10px] lg:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{imageOptCode}</code>
            </pre>
          </div>
        </section>

       
        <div className="px-3 py-3 sm:p-6 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-5 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md shadow-indigo-500/20">
            K
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Written by Kawsar Ahmed
            </h4>
            <p className="text-[10px] sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Software Engineer & Full-Stack Developer focusing on clean architecture, performance, and modern web application development.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}