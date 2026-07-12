import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import {
  LanguageContext,
  type LanguageContextValue,
} from "./languageContext";
import { siteCopy, type Language } from "./siteContent";

const STORAGE_KEY = "lysy-portfolio-language";

function getInitialLanguage(): Language {
  try {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (savedLanguage === "ru" || savedLanguage === "en") {
      return savedLanguage;
    }
  } catch {
    // Storage can be unavailable in private browser contexts.
  }

  return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = siteCopy[language].meta.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    description?.setAttribute("content", siteCopy[language].meta.description);

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // The UI should keep working even when storage is blocked.
    }
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((currentLanguage) => (currentLanguage === "ru" ? "en" : "ru"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      copy: siteCopy[language],
      toggleLanguage,
    }),
    [language, toggleLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
