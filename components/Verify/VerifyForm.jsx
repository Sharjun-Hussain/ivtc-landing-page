"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  Search,
  CheckCircle2,
  XCircle,
  Download,
  Share2,
  Award,
  Calendar,
  User,
  BookOpen,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const VerifyForm = () => {
  const inputRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [result, setResult] = useState(null);
  const [certId, setCertId] = useState("");

  const handleValidate = useCallback((e) => {
    e.preventDefault();
    const id = inputRef.current?.value?.trim().toUpperCase();
    if (!id) return;

    setCertId(id);
    setStatus("loading");

    // Mock Validation Logic
    setTimeout(() => {
      if (id === "IVTC-2026-X89") {
        setResult({
          studentName: "Dulaj Nimansha",
          course: "CCNA 200-301 Enterprise Networking",
          issueDate: "January 15, 2026",
          grade: "Distinction",
        });
        setStatus("success");
      } else {
        setResult(null);
        setStatus("error");
      }
    }, 1500);
  }, []);

  const handleReset = useCallback(() => {
    setStatus("idle");
    setResult(null);
    if (inputRef.current) inputRef.current.value = "";
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      {/* --- SEARCH FORM --- */}
      <form onSubmit={handleValidate} className="mb-10 space-y-3">
        {/* Input row */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <Search size={20} />
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="e.g. IVTC-2026-X89"
            className="w-full h-14 pl-12 pr-4 bg-white dark:bg-[#111] rounded-2xl border border-slate-200 dark:border-white/10 text-base font-semibold text-slate-900 dark:text-white shadow-sm focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] dark:focus:border-blue-500 outline-none transition-all placeholder:text-slate-300 placeholder:font-normal"
          />
        </div>
        {/* Button — full-width on mobile */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full h-14 bg-[#002147] hover:bg-[#003366] text-white rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#002147]/20 active:scale-[0.98] disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <>
              <Search size={16} />
              Validate Certificate
            </>
          )}
        </button>
      </form>

      {/* --- SUCCESS RESULT --- */}
      {status === "success" && result && (
        <div className="bg-white dark:bg-[#111] rounded-3xl border border-slate-100 dark:border-white/5 shadow-xl overflow-hidden animate-hero-fade-up">
          {/* Top Banner */}
          <div className="bg-[#002147] py-3 px-6 flex flex-wrap items-center justify-between gap-2">
            <span className="text-white text-xs font-bold flex items-center gap-2">
              <CheckCircle2 size={14} />
              Authenticity Verified
            </span>
            <span className="text-white/60 text-[10px] font-semibold">
              {certId}
            </span>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            {/* Student name + actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#002147] dark:text-blue-400 mb-1">
                  Certificate Holder
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <User className="text-slate-300 shrink-0" size={22} />
                  {result.studentName}
                </h2>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-slate-200 dark:border-white/10 font-bold flex items-center gap-1.5"
                >
                  <Download size={15} /> PDF
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-slate-200 dark:border-white/10 font-bold"
                >
                  <Share2 size={15} />
                </Button>
              </div>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-white/5">
              {[
                {
                  label: "Course Completed",
                  value: result.course,
                  Icon: BookOpen,
                },
                { label: "Issue Date", value: result.issueDate, Icon: Calendar },
                { label: "Academic Standing", value: result.grade, Icon: Award },
                { label: "Certificate ID", value: certId, Icon: ShieldCheck },
              ].map(({ label, value, Icon }) => (
                <div key={label} className="space-y-1">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="text-slate-900 dark:text-white font-bold text-sm flex items-center gap-2">
                    <Icon
                      size={14}
                      className="text-[#002147] dark:text-blue-400 shrink-0"
                    />
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- ERROR STATE --- */}
      {status === "error" && (
        <div className="bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/20 p-8 rounded-3xl flex flex-col items-center text-center space-y-4 animate-hero-fade-up">
          <XCircle className="text-red-500" size={44} />
          <div>
            <h3 className="text-red-900 dark:text-red-400 font-bold text-lg">
              Certificate Not Found
            </h3>
            <p className="text-red-700/60 dark:text-red-400/60 text-sm mt-1 leading-relaxed">
              The ID you entered could not be found. Please check the
              certificate ID and try again.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="h-11 px-8 rounded-2xl border border-red-400 text-red-600 font-bold text-sm transition-all hover:bg-red-50 dark:hover:bg-red-500/10"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default VerifyForm;
