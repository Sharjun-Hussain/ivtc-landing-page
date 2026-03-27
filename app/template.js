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
            defaults: { ease: "power4.inOut" },
        });

        // Animate curtain and page content — skip global fixed Navbar header
        tl.set(".overlay", { yPercent: 0 })
            .set(".page-content > *", { y: 100, opacity: 0 });

        tl.to(".overlay", {
            yPercent: -100,
            duration: 0.8,
        })
            .to(".page-content > *", {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                clearProps: "all"
            }, "-=0.8");

    }, { scope: containerRef, dependencies: [pathname] });

    return (
        <div ref={containerRef} className="relative min-h-screen w-full bg-neutral-50 dark:bg-neutral-900">

            {/* 
        THE CURTAIN OVERLAY 
        A single, clean layer.
        z-[10001] ensures it is above even high z-index elements like WhatsApp button (9999).
        bg-neutral-900 is standard "Elegant Black". Change to your primary brand color if needed.
      */}
            <div className="overlay fixed inset-0 z-10001 bg-neutral-900 dark:bg-black pointer-events-none" />

            {/* PAGE CONTENT */}
            <div className="page-content w-full h-full">
                {children}
            </div>
        </div>
    );
}
