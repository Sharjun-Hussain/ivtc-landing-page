import React from "react";

const HeroContent = () => {
  return (
    <section className="relative w-full flex justify-center bg-transparent p-0 md:p-6 md:min-h-screen">
      <div className="relative pt-21 md:pt-0 w-full max-w-[1600px] h-[700px] md:h-auto md:aspect-video lg:max-h-[850px] overflow-hidden rounded-none md:rounded-[4rem] shadow-2xl bg-black transform-gpu translate-z-0">
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/30 to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-24">
          <div className="hero-text opacity-0 animate-[hero-fade-up_1s_ease-out_forwards_400ms] mb-6 flex items-center gap-4">
            <span className="w-8 md:w-12 h-[3px] bg-linear-to-r from-[#002147] to-blue-900"></span>
            <span className="text-[10px] md:text-[11px] font-medium text-slate-200 tracking-wider">
              IVTC Campus Sri Lanka
            </span>
          </div>
          <h1 className="hero-text opacity-0 animate-[hero-fade-up_1s_ease-out_forwards_500ms] text-5xl md:text-7xl font-black text-white leading-tight md:leading-tight max-w-4xl tracking-tight">
            Empower Your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-200 via-white to-slate-200">Digital</span> Future.
          </h1>
          <p className="hero-text opacity-0 animate-[hero-fade-up_1s_ease-out_forwards_600ms] mt-6 text-lg md:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            Master the digital landscape with Sri Lanka's leading campus for A/L ICT, Higher National Diplomas, and Global Degree Pathways. Your journey to technical excellence starts here.
          </p>
          <div className="hero-text opacity-0 animate-[hero-fade-up_1s_ease-out_forwards_700ms] mt-8 md:mt-12">
            <button className="group relative h-12 px-12! bg-[#002147] text-white text-lg font-semibold rounded-3xl hover:bg-[#003366] transition-all shadow-lg flex items-center justify-center">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
