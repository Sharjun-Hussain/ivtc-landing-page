import React from "react";
import StaffHero from "@/components/Staff/StaffHero";
import StaffList from "@/components/Staff/StaffList";

export const metadata = {
  title: "Meet Our Expert Faculty | IVTC Campus",
  description: "Learn from industry experts and academic researchers at IVTC Campus. Discover our world-class IT faculty dedicated to your professional success.",
  keywords: ["IVTC Staff", "IT Faculty", "Computer Science Lecturers", "ICT Trainers Sri Lanka"],
};

const StaffPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <StaffHero />
      <StaffList />
    </main>
  );
};

export default StaffPage;
