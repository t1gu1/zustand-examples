import { StateCreator } from "zustand";
import { AppStore } from "..";

interface ExampleStore {
  bears: number;
  setBears: (bears: number) => void;
  bees: number;
  setBees: (bees: number) => void;
  setTwoBeesByBears: () => void;
}

const createExampleSlice: StateCreator<AppStore, [], [], ExampleStore> = (
  set,
  get,
) => ({
  bears: 2,
  setBears: (bears) => {
    set({ bears });
  },
  bees: 4,
  setBees: (bees) => {
    set({ bees });
  },
  setTwoBeesByBears: () => {
    const { setBees, bears } = get();
    setBees(bears * 2);
  },
});

export { createExampleSlice };
export type { ExampleStore };
