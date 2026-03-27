"use client";

import React from "react";

/**
 * Page Template: Transitions Removed
 * Renders the page content immediately without animations or overlays.
 */
export default function Template({ children }) {
    return (
        <div className="relative min-h-screen w-full bg-neutral-50 dark:bg-[#0a0a0a]">
            {/* PAGE CONTENT: Basic fade-in on mount */}
            <div className="page-content w-full h-full animate-fade-in">
                {children}
            </div>
        </div>
    );
}
