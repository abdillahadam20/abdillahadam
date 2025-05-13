"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// This function allows us to create a loading screen that can be controlled externally
export default function LoadingScreen({
  onLoadingComplete,
}: {
  onLoadingComplete?: () => void;
}) {
  const [progress, setProgress] = useState(0);

  // Total loading time in milliseconds (10 seconds)
  const totalLoadingTime = 3000;
  // Update interval in milliseconds (100ms)
  const updateInterval = 100;
  // Calculate how many steps we need
  const totalSteps = totalLoadingTime / updateInterval;
  // Calculate increment per step
  const incrementPerStep = 100 / totalSteps;

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = Math.min(prev + incrementPerStep, 100);

          // If we've reached 100%, clear the interval and notify parent component
          if (newProgress >= 100) {
            clearInterval(interval);
            if (onLoadingComplete) {
              setTimeout(() => {
                onLoadingComplete();
              }, 500); // Small delay after reaching 100% for better UX
            }
            return 100;
          }

          return newProgress;
        });
      }, updateInterval);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, [incrementPerStep, onLoadingComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-white">
      <div className="w-1/2 max-w-sm flex flex-col items-center">
        {/* Lottie Animation */}
        <div className="mb-8 w-64 h-64">
          <DotLottieReact
            src="https://lottie.host/d40f9ffd-ec03-4097-950d-f5abfab2bad9/C3nAY9W01F.lottie"
            loop
            autoplay
            className="w-full h-full"
          />
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-gray-800 mb-4"
        >
          Loading...
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden">
          {/* Progress Bar */}
          <motion.div
            className="h-full bg-emerald-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress Percentage */}
        <motion.p
          className="text-gray-700 mt-2 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {Math.round(progress)}%
        </motion.p>
      </div>
    </div>
  );
}
