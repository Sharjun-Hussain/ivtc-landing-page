import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "Programs",
    links: [
      { name: "Software Engineering", path: "#" },
      { name: "Data Science", path: "#" },
      { name: "Cyber Security", path: "#" },
      { name: "Cloud Computing", path: "#" },
    ],
  },
  {
    title: "Campus Life",
    links: [
      { name: "Student Portal", path: "https://lms.ivtccampus.lk" },
      { name: "Events & Clubs", path: "#" },
    ],
  },
  {
    title: "Institute",
    links: [
      { name: "About IVTC", path: "/about" },
      { name: "Our Staff", path: "/about/our-staff" },
      { name: "Campus Policy", path: "/about/campus-policy" },
      { name: "Contact Us", path: "/contact" },
      { name: "Privacy Policy", path: "#" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12">
      {footerLinks.map((col, i) => (
        <div key={i}>
          <h4 className="text-[10px] font-bold uppercase text-white/80 mb-8 tracking-widest">
            {col.title}
          </h4>
          <ul className="space-y-5">
            {col.links.map((link, j) => (
              <li key={j}>
                <Link
                  href={link.path}
                  className="group flex items-center text-slate-400 hover:text-white text-sm transition-colors duration-300 w-fit"
                >
                  <span className="relative overflow-hidden pb-1">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-2 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-[opacity,transform] duration-300"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
