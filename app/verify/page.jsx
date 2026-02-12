"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  XCircle,
  Download,
  Share2,
  Award,
  Calendar,
  User,
  BookOpen,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificateValidator = () => {
  const [certId, setCertId] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  const handleValidate = (e) => {
    e.preventDefault();
    if (!certId) return;

    setStatus("loading");

    // Mock Validation Logic
    setTimeout(() => {
      if (certId === "IVTC-2026-X89") {
        // Example Valid ID
        setResult({
          studentName: "Dulaj Nimansha",
          course: "CCNA 200-301 Enterprise Networking",
          issueDate: "January 15, 2026",
          grade: "Distinction",
          verificationUrl: "https://ivtc.lk/verify/IVTC-2026-X89",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  useEffect(() => {
    if (status === "success") {
      gsap.fromTo(
        resultRef.current,
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" },
      );
    }
  }, [status]);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-[#0a0a0a] pt-32 pb-20 px-6 transition-colors">
      <div className="max-w-3xl mx-auto">
        {/* --- 1. HEADER --- */}
        <header className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-blue-500/40">
              <ShieldCheck size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
            Verify <span className="text-blue-600">Achievement</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Enter the unique certificate ID to validate official IVTC
            credentials.
          </p>
        </header>

        {/* --- 2. SEARCH INPUT --- */}
        <div className="mb-12">
          <form onSubmit={handleValidate} className="relative group">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
              <Search size={22} />
            </div>
            <input
              type="text"
              placeholder="Ex: IVTC-2026-X89"
              value={certId}
              onChange={(e) => setCertId(e.target.value.toUpperCase())}
              className="w-full h-20 pl-16 pr-40 bg-white dark:bg-[#111] rounded-[2rem] border border-slate-200 dark:border-white/10 text-xl font-bold tracking-widest text-slate-900 dark:text-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-300 placeholder:font-normal placeholder:tracking-normal"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="absolute right-3 top-3 bottom-3 px-8 bg-slate-900 dark:bg-blue-600 hover:bg-blue-700 text-white rounded-[1.25rem] font-bold text-sm transition-all flex items-center gap-2"
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                "VALIDATE"
              )}
            </button>
          </form>
        </div>

        {/* --- 3. RESULTS AREA --- */}
        {status === "success" && result && (
          <div
            ref={resultRef}
            className="bg-white dark:bg-[#111] rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            {/* Top Banner */}
            <div className="bg-green-500 py-4 px-8 flex items-center justify-between">
              <span className="text-white text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <CheckCircle2 size={16} /> Authenticity Verified
              </span>
              <span className="text-white/80 text-[10px] font-bold uppercase">
                {result.verificationUrl.split("/").pop()}
              </span>
            </div>

            <div className="p-10 space-y-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                    Certificate Holder
                  </label>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <User className="text-slate-300" size={24} />{" "}
                    {result.studentName}
                  </h2>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="rounded-xl border-slate-100 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 font-bold text-xs h-11"
                  >
                    <Download size={16} className="mr-2" /> PDF
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-xl border-slate-100 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 font-bold text-xs h-11"
                  >
                    <Share2 size={16} />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-50 dark:border-white/5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Course Completed
                  </label>
                  <p className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
                    <BookOpen size={16} className="text-blue-600" />{" "}
                    {result.course}
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Issue Date
                  </label>
                  <p className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600" />{" "}
                    {result.issueDate}
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Academic Standing
                  </label>
                  <p className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
                    <Award size={16} className="text-blue-600" /> {result.grade}
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Digital ID
                  </label>
                  <p className="text-slate-900 dark:text-white font-mono font-bold text-sm">
                    {certId}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/20 p-8 rounded-3xl flex flex-col items-center text-center space-y-4">
            <XCircle className="text-red-500" size={48} />
            <div>
              <h3 className="text-red-900 dark:text-red-400 font-bold text-xl">
                Verification Failed
              </h3>
              <p className="text-red-700/60 dark:text-red-400/60 text-sm">
                The certificate number entered could not be found in our
                records. Please check the ID and try again.
              </p>
            </div>
            <Button
              onClick={() => setStatus("idle")}
              variant="ghost"
              className="text-red-600 font-bold text-xs uppercase tracking-widest"
            >
              Try Again
            </Button>
          </div>
        )}

        {/* --- 4. INFO TEXT --- */}
        <p className="mt-12 text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
          The IVTC Online Validation System provides secure confirmation of
          academic credentials. <br />
          Unauthorized use of this portal is strictly prohibited.
        </p>
      </div>
    </div>
  );
};

export default CertificateValidator;
