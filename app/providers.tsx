"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme/ThemeProvider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

