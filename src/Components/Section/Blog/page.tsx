'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';

export interface BlogPost {
  id: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: '1',
    category: 'IoT & Hardware',
    readTime: '20 min read',
    date: 'Sep 24, 2026',
    title: 'Integrating Embedded Microcontrollers with Modern Web APIs for Automation',
    description:
      'Discover how to engineer memory-efficient microcontroller applications that communicate effortlessly with modern web infrastructure. This guide breaks down data serialization, hardware memory tuning, and secure API connectivity for scalable IoT deployments.',
    imageUrl: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1790221593/laptop_robotics_hacking_scene_boh3g5.png',
    slug: '/blog/designing-smart-embedded-systems',
  },
  {
    id: '2',
    category: 'Web Architecture',
    readTime: '15 min read',
    date: 'Sep 23, 2026',
    title: 'Architecting Scalable Full-Stack Web Applications: From API Design to UI Performance',
    description:
      'Master the art of building high-performance web applications. Learn how to decouple business logic, design secure REST APIs, implement server-side caching, and optimize dynamic UI performance for enterprise-grade scalability.',
    imageUrl: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1790221612/laptop_coding_illustration_itxv1a.png',
    slug: '/blog/architecting-scalable-full-stack-web-applications',
  },
  {
    id: '3',
    category: 'Algorithms & Logic',
    readTime: '18 min read',
    date: 'Sep 19, 2026',
    title: 'Data Structures & Problem Solving Optimization',
    description:
      'Stop writing inefficient loops and resource-heavy logic. Dive deep into time and space complexity, dynamic programming, and algorithmic optimization techniques to build high-performance, enterprise-ready software.',
    imageUrl: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1790221774/laptop_realistic_problem_solving_k5lp4x.png',
    slug: '/blog/data-structures-and-algorithm-optimization',
  },
];

export default function BlogSection() {
  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#141C2B] py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-sans antialiased overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-4 py-1.5 rounded-full mb-3 border border-indigo-200 dark:border-indigo-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Articles & Writings
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">Insights</span> & Tutorials
          </h2>

          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full my-3.5" />

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal max-w-xl">
            Exploring modern web development, architecture, and practical coding guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="group relative bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>

                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  {post.imageUrl ? (
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm">
                      No Image Provided
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-slate-900/80 text-indigo-300 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-md border border-indigo-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>{post.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    <Link href={post.slug}>{post.title}</Link>
                  </h3>

                  <p className="mt-2.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0 mt-auto">
                <Link
                  href={post.slug}
                  className="flex items-center justify-between border-t border-slate-200/80 dark:border-slate-800/80 pt-3 group/cta"
                >
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 group-hover/cta:underline">
                    Read Full Article
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/70 dark:border-indigo-800/50 group-hover/cta:bg-indigo-600 group-hover/cta:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </span>
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}