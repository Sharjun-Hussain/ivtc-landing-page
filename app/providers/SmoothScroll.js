"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }) {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        // Ensure ScrollTrigger updates on Lenis scroll
        lenis.on("scroll", ScrollTrigger.update);

        // Add Lenis to GSAP ticker for synchronized animation frames
        const updateTicker = (time) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateTicker);

        return () => {
            gsap.ticker.remove(updateTicker);
        };
    }, [lenis]);

    return (
        <ReactLenis root options={{
            lerp: 0.1,
            duration: 1.5,
            smoothWheel: true,
            autoRaf: false // We use GSAP's ticker instead for better sync
        }}>
            {children}
        </ReactLenis>
    );
}
