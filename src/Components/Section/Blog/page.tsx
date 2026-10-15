'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';


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
    <section className="w-full bg-white dark:bg-[#141C2B] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#9333ea] tracking-tight">
            Engineering Insights & Tutorials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl p-px bg-gradient-to-br from-purple-500/20 via-slate-200/40 to-fuchsia-500/20 dark:via-slate-700/40 hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="h-full flex flex-col rounded-[calc(1rem-1px)] bg-white dark:bg-[#1B2436] overflow-hidden">

           
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  {post.imageUrl ? (
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm">
                      No Image Provided
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-purple-600/90 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg shadow-purple-900/30 border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {post.category}
                    </span>
                  </div>
                </div>

               
                <div className="flex flex-col flex-1 p-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <Clock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>{post.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 line-clamp-2 leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    <Link href={post.slug}>{post.title}</Link>
                  </h3>

                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-xs line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="mt-auto pt-4">
                    <Link
                      href={post.slug}
                      className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3 group/cta"
                    >
                      <span className="text-sm font-bold tracking-wide bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                        Explore Insight
                      </span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 text-white shadow-lg shadow-purple-500/30 group-hover/cta:scale-110 group-hover/cta:rotate-[-45deg] transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}