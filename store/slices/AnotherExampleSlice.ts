import { StateCreator } from "zustand";
import { AppStore } from "..";

interface AnotherExampleStore {
  anotherExample: {
    uiLanguage: "en" | "fr";
    setUiLanguage: (uiLanguage: "en" | "fr") => void;
    currentTheme: "dark" | "light";
    toggleTheme: () => void;
  };
}

const createAnotherExampleSlice: StateCreator<
  AppStore,
  [],
  [],
  AnotherExampleStore
> = (set, _get) => ({
  anotherExample: {
    uiLanguage: "en",
    setUiLanguage: (uiLanguage) => {
      set((state) => ({
        anotherExample: { ...state.anotherExample, uiLanguage },
      }));
    },
    currentTheme: "light",
    toggleTheme: () => {
      set(({ anotherExample }) => ({
        anotherExample: {
          ...anotherExample,
          currentTheme:
            anotherExample.currentTheme === "dark" ? "light" : "dark",
        },
      }));
    },
  },
});

export { createAnotherExampleSlice };
export type { AnotherExampleStore };
