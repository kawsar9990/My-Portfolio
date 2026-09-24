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

export default function WebDevBlogPage() {
  const [copiedSection2, setCopiedSection2] = useState(false);
  const [copiedSection3, setCopiedSection3] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const dynamicImportCode = `import dynamic from 'next/dynamic';

// Heavy chart library loaded only when rendered
const AnalyticsChart = dynamic(() => import('@/components/AnalyticsChart'), {
  loading: () => <div className="h-64 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-xl" />,
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
    <main className="min-h-screen bg-white pt-25 dark:bg-[#030712] text-slate-800 dark:text-slate-200 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
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
                    title: 'Optimizing React & Next.js Performance',
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
            Frontend & Architecture
          </span>
        </div>

       
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight mb-6">
          Architecting Scalable Full-Stack Web Applications: From API Design to UI Performance
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
            <span>Jul 23, 2026</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4" />
            <span>15 min read</span>
          </div>
        </div>

        
        <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-10 bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
          <img
            src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1790221612/laptop_coding_illustration_itxv1a.png"
            alt="Performance Dashboard Preview"
            className="w-full h-full object-cover"
          />
        </div>

       
        <div className="my-8 pl-6 border-l-4 border-purple-600 dark:border-purple-500 py-1 bg-purple-50/50 dark:bg-purple-950/20 rounded-r-lg">
          <p className="text-[13px] sm:text-lg italic font-medium text-slate-700 dark:text-slate-300">
            &ldquo;Master Core Web Vitals using Server Components, Intelligent TanStack Query caching, Dynamic Imports, and Image priority strategies.&rdquo;
          </p>
        </div>

       
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Why Performance is Non-Negotiable
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            A 100ms delay in website load time can hurt conversion rates by up to 7%. In modern web applications built with Next.js and React, performance optimization is a continuous process that spans both client and server boundaries.
          </p>
        </section>

        
        <section className="space-y-4 mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            1. Leveraging React Server Components (RSC)
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Server Components allow you to render UI on the server and send zero JavaScript to the client browser for those elements.
          </p>
          
          <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm list-disc pl-5">
            <li>
              <strong className="text-slate-900 dark:text-slate-100">Client Component (Heavy Bundle):</strong> Loads entire syntax highlighter or markdown parsing library directly on the client side.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-slate-100">Server Component Solution:</strong> Keep heavy data parsing and markdown rendering on the server side so the user only downloads clean static HTML.
            </li>
          </ul>
        </section>

        
        <section className="space-y-4 mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            2. Dynamic Imports for Heavy Components
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Do not force users to load components they haven&apos;t interacted with yet (e.g., Modals, Charts, Rich Text Editors).
          </p>

          <div className="relative group rounded-xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/80 dark:bg-slate-900/80 border-b border-slate-700/50 text-xs text-slate-400 font-mono">
              <span className='text-[10px]'>components/AnalyticsSection.tsx</span>
              <button
                onClick={() => handleCopy(dynamicImportCode, 2)}
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
              <code>{dynamicImportCode}</code>
            </pre>
          </div>
        </section>

       
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            3. Optimizing Images with Next/Image
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Images often account for more than 60% of total web page weight. Using intelligent image components ensures LCP (Largest Contentful Paint) remains fast.
          </p>

          <div className="relative group rounded-xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/80 dark:bg-slate-900/80 border-b border-slate-700/50 text-xs text-slate-400 font-mono">
              <span>components/HeroBanner.tsx</span>
              <button
                onClick={() => handleCopy(imageOptCode, 3)}
                className="flex items-center space-x-1 hover:text-slate-200 transition-colors"
              >
                {copiedSection3 ? (
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
              <code>{imageOptCode}</code>
            </pre>
          </div>
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
              Software Engineer & Full-Stack Developer focusing on clean architecture, performance, and modern web application development.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}