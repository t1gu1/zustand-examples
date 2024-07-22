import { StateCreator } from "zustand";
import { AppStore } from "..";

interface AnotherExampleStore {
  anotherExample: {
    uiLanguage: "en" | "fr";
    currentTheme: "dark" | "light";
  };
  setUiLanguage: (uiLanguage: "en" | "fr") => void;
  toggleTheme: () => void;
}

const createAnotherExampleSlice: StateCreator<
  AppStore,
  [],
  [],
  AnotherExampleStore
> = (set, _get) => ({
  anotherExample: {
    uiLanguage: "en",
    currentTheme: "light",
  },
  // Keep setter outside of persist.partialize
  setUiLanguage: (uiLanguage) => {
    set((state) => ({
      anotherExample: { ...state.anotherExample, uiLanguage },
    }));
  },
  toggleTheme: () => {
    set(({ anotherExample }) => ({
      anotherExample: {
        ...anotherExample,
        currentTheme: anotherExample.currentTheme === "dark" ? "light" : "dark",
      },
    }));
  },
});

export { createAnotherExampleSlice };
export type { AnotherExampleStore };
