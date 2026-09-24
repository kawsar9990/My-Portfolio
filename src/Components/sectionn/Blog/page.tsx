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
    <section className="w-full bg-white dark:bg-[#141C2B] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#A020F0] dark:text-[#C050FF] tracking-tight">
            Latest Articles & Engineering Guides
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
           In-depth tutorials, system architecture patterns, and web development insights.
          </p>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col justify-between group"
            >
              <div>
              
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  {post.imageUrl ? (
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm">
                      No Image Provided
                    </div>
                  )}
                  
            
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/95 dark:bg-slate-900/90 backdrop-blur-md text-purple-700 dark:text-purple-400 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                      {post.category}
                    </span>
                  </div>
                </div>

           
                <div className="p-6">
                
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 space-x-2 mb-3">
                    <Clock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                 
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 line-clamp-2 leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    <Link href={post.slug}>{post.title}</Link>
                  </h3>

                  
                  <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>

              
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={post.slug}
                  className="inline-flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group/link"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}