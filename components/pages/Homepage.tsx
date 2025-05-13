"use client";

import LoadingScreen from "@/components/base/Loading";
import Experience from "@/components/section/Experience";
import Hero from "@/components/section/Hero";
import Project from "@/components/section/Project";
import Skills from "@/components/section/Skills";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

export default function HomeContent() {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    if (hasVisitedBefore) {
      setIsFirstVisit(false);
      setLoading(false);
    } else {
      localStorage.setItem("hasVisitedBefore", "true");
      setIsFirstVisit(true);
      setLoading(true);
    }
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && isFirstVisit && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Animated Content - only after loading done */}
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.main
            key="main-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen bg-white dark:bg-gray-900"
          >
            <Hero />
            <Skills />
            <Experience />
            <Project />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
