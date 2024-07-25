import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { AnimalSlice, createAnimalSlice } from "./slices/AnimalSlice";
import { GeneralSlice, createGeneralSlice } from "./slices/GeneralSlice";

// Import Slices Types

export type AppStore = AnimalSlice & GeneralSlice;

export const useAppStore = create<AppStore>()(
  persist(
    (...a) => ({
      // Slices
      ...createAnimalSlice(...a),
      ...createGeneralSlice(...a),
    }),
    {
      name: "appStoreDemo",
      version: 0,
      // Could be localstorage or sessionStorage
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ general }) => ({
        // Define what to keep in storage
        general,
      }),
    },
  ),
);
