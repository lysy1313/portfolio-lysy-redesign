import { createContext } from "react";
import type { siteCopy, Language } from "./siteContent";

export interface LanguageContextValue {
  language: Language;
  copy: (typeof siteCopy)[Language];
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
