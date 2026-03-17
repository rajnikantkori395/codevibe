"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  darkThemePalette,
  lightThemePalette,
  paletteToCssVariables,
  type BrandPalette,
} from "./theme-config";

export type ThemeMode = "dark" | "light";

const STORAGE_KEY = "codevibe-theme";

type ThemeContextValue = {
  mode: ThemeMode;
  palette: BrandPalette;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
  defaultMode?: ThemeMode;
};

function getStoredMode(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return null;
}

export function ThemeProvider({
  children,
  defaultMode = "dark",
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredMode();
    if (stored) setModeState(stored);
    setMounted(true);
  }, []);

  const palette = mode === "light" ? lightThemePalette : darkThemePalette;
  const cssVariables = useMemo(
    () => paletteToCssVariables(palette),
    [palette],
  );

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.dataset.theme = mode;
  }, [cssVariables, mode]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setModeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, next);
      }
      return next;
    });
  }, []);

  const value: ThemeContextValue = useMemo(
    () => ({ mode, palette, setMode, toggleTheme }),
    [mode, palette, setMode, toggleTheme],
  );

  if (!mounted) {
    return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

