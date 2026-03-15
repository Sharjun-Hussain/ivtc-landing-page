"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShineBadge from "@/components/ui/ShineBadge";



const UPCOMING_COURSES = [
  {
    title: "Full Stack Web Development",
    date: "April 15, 2026",
    duration: "6 Months",
    desc: "Master modern web technologies from frontend to backend with hands-on projects.",
    image: "/courses/web-dev.png",
    tag: "Most Popular",
  },
  {
    title: "Data Science & AI",
    date: "May 01, 2026",
    duration: "8 Months",
    desc: "Unlock the power of data. Learn Python, Machine Learning, and Neural Networks.",
    image: "/courses/data-science.png",
    tag: "Trending",
  },
  {
    title: "Cyber Security Professional",
    date: "May 20, 2026",
    duration: "5 Months",
    desc: "Protect digital assets. Become an expert in network security and ethical hacking.",
    image: "/courses/cyber-security.png",
    tag: "Critical Skill",
  },
  {
    title: "Cloud Solutions Architect",
    date: "June 10, 2026",
    duration: "4 Months",
    desc: "Design scalable cloud infrastructures using AWS, Azure, and Google Cloud.",
    image: "/courses/cloud-computing.png",
    tag: "High Demand",
  },
];

const UpcomingCourses = () => {
  const [containerRef, isVisible] = useScrollReveal();

  return (
    <section
      ref={containerRef}
      className="py-24 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className={`course-header mb-16  text-left opacity-0 ${isVisible ? 'animate-hero-fade-up' : ''}`}>
          <ShineBadge className="mb-2 md:mb-0">
            Starting Soon
          </ShineBadge>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white  leading-tight mb-4">
            Upcoming <span className="text-[#002147] dark:text-blue-400">Intakes</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed lg:mx-0 mx-auto">
            Reserve your spot for our most anticipated technical programs. Limited seats available for the 2026 academic year.
          </p>
        </header>

        <div className={`carousel-container relative opacity-0 ${isVisible ? 'animate-carousel-entrance [animation-delay:200ms]' : ''}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {UPCOMING_COURSES.map((course, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:pl-6 basis-[80%] sm:basis-[70%] md:basis-1/2 lg:basis-1/4"
                >
                  <div className="group h-full bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] border border-slate-200 dark:border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#002147] dark:hover:border-blue-500/50 flex flex-col">
                    {/* Image Area */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 z-10">
                        <ShineBadge className="px-3 py-1 text-[9px] font-bold uppercase bg-black/60 text-white dark:text-white border-white/20 backdrop-blur-md">
                          {course.tag}
                        </ShineBadge>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase ">
                          <Calendar size={14} className="text-[#002147] dark:text-blue-400" />
                          {course.date}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase ">
                          <Clock size={14} className="text-[#002147] dark:text-blue-400" />
                          {course.duration}
                        </div>
                      </div>

                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#002147] dark:group-hover:text-blue-400 transition-colors">
                        {course.title}
                      </h4>
                      
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                        {course.desc}
                      </p>

                      <Link
                        href="/#registration"
                        className="inline-flex items-center justify-center w-full py-4 bg-[#002147] hover:bg-blue-900 dark:bg-white dark:text-black dark:hover:bg-slate-200 text-white rounded-2xl text-sm transition-all group/btn"
                      >
                        Register Now
                        <ArrowRight size={14} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Carousel Navigation */}
            <div className="hidden lg:flex justify-end gap-3 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 border-slate-200 dark:border-white/10 dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10" />
              <CarouselNext className="static translate-y-0 h-12 w-12 border-slate-200 dark:border-white/10 dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UpcomingCourses;
