"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingProps {
  texts: string[]; // multiple texts
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number; // pause between typing and deleting
  className?: string;
}

export default function Typing({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1500,
  className = "",
}: TypingProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex] || "";
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className={className}>
        {displayedText}
        <span className="inline-block w-[2px] h-[1em] bg-current animate-cursor" />
      </h1>

      <style jsx>{`
        .animate-cursor {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
}
