"use client";

import React from "react";

/**
 * Temporarily disabled ScrollReveal. 
 * Renders children immediately without scroll triggers or opacity-0 states.
 */
const ScrollReveal = ({ 
  children, 
  className = "", 
  animationClass = "animate-hero-fade-up",
  options = { threshold: 0.1 } 
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        return React.cloneElement(child, {
          className: `${child.props.className || ""}`.trim(),
        });
      })}
    </div>
  );
};

export default ScrollReveal;
