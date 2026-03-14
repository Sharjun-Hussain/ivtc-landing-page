import { useState, useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
    const [hasRevealed, setHasRevealed] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasRevealed) {
                setHasRevealed(true);
                if (observer && elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            }
        }, {
            threshold: 0.1,
            ...options
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasRevealed, options]);

    return [elementRef, hasRevealed];
};
