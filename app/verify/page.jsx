import React from "react";

export const metadata = {
  title: "Verify Certificate | IVTC Campus Sri Lanka",
  description: "Securely verify the authenticity of IVTC Campus certificates and qualifications. Confirm student credentials instantly through our online validation system.",
  openGraph: {
    title: "Verify Certificate | IVTC Campus Sri Lanka",
    description: "Official certificate verification portal for IVTC Campus qualifications.",
  },
};
import { ShieldCheck } from "lucide-react";
import VerifyForm from "../../components/Verify/VerifyForm";

const CertificateValidatorPage = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-28 md:pt-40 pb-20">
        {/* --- HEADER --- */}
        <header className="text-center mb-10 md:mb-14 space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#002147] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#002147]/20">
              <ShieldCheck size={28} />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Verify Your{" "}
            <span className="text-[#002147] dark:text-blue-400">
              Certificate
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-md mx-auto">
            Enter your unique Certificate ID to instantly confirm the
            authenticity of your IVTC qualification.
          </p>
        </header>

        {/* --- INTERACTIVE FORM --- */}
        <VerifyForm />

        {/* --- FOOTER NOTE --- */}
        <p className="mt-10 text-center text-xs text-slate-400 leading-relaxed">
          The IVTC Online Validation System provides secure confirmation of
          academic credentials.
          <br className="hidden sm:block" />
          Unauthorized use of this portal is strictly prohibited.
        </p>
      </div>
    </div>
  );
};

export default CertificateValidatorPage;
