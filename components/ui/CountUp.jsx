"use client";
import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration = 2000, startOnView = true }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(!startOnView);

  useEffect(() => {
    if (startOnView) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      }, { threshold: 0.1 });

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
      return () => observer.disconnect();
    }
  }, [startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count}</span>;
};

export default CountUp;
