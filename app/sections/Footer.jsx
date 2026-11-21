import React from "react";
import Image from "next/image";
import FooterSocial from "../../components/Footer/FooterSocial";
import FooterLinks from "../../components/Footer/FooterLinks";
import ThemeToggle from "../../components/Footer/ThemeToggle";
import ScrollToTop from "../../components/Footer/ScrollToTop";

const Footer = ({ cmsData }) => {
  const brandData = cmsData?.brand;
  const bottomData = cmsData?.bottom;

  const getCopyrightText = () => {
    let rawText = bottomData?.copyright_text || `© ${new Date().getFullYear()} IVTC Campus. Designed & Developed by Inzeedo`;
    // Replace "Powered by" or "POWERED BY" if present in CMS data
    const text = rawText.replace(/powered\s+by/gi, "Designed & Developed by");
    const match = text.match(/inzeedo/i);
    if (match) {
      const index = match.index;
      const matchedString = match[0];
      const before = text.substring(0, index);
      const after = text.substring(index + matchedString.length);
      return (
        <>
          {before}
          <a 
            href="https://inzeedo.lk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors underline"
          >
            {matchedString}
          </a>
          {after}
        </>
      );
    }
    return text;
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-16 md:pt-24 pb-8 px-6 md:px-12 border-t border-white/5 overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-12 border-t border-white/5 pt-10 md:pt-12 mb-12 md:mb-20">
          <div className="lg:col-span-5 lg:pr-12 lg:border-r border-white/5 text-left">
            {/* Campus Logo & Name Branding for Mobile & Desktop */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white p-2.5 flex items-center justify-center shrink-0 shadow-md">
                <Image
                  src={brandData?.logo ? `https://api.ivtccampus.lk/${brandData.logo.replace(/\/+/g, '/')}` : "/ivtc_campus_logo.png"}
                  alt="IVTC Campus Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold tracking-tight text-white">
                  IVTC Campus
                </span>
                <span className="text-xs text-slate-400 font-normal">
                  Premier ICT & Higher Education Provider
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-8 font-normal">
              {brandData?.description || "IVTC Campus is committed to providing high-quality education through technology-driven learning experiences. Join us and unlock new opportunities."}
            </p>

            <FooterSocial cmsData={cmsData?.socials} />
          </div>

          <FooterLinks cmsData={cmsData} />
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-5 text-center md:text-left">
          <p className="text-slate-500 text-xs font-normal">
            {getCopyrightText()}
          </p>

          <div className="flex items-center gap-6">
            <ThemeToggle />
            <div className="w-[1px] h-3.5 bg-white/10" />
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;