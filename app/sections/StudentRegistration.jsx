"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Icons
import {
  User, Mail, Phone, GraduationCap, Send, Users, ShieldCheck,
  BookOpen, Building, Calendar as CalendarIcon, FileText,
  ArrowRight,
  Globe,
  CheckCircle
} from "lucide-react";
import ShineBadge from "@/components/ui/ShineBadge";

// UI Components
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- Configuration Data ---
const REGISTRATION_TYPES = [
  {
    id: "al",
    title: "A/L ICT",
    tags: ["Local", "Cambridge"],
    desc: "Master the syllabus with top instructors.",
    icon: BookOpen,
  },
  {
    id: "course",
    title: "Pro Courses",
    tags: ["CCNA", "CompTIA"],
    desc: "Industry programs for impact.",
    icon: Globe,
  },
  {
    id: "membership",
    title: "Membership",
    tags: ["Network", "Community"],
    desc: "IT professional network.",
    icon: Users,
  },
  {
    id: "degree",
    title: "BIT Degree",
    tags: ["Moratuwa", "Colombo"],
    desc: "Degree pathways.",
    icon: GraduationCap,
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
  al: ["A/L ICT Regular", "A/L ICT Revision", "Practical Sessions"],
  membership: ["General Membership", "Student Membership", "Professional Membership"],
  degree: ["BIT - University of Moratuwa", "BIT - University of Colombo", "Foundation Program", "Diploma Programs"],
};

// --- Reusable Sub-Components ---
const InputField = React.memo(({ label, icon: Icon, className, ...props }) => (
  <div className={cn("space-y-2", className)}>
    <label className="text-xs font-semibold   text-slate-500 dark:text-slate-400">
      {label}
    </label>
    <div className="relative group/input">
      <Icon
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-[#002147] dark:group-focus-within/input:text-blue-400 transition-colors"
        size={14}
      />
      <input
        className="w-full h-12 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl pl-11 pr-3 text-sm focus:border-[#002147] dark:focus:border-blue-500 focus:ring-1 focus:ring-[#002147]/30 dark:focus:ring-blue-500/30 outline-none transition-all font-medium"
        {...props}
      />
    </div>
  </div>
));
InputField.displayName = "InputField";

const CustomSelect = React.memo(({ label, icon: Icon, options, value, onChange, placeholder = "Select Option", className }) => (
  <div className={cn("space-y-2", className)}>
    <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
      {label}
    </label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full h-12! bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl  pr-3 text-sm focus:border-[#002147] dark:focus:border-blue-500 focus:ring-1 focus:ring-[#002147]/30 dark:focus:ring-blue-500/30 outline-none transition-all font-medium relative text-left">
        <Icon
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors"
          size={14}
        />
        <div className="pl-8">
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-[#0a0a0a] border-slate-200 dark:border-white/10 z-100">
        {options.map((opt) => (
          <SelectItem key={opt} value={opt} className="text-sm font-medium focus:bg-slate-100 dark:focus:bg-white/5">
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
));
CustomSelect.displayName = "CustomSelect";

// --- Main Component ---
const StudentRegistration = () => {
  const [activeForm, setActiveForm] = useState("course");
  const [date, setDate] = useState();
  const [sectionRef, isVisible] = useScrollReveal();

  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", nic: "",
    gender: "", address: "", city: "", district: "",
    postalCode: "", program: "", school: "",
    registrationType: "course",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (typeId) => {
    setActiveForm(typeId);
    setFormData((prev) => ({ ...prev, registrationType: typeId, program: "" }));
  };

  const activeTypeData = useMemo(() =>
    REGISTRATION_TYPES.find((t) => t.id === activeForm) || REGISTRATION_TYPES[0],
    [activeForm]
  );

  return (
    <section
      id="registration"
      ref={sectionRef}
      className="py-12 md:py-20 bg-transparent relative overflow-hidden"
    >
      {/* Unified Background Highlights */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* Increased max-width to accommodate two columns */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Two Column Grid - Form (Right) is slightly larger than Content (Left) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Content & Information */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            {/* Header Area */}
            <div className="space-y-4">
              <ShineBadge className={`opacity-0 ${isVisible ? 'animate-hero-fade-up' : ''}`}>
                Official Enrollment Portal
              </ShineBadge>
              <h2 className={`opacity-0 ${isVisible ? 'animate-hero-fade-up [animation-delay:100ms]' : ''} text-4xl md:text-5xl font-bold lg:text-6xl text-slate-900 dark:text-white  leading-[1.1]`}>
                Build Your <span className="text-transparent bg-clip-text bg-linear-to-r from-[#002147] to-[#0055aa] dark:from-blue-400 dark:to-blue-600">Future</span> Today.
              </h2>
              <p className={`opacity-0 ${isVisible ? 'animate-hero-fade-up [animation-delay:200ms]' : ''} text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-md leading-relaxed`}>
                Take the first step towards a successful career. Fill out the application form to register for your preferred pathway and gain access to world-class resources.
              </p>
            </div>

            {/* Features/Benefits List */}
            <div className={`opacity-0 ${isVisible ? 'animate-hero-fade-up [animation-delay:300ms]' : ''} space-y-5 pt-4`}>
              {[
                { title: "Expert Instructors", desc: "Learn from industry-leading professionals." },
                { title: "Recognized Certifications", desc: "Gain qualifications that stand out globally." },
                { title: "Flexible Pathways", desc: "Tailored programs matching your career goals." },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-[#002147] dark:text-blue-400">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-900 dark:text-white font-semibold">{feature.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact / Support Card */}
            <div className={`opacity-0 ${isVisible ? 'animate-hero-fade-up [animation-delay:400ms]' : ''} bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl flex items-center gap-5 mt-8`}>
              <div className="w-12 h-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-[#002147] dark:text-white shadow-sm">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px]   text-slate-500 dark:text-slate-400 font-medium">Need Assistance?</p>
                <p className="text-sm text-slate-900 dark:text-white mt-1 font-semibold">Call us at <a href="tel:+94771234567" className="text-[#002147] dark:text-blue-400 hover:underline">+94 77 123 4567</a></p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Application Form */}
          <div className={`lg:col-span-7 opacity-0 ${isVisible ? 'animate-hero-fade-up [animation-delay:500ms]' : ''} bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden group/form`}>
            {/* Subtle Accent Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#002147] to-transparent opacity-30" />
            
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Application Received!"); }}
              className="space-y-6 md:space-y-8"
            >
              {/* Step 1: Registration Path */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#002147] dark:text-blue-400 border-b border-[#002147]/20 dark:border-blue-400/20 pb-0.5 w-fit">
                    Step 01. Select Pathway
                  </label>
                  <span className="text-[10px] font-bold text-slate-400 italic text-right">Target: {activeTypeData.title}</span>
                </div>
                {/* Changed to grid-cols-2 so it fits well in the half-width container */}
                <div className="grid grid-cols-2 gap-3">
                  {REGISTRATION_TYPES.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleTypeChange(type.id)}
                      className={cn(
                        "group/btn  relative p-4 rounded-xl border transition-all duration-300 text-left",
                        activeForm === type.id
                          ? "bg-[#002147] border-[#002147] shadow-lg shadow-[#002147]/20"
                          : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-[#002147]/30"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300",
                          activeForm === type.id ? "bg-white text-[#002147]" : "bg-white dark:bg-white/10 text-slate-400"
                        )}>
                          <type.icon size={18} />
                        </div>
                        <div className="overflow-hidden">
                          <h4 className={cn(
                            "text-xs font-medium leading-tight truncate",
                            activeForm === type.id ? "text-white" : "text-slate-900 dark:text-white"
                          )}>
                            {type.title}
                          </h4>
                          <span className={cn(
                            "text-[10px] font-medium   truncate block mt-0.5",
                            activeForm === type.id ? "text-white/50" : "text-slate-400"
                          )}>
                            {type.tags[0]}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Full Information */}
              <div className="space-y-6 pt-6 border-t border-slate-100 dark:border-white/5">
                <label className="text-sm font-semibold text-[#002147] dark:text-blue-400 border-b border-[#002147]/20 dark:border-blue-400/20 pb-0.5 w-fit">
                  Step 02. Personal & Academic Details
                </label>

                {/* Personal Info Group */}
                <div className="grid md:grid-cols-2 gap-5 mt-3">
                  <InputField
                    label="Full Name"
                    name="fullName"
                    placeholder="Your official name"
                    icon={User}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  <InputField
                    label="NIC / Passport"
                    name="nic"
                    placeholder="ID number"
                    icon={FileText}
                    value={formData.nic}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2 flex flex-col">
                    <label className="text-[11px] font-bold   text-slate-500 dark:text-slate-400">
                      Date of Birth
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-medium h-12 rounded-xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-sm transition-all",
                            !date && "text-slate-400"
                          )}
                        >
                          <CalendarIcon className="mr-3 h-4 w-4 text-slate-400" />
                          {date ? format(date, "PPP") : <span>Birth Date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 rounded-xl shadow-2xl border-white/10 overflow-hidden" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="bg-white dark:bg-[#0a0a0a]"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <CustomSelect
                    label="Gender"
                    icon={Users}
                    value={formData.gender}
                    onChange={(val) => setFormData((prev) => ({ ...prev, gender: val }))}
                    options={["Male", "Female", "Prefer not to say"]}
                    required
                  />
                </div>

                {/* Contact Info Group */}
                <div className="grid md:grid-cols-2 gap-5">
                  <InputField
                    label="WhatsApp / Phone"
                    name="phone"
                    type="tel"
                    placeholder="+94"
                    icon={Phone}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="student@example.com"
                    icon={Mail}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <CustomSelect
                    label="District"
                    icon={Globe}
                    value={formData.district}
                    onChange={(val) => setFormData((prev) => ({ ...prev, district: val }))}
                    options={SRI_LANKA_DISTRICTS}
                    required
                  />
                  <InputField
                    label="City"
                    name="city"
                    placeholder="Your city"
                    icon={Building}
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Program Selection Group */}
                <div className="grid md:grid-cols-2 gap-5">
                  <CustomSelect
                    label={`${activeTypeData.title} Program`}
                    icon={GraduationCap}
                    value={formData.program}
                    onChange={(val) => setFormData((prev) => ({ ...prev, program: val }))}
                    options={COURSES[activeForm]}
                    placeholder="Select Program"
                    required
                  />
                  <InputField
                    label={activeForm === "al" ? "School Name" : "Current Occupation"}
                    name="school"
                    placeholder="Enter details"
                    icon={Building}
                    value={formData.school}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6">
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="group relative w-full sm:w-auto min-w-[280px] bg-linear-to-r from-[#002147] to-[#003366] text-white font-medium  py-4 px-10 rounded-full hover:shadow-[0_20px_40px_rgba(0,33,71,0.3)] transition-all duration-500 flex items-center justify-center gap-3 text-xs xl:text-sm active:scale-[0.98] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 font-medium">Submit Application</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentRegistration;
