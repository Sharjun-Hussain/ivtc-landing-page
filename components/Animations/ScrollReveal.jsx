"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ScrollReveal = ({ children, className = "", options = {} }) => {
  const [ref, isVisible] = useScrollReveal(options);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        return React.cloneElement(child, {
          className: `${child.props.className || ""} ${isVisible ? "animate-isVisible" : "opacity-0"}`.trim(),
          style: {
            ...child.props.style,
            visibility: isVisible ? "visible" : "hidden",
          }
        });
      })}
    </div>
  );
};

export default ScrollReveal;
