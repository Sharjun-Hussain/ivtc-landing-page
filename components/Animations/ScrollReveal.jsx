"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ScrollReveal = ({ 
  children, 
  className = "", 
  animationClass = "animate-hero-fade-up",
  options = { threshold: 0.1 } 
}) => {
  const [ref, isVisible] = useScrollReveal(options);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        return React.cloneElement(child, {
          className: `${child.props.className || ""} ${isVisible ? animationClass : "opacity-0"}`.trim(),
        });
      })}
    </div>
  );
};

export default ScrollReveal;
