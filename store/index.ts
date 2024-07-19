import { Platform } from "react-native";
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
      ...createExampleSlice(...a),
      ...createAnotherExampleSlice(...a),
    }),
    {
      name: "appStore",
      version: 0,
      storage: createJSONStorage(() =>
        Platform.OS === "web" ? localStorage : AsyncStorage,
      ),
      partialize: (state) => ({
        anotherExample: state.anotherExample,
      }),
    },
  ),
);
