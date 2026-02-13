"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Template({ children }) {
    const pathname = usePathname();
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.inOut" }, // "power4" is the industry standard for premium feel
        });

        // 1. Initial State
        // Overlay covers screen completely
        tl.set(".overlay", { yPercent: 0 })
            // Content is pushed down by 100px and slightly transparent
            .set(".page-content", { y: 100, opacity: 0 });

        // 2. The Animation
        tl.to(".overlay", {
            yPercent: -100, // Slide curtain UP
            duration: 1.2,
        })
            .to(".page-content", {
                y: 0, // Slide content UP to neutral
                opacity: 1,
                duration: 1.0,
                ease: "power3.out", // Content settles gently
                clearProps: "all"
            }, "-=1.0"); // Content starts moving 0.2s after curtain starts (Parallax effect)

    }, { scope: containerRef, dependencies: [pathname] });

    return (
        <div ref={containerRef} className="relative min-h-screen w-full bg-neutral-50 dark:bg-neutral-900">

            {/* 
        THE CURTAIN OVERLAY 
        A single, clean layer.
        z-50 ensures it is above everything.
        bg-neutral-900 is standard "Elegant Black". Change to your primary brand color if needed.
      */}
            <div className="overlay fixed inset-0 z-50 bg-neutral-900 dark:bg-black pointer-events-none" />

            {/* PAGE CONTENT */}
            <div className="page-content w-full h-full">
                {children}
            </div>
        </div>
    );
}
