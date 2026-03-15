"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  Users,
  Target,
  Rocket,
  Globe,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Building2,
  ChevronDown,
  BookOpen,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CompanyStructure from "../Components/CompanyStructure";
import ShineBadge from "@/components/ui/ShineBadge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// --- DATA CONFIGURATION ---
const POLICIES = [
  {
    title: "Honest Learning",
    desc: "We expect all students to be honest in their studies and follow our campus rules.",
    icon: ShieldCheck,
  },
  {
    title: "Everyone is Welcome",
    desc: "Tech is for everyone. We welcome all students regardless of their background.",
    icon: Users,
  },
  {
    title: "Safety & Privacy",
    desc: "We protect your personal information with the best security systems.",
    icon: Briefcase,
  },
  {
    title: "Green Campus",
    desc: "We work hard to reduce waste and keep our environment clean for the future.",
    icon: Globe,
  },
];

const PARTNERS = [
  { name: "Marwadi University", image: "/partners/Marwadi-University.png" },
  { name: "FOM International University", image: "/partners/FOM-logo2.png" },
  { name: "International American University", image: "/partners/iau.png" },
  { name: "WES Approved", image: "/partners/wes-approved.jpeg" },
  { name: "British Council", image: "/partners/british-council.svg" },
  { name: "Ofqual", image: "/partners/ofqual.png" },
  { name: "SQA", image: "/partners/sqa.png" },
  { name: "OTHM Qualifications", image: "/partners/logo_othm.png" }
];

// --- COMPONENT START ---
const AboutPage = () => {
  const [heroRef, heroVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [missionRef, missionVisible] = useScrollReveal();
  const [leadershipRef, leadershipVisible] = useScrollReveal();
  const [partnersRef, partnersVisible] = useScrollReveal();
  const [guidelinesRef, guidelinesVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <main
      className="min-h-screen bg-transparent text-slate-900 dark:text-slate-50 selection:bg-[#002147] selection:text-white font-sans overflow-hidden"
    >
      {/* --- 1. HERO SECTION (CINEMATIC) --- */}
      <section ref={heroRef} className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-40 pb-32" aria-labelledby="about-hero-title">
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className={`opacity-0 ${heroVisible ? 'animate-hero-fade-up' : ''}`}>
            <ShineBadge className="mb-8">
              <Sparkles size={16} className="text-[#002147] dark:text-blue-400" />
              Sri Lanka's Leading Tech Campus
            </ShineBadge>
          </div>
          
          <h1 id="about-hero-title" className="text-6xl md:text-8xl lg:text-7xl font-bold leading-[0.9] mb-4 overflow-hidden">
            <div className={`pb-2 opacity-0 ${heroVisible ? 'animate-hero-fade-up [animation-delay:150ms]' : ''}`}>Empower Your Future</div>
            <div className={`text-transparent bg-clip-text bg-linear-to-r from-[#002147] to-blue-600 dark:from-white dark:to-blue-400 pb-2 opacity-0 ${heroVisible ? 'animate-hero-fade-up [animation-delay:300ms]' : ''}`}>
              From A/Ls to Beyond.
            </div>
          </h1>
          
          <p className={`text-xl md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed mb-7 opacity-0 ${heroVisible ? 'animate-hero-fade-up [animation-delay:450ms]' : ''}`}>
            Providing expert A/L ICT classes in Sri Lanka, specialized After A/L diploma programs, and dedicated pathways to help you achieve your Degree and Post-Graduate dreams.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 ${heroVisible ? 'animate-hero-fade-up [animation-delay:600ms]' : ''}`}>
            <Button className="h-12 px-12! rounded-3xl bg-[#002147] text-white hover:bg-blue-900 dark:bg-white dark:text-black dark:hover:bg-slate-200 font-bold text-lg shadow-xl shadow-[#002147]/20 transition-transform hover:scale-105">
              Explore Programs
            </Button>
            <Button variant="outline" className="h-12 px-12! rounded-3xl border-slate-300 dark:border-white/20 hover:bg-slate-50 dark:hover:bg-white/5 font-bold text-lg">
              Meet Our Faculty
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hidden md:block" aria-hidden="true">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* --- 2. FLOATING STATS PILL --- */}
      <section ref={statsRef} className="relative z-20 max-w-6xl mx-auto px-6 -mt-16 md:-mt-24 mb-32" aria-label="Campus Statistics">
        <div className={`stats-pill bg-white/80 dark:bg-[#111]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10 opacity-0 ${statsVisible ? 'animate-hero-fade-up' : ''}`}>
          {[
            { label: "Successful Students", val: "5,000+", icon: Users },
            { label: "Job Placement", val: "High Rate", icon: Target },
            { label: "Industry Partners", val: "30+", icon: Building2 },
            { label: "Learning Hub", val: "Modern", icon: Globe },
          ].map((stat, i) => (
            <div key={i} className={`flex-1 w-full text-center flex flex-col items-center justify-center pt-6 md:pt-0 first:pt-0 opacity-0 ${statsVisible ? 'animate-hero-fade-up' : ''}`} style={{ animationDelay: `${i * 100}ms` }}>
              <stat.icon size={24} className="text-[#002147] dark:text-blue-400 mb-3 opacity-80" />
              <div className="text-4xl md:text-3xl font-bold mb-1">{stat.val}</div>
              <div className="text-[11px] uppercase font-bold text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. MISSION & VISION (STICKY SCROLL STYLE) --- */}
      <section ref={missionRef} className="max-w-7xl mx-auto px-6 py-20" aria-labelledby="purpose-heading">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Sticky Left Column */}
          <div className={`lg:w-1/3 opacity-0 ${missionVisible ? 'animate-hero-fade-up' : ''}`}>
            <div className="sticky top-32">
              <h2 id="purpose-heading" className="text-4xl md:text-5xl font-bold mb-6">
                Our Purpose <br /> & Direction.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                We are here to help you move from school to a professional IT career with practical skills.
              </p>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-2/3 space-y-8">
            <div className={`bg-[#002147] dark:bg-blue-900/20 text-white rounded-[2rem] p-10 md:p-14 border border-transparent dark:border-blue-500/20 shadow-xl relative overflow-hidden opacity-0 ${missionVisible ? 'animate-hero-fade-up [animation-delay:150ms]' : ''}`}>
              <Rocket className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 dark:text-blue-500/10" />
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold uppercase mb-6">
                  Our Mission
                </div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  To provide practical IT training that helps you get a good job.
                </h3>
                <p className="text-blue-100/70 text-lg">
                  We use modern labs and experienced teachers to make sure you are ready for the IT industry in Sri Lanka and abroad.
                </p>
              </div>
            </div>

            <div className={`bg-slate-100 dark:bg-[#111] rounded-[2rem] p-10 md:p-14 border border-slate-200 dark:border-white/10 shadow-lg opacity-0 ${missionVisible ? 'animate-hero-fade-up [animation-delay:300ms]' : ''}`}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-[11px] font-bold uppercase mb-6">
                Our Vision
              </div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
                To be the most trusted place for IT education in Sri Lanka.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                We want to help all students learn the skills needed for high-paying tech careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section ref={leadershipRef} className="py-24 bg-white/5 dark:bg-white/5 backdrop-blur-3xl border-y border-slate-200 dark:border-white/10 mt-12" aria-labelledby="leadership-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-16 opacity-0 ${leadershipVisible ? 'animate-hero-fade-up' : ''}`}>
            <h2 id="leadership-heading" className="text-4xl md:text-5xl font-bold mb-6">Our Support Team & Faculty</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our campus is guided by experienced IT professionals and educators who understand the local and global job market.
            </p>
          </div>
          <div className={`opacity-0 ${leadershipVisible ? 'animate-hero-fade-up [animation-delay:200ms]' : ''}`}>
            <CompanyStructure />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="max-w-7xl mx-auto px-6 py-32" aria-labelledby="partners-heading">
        <div className={`text-center mb-16 opacity-0 ${partnersVisible ? 'animate-hero-fade-up' : ''}`}>
          <div className="text-[#002147] dark:text-blue-400 text-sm font-bold uppercase mb-2">
            Global Recognition
          </div>
          <h2 id="partners-heading" className="text-4xl font-bold mb-4">Our Affiliated Partners</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            IVTC partners with leading institutions and organizations to enhance education, foster innovation, and create opportunities for our students
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PARTNERS.map((partner, i) => (
            <div 
              key={i} 
              className={`group aspect-video flex items-center justify-center bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-2xl hover:border-[#002147] dark:hover:border-blue-500 hover:shadow-[0_0_30px_rgba(0,33,71,0.1)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-default p-6 overflow-hidden opacity-0 ${partnersVisible ? 'animate-hero-fade-up' : ''}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner.image}
                  alt={`${partner.name} logo - Official Partner of IVTC Campus`}
                  className="object-contain"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className={`flex flex-wrap justify-center gap-3 mt-12 opacity-0 ${partnersVisible ? 'animate-hero-fade-up [animation-delay:400ms]' : ''}`}>
          {["ISO 9001:2015", "TVEC Approved", "City & Guilds Partner", "Pearson VUE Authorized"].map((badge, i) => (
            <div key={i} className="px-5 py-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-sm font-semibold flex items-center gap-2">
              <Award size={16} className="text-[#002147] dark:text-blue-400" />
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* Guidelines Section */}
      <section ref={guidelinesRef} className="max-w-7xl mx-auto px-6 pb-32" aria-labelledby="guidelines-heading">
        <div className={`flex flex-col md:flex-row justify-between items-end mb-12 gap-6 opacity-0 ${guidelinesVisible ? 'animate-hero-fade-up' : ''}`}>
          <div>
            <h2 id="guidelines-heading" className="text-4xl font-bold mb-4">Campus Guidelines</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">
              A structured, safe, and professional environment designed to help you focus entirely on your technical growth.
            </p>
          </div>
          <Button variant="ghost" className="font-bold gap-2">
            Download Handbook <BookOpen size={18} />
          </Button>
        </div>

        <div className="policies-grid grid md:grid-cols-2 gap-6">
          {POLICIES.map((policy, i) => (
            <div 
              key={i} 
              className={`group relative bg-slate-50 dark:bg-[#0a0a0a] p-10 rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden transition-all duration-500 hover:bg-white dark:hover:bg-[#111] hover:shadow-xl opacity-0 ${guidelinesVisible ? 'animate-hero-fade-up' : ''}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500 ease-out" />
              <div className="w-14 h-14 bg-white dark:bg-[#222] rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 dark:border-white/5 mb-6 group-hover:scale-110 group-hover:text-[#002147] dark:group-hover:text-blue-400 transition-all duration-300">
                <policy.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{policy.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{policy.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className={`relative mx-6 mb-24 max-w-7xl xl:mx-auto bg-[#002147] dark:bg-black rounded-[3rem] px-6 py-24 text-center overflow-hidden border border-transparent dark:border-white/10 opacity-0 ${ctaVisible ? 'animate-hero-fade-up' : ''}`} aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_60%)] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 id="cta-heading" className="text-5xl md:text-7xl font-bold text-white mb-8">
            Start Your <br /> Journey Today.
          </h2>
          <Button className="h-12 px-12! rounded-3xl bg-white text-[#002147] hover:bg-slate-100 font-bold text-lg shadow-2xl transition-all hover:scale-105 group">
            Start Your Journey 
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
