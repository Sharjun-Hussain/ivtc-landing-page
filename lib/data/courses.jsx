import React from "react";
import { Code2, Cpu, Database, Layout, ShieldCheck, Terminal } from "lucide-react";

export const CATEGORIES = [
  { id: "all", name: "All Categories" },
  { id: "software-engineering", name: "Software Engineering" },
  { id: "al-ict", name: "A/L ICT Mastery" },
  { id: "data-science", name: "Data Science" },
];

export const COURSES_DATA = [
  {
    id: 1,
    categoryId: "software-engineering",
    categoryName: "Software Engineering",
    title: "Full-Stack Web Development",
    duration: "6 Months",
    enrolled: 1240,
    tags: ["React", "Node.js", "MongoDB"],
    icon: <Layout size={28} />,
    desc: "Master modern web development from front-end interfaces to back-end APIs.",
  },
  {
    id: 2,
    categoryId: "software-engineering",
    categoryName: "Software Engineering",
    title: "Python Programming Mastery",
    duration: "3 Months",
    enrolled: 850,
    tags: ["Python", "Algorithms", "Automation"],
    icon: <Terminal size={28} />,
    desc: "A comprehensive guide to Python, focusing on logic, scripting, and automation.",
  },
  {
    id: 3,
    categoryId: "al-ict",
    categoryName: "A/L ICT Mastery",
    title: "Local Syllabus Revision",
    duration: "6 Months",
    enrolled: 2100,
    tags: ["Past Papers", "Exam Prep", "Theory"],
    icon: <Code2 size={28} />,
    desc: "Targeted revision focusing on past papers and marking schemes.",
  },
  {
    id: 4,
    categoryId: "al-ict",
    categoryName: "A/L ICT Mastery",
    title: "Cambridge ICT 9626",
    duration: "1 Year",
    enrolled: 1540,
    tags: ["Databases", "Systems", "Media"],
    icon: <Cpu size={28} />,
    desc: "Comprehensive coverage of IT systems, databases, and sound/video editing.",
  },
  {
    id: 5,
    categoryId: "data-science",
    categoryName: "Data Science",
    title: "Data Analytics Bootcamp",
    duration: "4 Months",
    enrolled: 920,
    tags: ["SQL", "PowerBI", "Analytics"],
    icon: <Database size={28} />,
    desc: "Learn how to extract, analyze, and visualize data to drive business decisions.",
  },
];
