"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <DotLottieReact>{children}</DotLottieReact>;
}
