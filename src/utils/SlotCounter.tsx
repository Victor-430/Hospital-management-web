"use client";
import React, { useState, useEffect, useRef } from "react";

export const SlotCounter = ({ value, duration = 3000, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState("10");
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Extract number and suffix from value
  const parseValue = (val) => {
    const match = val.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (match) {
      return {
        number: parseFloat(match[1]),
        suffix: match[2],
      };
    }
    return { number: 0, suffix: val };
  };

  const { number: targetNumber, suffix } = parseValue(value);

  // Intersection Observer to trigger animation when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Animation effect
  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    const animationDelay = setTimeout(() => {
      let startTime = null;
      const startValue = 0;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue =
          startValue + (targetNumber - startValue) * easeOutCubic;

        // Format the display value
        let formattedValue;
        if (targetNumber >= 1000) {
          formattedValue = Math.floor(currentValue).toLocaleString();
        } else if (targetNumber % 1 !== 0) {
          formattedValue = currentValue.toFixed(1);
        } else {
          formattedValue = Math.floor(currentValue).toString();
        }

        setDisplayValue(formattedValue + suffix);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(animationDelay);
  }, [isVisible, targetNumber, suffix, duration, delay, hasAnimated]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {displayValue}
    </span>
  );
};
