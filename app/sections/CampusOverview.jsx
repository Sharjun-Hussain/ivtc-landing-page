import React from "react";
import StatsGrid from "../../components/CampusOverview/StatsGrid";

const stats = [
  {
    label: "Active Students",
    value: 500,
    comment: "01",
    sub: "A thriving global community of learners.",
  },
  {
    label: "Years Experience",
    value: 15,
    comment: "02",
    sub: "Over a decade of academic excellence.",
  },
  {
    label: "Specialized Courses",
    value: 25,
    comment: "03",
    sub: "Curriculums designed for the modern industry.",
  },
];

const CampusStats = () => {
  return (
    <section className="lg:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <StatsGrid stats={stats} />
      </div>
    </section>
  );
};

export default CampusStats;
