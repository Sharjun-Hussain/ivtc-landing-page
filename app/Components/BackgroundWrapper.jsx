"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BackgroundWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Floating Animation for Blobs
      const animateBlob = (ref, xRange, yRange, duration) => {
        gsap.to(ref.current, {
          x: `+=${xRange}`,
          y: `+=${yRange}`,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      };

      animateBlob(blob1Ref, 100, 150, 15);
      animateBlob(blob2Ref, -150, 100, 18);
      animateBlob(blob3Ref, 120, -120, 20);

      // 2. Parallax Effect on Scroll
      gsap.to(blob1Ref.current, {
        y: "50vh",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.to(blob2Ref.current, {
        y: "-30vh",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      gsap.to(blob3Ref.current, {
        y: "40vh",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 2.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      {/* GLOBAL BACKGROUND LAYER */}
      <div className="fixed inset-0 -z-50 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-700">
        {/* Mesh Gradient / Blobs */}
        <div
          ref={blob1Ref}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-[100px] pointer-events-none"
        />
        <div
          ref={blob2Ref}
          className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#002147]/10 dark:bg-indigo-500/10 blur-[120px] pointer-events-none"
        />
        <div
          ref={blob3Ref}
          className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-slate-200/5 dark:bg-blue-400/5 blur-[150px] pointer-events-none"
        />

        {/* Subtle texture overlay if needed */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mt-0" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
