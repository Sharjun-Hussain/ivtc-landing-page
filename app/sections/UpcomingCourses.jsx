import React from "react";
import ShineBadge from "@/components/ui/ShineBadge";
import CourseCarousel from "../../components/UpcomingCourses/CourseCarousel";

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
  const isVisible = true; // Handled in Client Component for animations

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <header className="course-header mb-16 text-left">
          <ShineBadge className="mb-2 md:mb-0">
            Starting Soon
          </ShineBadge>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-4 tracking-tight">
            Upcoming <span className="text-[#002147] dark:text-blue-400">Intakes</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed lg:mx-0 mx-auto">
            Reserve your spot for our most anticipated technical programs. Limited seats available for the 2026 academic year.
          </p>
        </header>

        <CourseCarousel courses={UPCOMING_COURSES} isVisible={isVisible} />
      </div>
    </section>
  );
};

export default UpcomingCourses;
