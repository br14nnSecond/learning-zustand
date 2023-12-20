"use client";

import { useState } from "react";
import { create } from "zustand";

interface ICountStore {
  count: number;
  increment: () => void;
  incrementBy: (num: number) => void;
}

const useCountStore = create<ICountStore>()((set) => ({
  count: 0,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  incrementBy: (num) =>
    set((state) => ({
      count: state.count + num,
    })),
}));

export default function Home() {
  const { count, increment, incrementBy } = useCountStore();
  const [incrementByVal, setIncrementByVal] = useState<number>(0);

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="text-5xl font-bold text-white">
        Counter: <span>{count}</span>
      </h1>
      <button
        className="rounded-full border-2 border-white bg-transparent px-4 py-2 text-white transition-colors duration-300 hover:bg-white hover:text-black"
        onClick={() => increment()}
      >
        Increment
      </button>
      <div className="flex flex-row gap-4">
        <button
          className="rounded-full border-2 border-white bg-transparent px-4 py-2 text-white transition-colors duration-300 hover:bg-white hover:text-black"
          onClick={() => incrementBy(incrementByVal)}
        >
          Increment By
        </button>
        <input
          className="w-20  text-center text-black"
          type="number"
          name="num"
          onChange={(e) => setIncrementByVal(Number(e.currentTarget.value))}
          value={incrementByVal === 0 ? "" : incrementByVal}
        />
      </div>
    </main>
  );
}
