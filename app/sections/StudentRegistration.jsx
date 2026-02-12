"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Send,
  Users,
  ShieldCheck,
  BookOpen,
  Building,
  Calendar as CalendarIcon,
  FileText,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Lock,
  Globe,
  MapPin,
  Home,
  Hash,
} from "lucide-react";

// --- Shadcn UI Imports ---
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const REGISTRATION_TYPES = [
  {
    id: "al",
    title: "A/L ICT",
    tags: ["Local", "Cambridge"],
    desc: "Master the syllabus with highest-ranked instructors.",
    icon: BookOpen,
    color: "bg-blue-600",
    textActive: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "course",
    title: "Professional Courses",
    tags: ["CCNA", "CompTIA"],
    desc: "Accelerated industry programs for immediate impact.",
    icon: Globe,
    color: "bg-blue-500",
    textActive: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "membership",
    title: "IVTC Membership",
    tags: ["Network", "Community"],
    desc: "Join Sri Lanka's premier IT professional network.",
    icon: Users,
    color: "bg-indigo-500",
    textActive: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "degree",
    title: "BIT Programs",
    tags: ["Moratuwa", "Colombo"],
    desc: "University-affiliated degree pathways.",
    icon: GraduationCap,
    color: "bg-slate-900 dark:bg-slate-200",
    textActive: "text-slate-900 dark:text-white",
  },
];

const SRI_LANKA_DISTRICTS = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
  "Kilinochchi",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Moneragala",
  "Ratnapura",
  "Kegalle",
];

const COURSES = {
  course: [
    "Software Engineering",
    "Data Science",
    "Cyber Security",
    "Cloud Computing",
    "Web Development",
    "Mobile App Development",
  ],
  al: [
    "A/L ICT Regular",
    "A/L ICT Revision",
    "Practical Sessions",
    "Cambridge Syllabus",
  ],
  membership: [
    "General Membership",
    "Student Membership",
    "Professional Membership",
  ],
  degree: [
    "BIT - University of Moratuwa",
    "BIT - University of Colombo",
    "Foundation Program",
    "Diploma Programs",
  ],
};

const InputField = ({ label, icon: Icon, ...props }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
      {label}
    </label>
    <div className="relative group">
      <Icon
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
        size={18}
      />
      <input
        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl py-3.5 pl-12 pr-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all font-medium"
        {...props}
      />
    </div>
  </div>
);

const SelectField = ({
  label,
  icon: Icon,
  options,
  value,
  onChange,
  name,
  placeholder = "Select Option",
}) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
      {label}
    </label>
    <div className="relative group">
      <Icon
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
        size={18}
      />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl py-3.5 pl-12 pr-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all font-medium appearance-none cursor-pointer"
      >
        <option value="" className="dark:bg-slate-900">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option
            key={opt.id || opt}
            value={opt.id || opt}
            className="dark:bg-slate-900"
          >
            {opt.name || opt}
          </option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        size={18}
      />
    </div>
  </div>
);

const StudentRegistration = () => {
  const [activeForm, setActiveForm] = useState("course");
  const [date, setDate] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nic: "",
    gender: "",
    address: "",
    city: "",
    district: "",
    postalCode: "",
    program: "",
    school: "",
    alYear: "",
    registrationType: "course",
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".anim-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      // Fixed Sidebar Animation: clearProps ensures opacity isn't stuck at 0
      gsap.from(".anim-card", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.2,
        clearProps: "all",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      // Form Animation
      gsap.from(".anim-form-container", {
        x: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        clearProps: "all",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const activeTypeData = REGISTRATION_TYPES.find((t) => t.id === activeForm);

  return (
    <section
      id="registration"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-[#0a0a0a] min-h-screen relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-12">
          <h3 className="anim-header text-blue-600 font-mono tracking-widest uppercase text-xs mb-4 font-bold">
            / Spring 2026 Intake
          </h3>
          <h2 className="anim-header text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter">
            Begin Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-white dark:to-slate-400">
              Legendary
            </span>{" "}
            Journey.
          </h2>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Original Sidebar Style */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {REGISTRATION_TYPES.map((type) => (
              <div
                key={type.id}
                onClick={() => {
                  setActiveForm(type.id);
                  setFormData((prev) => ({
                    ...prev,
                    registrationType: type.id,
                    program: "",
                  }));
                }}
                className={`anim-card group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between
                  ${activeForm === type.id ? "bg-slate-50 dark:bg-white/5 border-blue-500 shadow-xl shadow-blue-500/10" : "bg-white dark:bg-[#111] border-slate-200 dark:border-white/5 hover:border-slate-300"}`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${activeForm === type.id ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-white/5 text-slate-400"}`}
                    >
                      <type.icon size={24} />
                    </div>
                    {activeForm === type.id && (
                      <CheckCircle className="h-6 w-6 text-blue-500" />
                    )}
                  </div>
                  <h4
                    className={`text-xl font-bold mb-2 ${activeForm === type.id ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-gray-400"}`}
                  >
                    {type.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {type.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-200/50 dark:bg-white/5 text-slate-500 uppercase font-bold tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-500 transition-colors">
                  <span>Select Pathway</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Form Container */}
          <div className="lg:col-span-8 anim-form-container">
            <div className="bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`h-2 w-2 rounded-full animate-pulse ${activeTypeData.color}`}
                  />
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                    {activeTypeData.title} Registration
                  </h3>
                </div>
                <p className="text-slate-500 dark:text-gray-400">
                  {activeTypeData.desc}
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Submitted!");
                }}
                className="space-y-6"
              >
                {/* Personal Section */}
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Full Name"
                    name="fullName"
                    icon={User}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  <InputField
                    label="NIC Number"
                    name="nic"
                    icon={FileText}
                    value={formData.nic}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Date of Birth
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-medium h-[54px] rounded-xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10",
                            !date && "text-slate-400",
                          )}
                        >
                          <CalendarIcon className="mr-3 h-4 w-4 text-slate-400" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <SelectField
                    label="Gender"
                    name="gender"
                    icon={Users}
                    value={formData.gender}
                    onChange={handleInputChange}
                    options={["Male", "Female", "Other"]}
                    required
                  />
                </div>

                {/* Contact Section */}
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="WhatsApp Number"
                    name="phone"
                    type="tel"
                    icon={Phone}
                    placeholder="+94"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    icon={Mail}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Address Section */}
                <InputField
                  label="Permanent Address"
                  name="address"
                  icon={Home}
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />

                <div className="grid md:grid-cols-3 gap-6">
                  <InputField
                    label="City"
                    name="city"
                    icon={MapPin}
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                  <SelectField
                    label="District"
                    name="district"
                    icon={Globe}
                    value={formData.district}
                    onChange={handleInputChange}
                    options={SRI_LANKA_DISTRICTS}
                    required
                  />
                  <InputField
                    label="Postal Code"
                    name="postalCode"
                    icon={Hash}
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Program Specifics */}
                {activeForm === "al" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      label="School"
                      name="school"
                      icon={Building}
                      value={formData.school}
                      onChange={handleInputChange}
                    />
                    <SelectField
                      label="A/L Year"
                      name="alYear"
                      icon={CalendarIcon}
                      value={formData.alYear}
                      onChange={handleInputChange}
                      options={["2024", "2025", "2026"]}
                    />
                  </div>
                )}

                <SelectField
                  label="Select Program"
                  name="program"
                  icon={GraduationCap}
                  value={formData.program}
                  onChange={handleInputChange}
                  options={COURSES[activeForm]}
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-slate-900 dark:bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-slate-800 dark:hover:bg-blue-500 transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-blue-500/10"
                >
                  <Send size={20} /> Complete Registration
                </button>

                <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-100 dark:border-white/5 opacity-50">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <ShieldCheck size={14} className="text-green-500" /> TVEC
                    CERTIFIED
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <Lock size={14} /> SECURE SESSION
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentRegistration;
