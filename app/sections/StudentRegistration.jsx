"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Icons
import {
  User, Mail, Phone, GraduationCap, Send, Users, ShieldCheck,
  BookOpen, Building, Calendar as CalendarIcon, FileText,
  ChevronDown, CheckCircle, ArrowRight, Lock, Globe, MapPin, Home, Hash,
} from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// --- Configuration Data ---
const REGISTRATION_TYPES = [
  {
    id: "al",
    title: "A/L ICT",
    tags: ["Local", "Cambridge"],
    desc: "Master the syllabus with highest-ranked instructors.",
    icon: BookOpen,
    color: "bg-amber-600",
  },
  {
    id: "course",
    title: "Professional Courses",
    tags: ["CCNA", "CompTIA"],
    desc: "Accelerated industry programs for immediate impact.",
    icon: Globe,
    color: "bg-orange-600",
  },
  {
    id: "membership",
    title: "IVTC Membership",
    tags: ["Network", "Community"],
    desc: "Join Sri Lanka's premier IT professional network.",
    icon: Users,
    color: "bg-amber-500",
  },
  {
    id: "degree",
    title: "BIT Programs",
    tags: ["Moratuwa", "Colombo"],
    desc: "University-affiliated degree pathways.",
    icon: GraduationCap,
    color: "bg-slate-900 dark:bg-slate-200",
  },
];

const SRI_LANKA_DISTRICTS = [
  "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya",
  "Galle", "Matara", "Hambantota", "Jaffna", "Mannar", "Vavuniya",
  "Mullaitivu", "Kilinochchi", "Batticaloa", "Ampara", "Trincomalee",
  "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla",
  "Moneragala", "Ratnapura", "Kegalle",
];

const COURSES = {
  course: ["Software Engineering", "Data Science", "Cyber Security", "Cloud Computing", "Web Development", "Mobile App Development"],
  al: ["A/L ICT Regular", "A/L ICT Revision", "Practical Sessions", "Cambridge Syllabus"],
  membership: ["General Membership", "Student Membership", "Professional Membership"],
  degree: ["BIT - University of Moratuwa", "BIT - University of Colombo", "Foundation Program", "Diploma Programs"],
};

// --- Reusable Sub-Components ---
// COMPACT UPDATE: Reduced py-3.5 to py-2.5 and text size
const InputField = React.memo(({ label, icon: Icon, className, ...props }) => (
  <div className={cn("space-y-1.5", className)}>
    <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
      {label}
    </label>
    <div className="relative group">
      <Icon
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-600 transition-colors"
        size={16}
      />
      <input
        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-lg py-2.5 pl-10 pr-3 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all font-medium"
        {...props}
      />
    </div>
  </div>
));
InputField.displayName = "InputField";

const SelectField = React.memo(({ label, icon: Icon, options, value, onChange, name, placeholder = "Select Option", className }) => (
  <div className={cn("space-y-1.5", className)}>
    <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
      {label}
    </label>
    <div className="relative group">
      <Icon
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-600 transition-colors"
        size={16}
      />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-lg py-2.5 pl-10 pr-8 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 outline-none transition-all font-medium appearance-none cursor-pointer"
      >
        <option value="" className="dark:bg-slate-900">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="dark:bg-slate-900">{opt}</option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        size={16}
      />
    </div>
  </div>
));
SelectField.displayName = "SelectField";

// --- Main Component ---
const StudentRegistration = () => {
  const [activeForm, setActiveForm] = useState("course");
  const [date, setDate] = useState();
  const formTopRef = useRef(null); 
  
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", nic: "",
    gender: "", address: "", city: "", district: "",
    postalCode: "", program: "", school: "", alYear: "",
    registrationType: "course",
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
      });

      tl.from(".anim-header", {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.1
      })
      .from(".anim-card", {
        x: -30, opacity: 0, duration: 0.6, stagger: 0.1, clearProps: "all"
      }, "-=0.6")
      .from(".anim-form-container", {
        x: 30, opacity: 0, duration: 0.8, clearProps: "all"
      }, "-=0.6");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (typeId) => {
    setActiveForm(typeId);
    setFormData((prev) => ({ ...prev, registrationType: typeId, program: "" }));
    
    if (window.innerWidth < 1024 && formTopRef.current) {
        formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeTypeData = useMemo(() => 
    REGISTRATION_TYPES.find((t) => t.id === activeForm) || REGISTRATION_TYPES[0], 
  [activeForm]);

  return (
    // COMPACT UPDATE: Reduced py-24 to py-12
    <section
      id="registration"
      ref={sectionRef}
      className="py-10 md:py-16 bg-white dark:bg-[#0a0a0a] min-h-screen relative"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <header className="mb-8">
          <h3 className="anim-header text-amber-600 dark:text-amber-500 font-mono tracking-widest uppercase text-[10px] md:text-xs mb-3 font-bold">
            / Spring 2026 Intake
          </h3>
          {/* COMPACT UPDATE: Reduced font size */}
          <h2 className="anim-header text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
            Begin Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-500">
              Legendary
            </span>{" "}
            Journey.
          </h2>
        </header>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Navigation Cards (Mobile Scroll) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide">
            {REGISTRATION_TYPES.map((type) => {
              const isActive = activeForm === type.id;
              return (
                <div
                  key={type.id}
                  onClick={() => handleTypeChange(type.id)}
                  className={cn(
                    // COMPACT UPDATE: Reduced padding p-6 -> p-4
                    "anim-card group relative p-4 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between flex-shrink-0",
                    "min-w-[280px] lg:min-w-0 snap-center",
                    isActive 
                      ? "bg-slate-50 dark:bg-white/5 border-amber-500 shadow-lg shadow-amber-500/10" 
                      : "bg-white dark:bg-[#111] border-slate-200 dark:border-white/5 hover:border-slate-300"
                  )}
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div className={cn(
                        // COMPACT UPDATE: Smaller icon container
                        "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                        isActive ? "bg-amber-600 text-white" : "bg-slate-100 dark:bg-white/5 text-slate-400"
                      )}>
                        <type.icon size={20} />
                      </div>
                      {isActive && <CheckCircle className="h-5 w-5 text-amber-600" />}
                    </div>
                    <h4 className={cn(
                      "text-lg font-bold mb-1",
                      isActive ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-gray-400"
                    )}>
                      {type.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {type.tags.map((tag) => (
                        <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-200/50 dark:bg-white/5 text-slate-500 uppercase font-bold tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-amber-600 transition-colors">
                    <span>Select Pathway</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form Container */}
          <div className="lg:col-span-8 anim-form-container" ref={formTopRef}>
            {/* COMPACT UPDATE: Reduced padding p-6 -> p-6 md:p-8 */}
            <div className="bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 rounded-2xl p-6 md:p-8 shadow-xl">
              
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-3 mb-1">
                  <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${activeTypeData.color}`} />
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    {activeTypeData.title} Registration
                  </h3>
                </div>
                <p className="text-slate-500 dark:text-gray-400 text-xs md:text-sm">
                  {activeTypeData.desc}
                </p>
              </div>

              {/* COMPACT UPDATE: Reduced gap space-y-6 -> space-y-4 */}
              <form onSubmit={(e) => { e.preventDefault(); alert("Submitted!"); }} className="space-y-4">
                
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
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

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 flex flex-col">
                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Date of Birth
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            // COMPACT UPDATE: h-[54px] -> h-[42px]
                            "w-full justify-start text-left font-medium h-[42px] rounded-lg bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-sm",
                            !date && "text-slate-400"
                          )}
                        >
                          <CalendarIcon className="mr-3 h-4 w-4 text-slate-400" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
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

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
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

                <div className="grid md:grid-cols-3 gap-4">
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

                {/* Conditional Fields: A/L Specific */}
                {activeForm === "al" && (
                  <div className="grid md:grid-cols-2 gap-4">
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

                {/* Final Selection */}
                <SelectField
                  label="Select Program"
                  name="program"
                  icon={GraduationCap}
                  value={formData.program}
                  onChange={handleInputChange}
                  options={COURSES[activeForm]}
                  required
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-slate-900 dark:bg-amber-600 text-white font-bold py-4 rounded-xl hover:bg-slate-800 dark:hover:bg-amber-500 transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-amber-500/10 active:scale-[0.99] mt-2"
                >
                  <Send size={18} /> Complete Registration
                </button>

                {/* Footer Badges */}
                <div className="flex items-center justify-center gap-4 pt-3 border-t border-slate-100 dark:border-white/5 opacity-50">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold">
                    <ShieldCheck size={12} className="text-green-500" /> TVEC CERTIFIED
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold">
                    <Lock size={12} /> SECURE SESSION
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
