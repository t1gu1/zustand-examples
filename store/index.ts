import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import {
  AnotherExampleStore,
  createAnotherExampleSlice,
} from "./slices/AnotherExampleSlice";

// Import Slices Types
import { ExampleStore, createExampleSlice } from "./slices/ExampleSlice";

export type AppStore = ExampleStore & AnotherExampleStore;

export const useAppStore = create<AppStore>()(
  persist(
    (...a) => ({
      // Slices
      ...createExampleSlice(...a),
      ...createAnotherExampleSlice(...a),
    }),
    {
      name: "appStoreDemo",
      version: 0,
      // Could be localstorage or sessionStorage
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ anotherExample }) => ({
        // Define what to keep in storage
        anotherExample,
      }),
    },
  ),
);
