import React from "react";
import ShineBadge from "@/components/ui/ShineBadge";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Sparkles,
  MoveDown,
  Clock,
} from "lucide-react";
import ContactForm from "../../components/Contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors relative">
      {/* Mesh Background blobs - matching global style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full animate-blob-1" />
        <div className="absolute bottom-[20%] left-[-5%] w-[350px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[100px] rounded-full animate-blob-2" />
      </div>

      {/* --- 1. THE HERO SECTION --- */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 overflow-hidden border-b border-slate-100 dark:border-white/5 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="animate-hero-fade-up">
            <ShineBadge className="mb-8 mx-auto">
              <Sparkles size={14} className="text-[#002147] dark:text-blue-400" />
              Available for Inquiries
            </ShineBadge>
          </div>

          <h1 className="animate-hero-fade-up [animation-delay:100ms] text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] mb-8 tracking-tighter">
            Let’s Engineer <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#002147] via-[#003366] to-[#002147] dark:from-blue-400 dark:to-blue-600">
              Legendary
            </span>{" "}
            results.
          </h1>

          <p className="animate-hero-fade-up [animation-delay:200ms] text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            Whether you’re looking for course details, technical support, or
            corporate partnerships, our team is standing by to assist you.
          </p>

          <div className="animate-hero-fade-up [animation-delay:300ms] flex justify-center items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white dark:border-[#0d0d0d] bg-slate-200 overflow-hidden shadow-lg"
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 20}`}
                    alt="Support Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                Expert Support Team
              </p>
              <p className="text-[10px] font-black text-[#002147] dark:text-blue-400 uppercase tracking-widest mt-0.5">
                Active Now
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
            <MoveDown size={24} />
          </div>
        </div>
      </section>

      {/* --- 2. THE CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* --- LEFT SIDE: THE INFO HUB --- */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* CONTAINER FOR SMALL CARDS */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Contact Numbers", val: "+94 11 234 5678", icon: Phone },
                { label: "Official Email", val: "hello@ivtccampus.lk", icon: Mail },
                { label: "Digital Presence", val: "www.ivtccampus.lk", icon: Globe },
              ].map((info, idx) => (
                <div 
                  key={idx}
                  className={`animate-hero-fade-up group p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-[#002147]/30 dark:hover:border-blue-500/30 transition-all duration-300`}
                  style={{ animationDelay: `${400 + (idx * 100)}ms` }}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#002147] dark:bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-[#002147]/10">
                      <info.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1.5">
                        {info.label}
                      </p>
                      <p className="font-bold text-slate-900 dark:text-white text-lg">
                        {info.val}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* HQ Visual Card */}
            <div 
              className="animate-hero-fade-up [animation-delay:700ms] p-8 md:p-10 bg-[#002147] dark:bg-[#002147]/40 border border-[#002147] dark:border-white/5 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group/hq transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
              <MapPin className="absolute -right-4 -bottom-4 w-40 h-40 opacity-5 group-hover/hq:scale-110 group-hover/hq:rotate-12 transition-transform duration-700" />
              <div className="relative z-10 space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                  Main Headquarters
                </h4>
                <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                  Colombo 07, Level 04,
                  <br />
                  IVTC Campus Building.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <Clock size={14} className="text-slate-300" />
                  </div>
                  <div>
                    <p>Open Mon-Sat</p>
                    <p className="text-[10px] opacity-70">8:30 AM - 5:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: THE MESSAGE FORM --- */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
