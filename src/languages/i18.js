import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { eng } from "./eng";
import { esp } from "./esp";

const { en } = eng;
const { es } = esp;

// i18next configuración inicial
i18next.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: "es",
  debug: true,
  resources: {
    en,
    es,
  },
});
