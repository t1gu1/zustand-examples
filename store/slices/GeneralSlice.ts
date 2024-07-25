import { StateCreator } from "zustand";
import { AppStore } from "..";

interface GeneralSlice {
  general: {
    uiLanguage: "en" | "fr";
    currentTheme: "dark" | "light";
  };
  setUiLanguage: (uiLanguage: "en" | "fr") => void;
  toggleTheme: () => void;
}

const createGeneralSlice: StateCreator<AppStore, [], [], GeneralSlice> = (
  set,
  _get,
) => ({
  general: {
    uiLanguage: "en",
    currentTheme: "light",
  },
  // Keep setter outside of persist.partialize
  setUiLanguage: (uiLanguage) => {
    set(({ general }) => ({
      general: { ...general, uiLanguage },
    }));
  },
  toggleTheme: () => {
    set(({ general }) => ({
      general: {
        ...general,
        currentTheme: general.currentTheme === "dark" ? "light" : "dark",
      },
    }));
  },
});

export { createGeneralSlice };
export type { GeneralSlice };
