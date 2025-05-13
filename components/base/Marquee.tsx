"use client";

import type React from "react";

import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

interface SmoothSkillMarqueeProps {
  skills: Skill[];
  speed?: number;
  pauseOnHover?: boolean;
  gap?: number;
  className?: string;
}

export default function SmoothSkillMarquee({
  skills,
  speed = 40,
  pauseOnHover = true,
  gap = 24, // gap in pixels
  className = "",
}: SmoothSkillMarqueeProps) {
  // We need to duplicate the skills array enough times to ensure smooth looping
  // For safety, we'll duplicate it 3 times
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        className={`skill-marquee-container ${
          pauseOnHover ? "pause-on-hover" : ""
        }`}
      >
        <div
          className="skill-marquee-content"
          style={
            {
              "--skill-gap": `${gap}px`,
              "--skill-speed": `${100 / speed}s`,
            } as React.CSSProperties
          }
        >
          {duplicatedSkills.map((skill, index) => (
            <div key={`skill-${index}`} className="skill-item">
              <div className="skill-icon">
                <Image
                  src={skill.icon || "/placeholder.svg?height=64&width=64"}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .skill-marquee-container {
          display: flex;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .skill-marquee-content {
          display: flex;
          gap: var(--skill-gap);
          padding-right: var(--skill-gap);
          animation: scroll var(--skill-speed) linear infinite;
          /* Use will-change for better performance */
          will-change: transform;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .skill-item:hover {
          transform: scale(1.1);
        }

        .skill-icon {
          width: 5rem;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          border-radius: 0.75rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          padding: 0.75rem;
        }

        @media (min-width: 768px) {
          .skill-icon {
            width: 6rem;
            height: 6rem;
          }
        }

        .skill-name {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
        }

        .dark .skill-icon {
          background-color: #1f2937;
        }

        .dark .skill-name {
          color: #d1d5db;
        }

        @keyframes scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            /* Move exactly one set of items to create perfect loop */
            transform: translate3d(calc(-100% / 3), 0, 0);
          }
        }

        .pause-on-hover:hover .skill-marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
