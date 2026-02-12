"use client";
import React from "react";
import { User, ChevronDown } from "lucide-react";

// Matches the uploaded hierarchy image
const ORG_DATA = {
  role: "Chairman",
  sub: "IVTC",
  children: [
    {
      role: "CEO",
      sub: "IVTC",
      children: [
        {
          role: "Director",
          children: [
            {
              role: "Director of Administration",
              children: [
                {
                  role: "Registrar",
                  children: [
                    { role: "Assistant Registrar" },
                    { role: "HR" },
                    { role: "Accountant" },
                  ],
                },
              ],
            },
            {
              role: "Director of Education",
              children: [{ role: "Dean" }],
            },
            {
              role: "Director of Foreign Affairs",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

const OrgNode = ({ node }) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center flex-1">
      {/* Node Card */}
      <div className="group relative flex flex-col items-center p-4 bg-white dark:bg-[#111] border border-slate-100 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-all min-w-[160px] z-10">
        <div className="w-10 h-10 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-2 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 transition-colors">
          <User size={20} />
        </div>
        <p className="text-[13px] font-bold text-slate-900 dark:text-white text-center leading-tight">
          {node.role}
        </p>
        {node.sub && (
          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tighter mt-1">
            {node.sub}
          </p>
        )}
      </div>

      {hasChildren && (
        <div className="flex flex-col items-center w-full pt-6 relative">
          {/* Vertical Connection Line Below Parent */}
          <div className="absolute top-0 w-px h-6 bg-slate-200 dark:bg-white/10" />

          {/* Horizontal Connection Line for Multiple Children */}
          {node.children.length > 1 && (
            <div className="absolute top-6 left-[15%] right-[15%] h-px bg-slate-200 dark:bg-white/10" />
          )}

          <div className="flex gap-4 w-full justify-center">
            {node.children.map((child, idx) => (
              <div
                key={idx}
                className="relative pt-6 flex justify-center flex-1"
              >
                {/* Vertical Line above each Child */}
                <div className="absolute top-0 w-px h-6 bg-slate-200 dark:bg-white/10" />
                <OrgNode node={child} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CompanyStructure = () => {
  return (
    <section className="reveal-section overflow-x-auto scrollbar-hide">
      {/* The Map Container */}
      <div className="min-w-[1000px] flex justify-center pb-12">
        <OrgNode node={ORG_DATA} />
      </div>
    </section>
  );
};

export default CompanyStructure;
