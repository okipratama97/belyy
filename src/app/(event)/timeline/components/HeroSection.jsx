"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import Image from "next/image";
import { useState, useEffect } from "react";

const TimeUnit = ({ label, value, isVisible = true }) => (
  <div
    className="flex flex-col items-center transition-all duration-500"
    style={{
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? "visible" : "hidden",
      transform: isVisible ? "scale(1)" : "scale(0.8)",
      width: isVisible ? "auto" : "0",
      margin: isVisible ? "0" : "0",
      overflow: "hidden",
      userSelect: "none",
    }}
  >
    <div
      className="bg-white rounded-2xl px-8 py-6 mb-3 shadow-sm transition-all duration-300"
      style={{ boxShadow: "0 4px 15px rgba(157, 85, 100, 0.08)" }}
    >
      <span className="text-5xl font-bold" style={{ color: "#9d5564" }}>
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span
      className="text-xs font-semibold uppercase tracking-wider"
      style={{ color: "#c4a5ad" }}
    >
      {label}
    </span>
  </div>
);

export default function HeroSection() {
  const [timeDifference, setTimeDifference] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const calculateTimeDifference = () => {
      const startDate = new Date(2026, 1, 15, 14, 0, 0); // February 15, 2026 14:00
      const currentDate = new Date();

      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();
      let days = currentDate.getDate() - startDate.getDate();
      let hours = currentDate.getHours() - startDate.getHours();
      let minutes = currentDate.getMinutes() - startDate.getMinutes();
      let seconds = currentDate.getSeconds() - startDate.getSeconds();

      // Adjust for negative values
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const previousMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0,
        );
        days += previousMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setTimeDifference({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    calculateTimeDifference();
    const interval = setInterval(calculateTimeDifference, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative flex flex-col flex-1 items-center justify-center font-sans overflow-hidden h-screen w-full snap-start snap-always"
      style={{ backgroundColor: "#fff8f7", userSelect: "none" }}
    >
      {/* Dot Grid Pattern Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        squareSize={7}
        gridGap={30}
        color="#cf8b96"
        flickerChance={0.5}
      />

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Circular Photo */}
        <div
          className="mb-8 p-2 bg-white rounded-full shadow-lg relative"
          style={{ width: "220px", height: "220px" }}
        >
          {/* Side Emojis for Photo */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-2xl">
            💞
          </div>
          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-2xl">
            💞
          </div>

          <Image
            src="/IMG_2_resized.JPG"
            alt="in love for"
            className="w-full h-full object-cover rounded-full"
            width={220}
            height={220}
            loading="eager"
          />
        </div>

        <h2
          className="text-4xl font-bold mb-12 uppercase tracking-widest"
          style={{
            color: "#9d5564",
            fontStyle: "italic",
            fontFamily: "var(--font-literata)",
          }}
        >
          in love for 💕
        </h2>

        <div
          className="flex gap-4 flex-wrap justify-center transition-all duration-500"
          style={{ transitionDelay: isHovered ? "0s" : "0s" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <TimeUnit
            label="Years"
            value={timeDifference.years}
            isVisible={isHovered}
          />
          <TimeUnit
            label="Months"
            value={timeDifference.months}
            isVisible={true}
          />
          <TimeUnit label="Days" value={timeDifference.days} isVisible={true} />
          <TimeUnit
            label="Hours"
            value={timeDifference.hours}
            isVisible={true}
          />
          <TimeUnit
            label="Minutes"
            value={timeDifference.minutes}
            isVisible={isHovered}
          />
          <TimeUnit
            label="Seconds"
            value={timeDifference.seconds}
            isVisible={isHovered}
          />
        </div>

        {/* Quote Section */}
        <p
          className="mt-16 text-center max-w-2xl px-6 text-lg leading-relaxed"
          style={{
            color: "#9d5564",
            fontStyle: "italic",
            fontFamily: "var(--font-literata)",
            fontWeight: 500,
          }}
        >
          Every day, every hour, and every second spent with you is a reminder
          of how blessed I am to have you in my life. 🌹 ✨
        </p>
      </div>
    </div>
  );
}
