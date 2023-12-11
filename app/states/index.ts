import { create } from 'zustand';

interface SplineStateModel {
  loaded: boolean;
  setLoaded: (value: boolean) => void;
}

export const useSplineState = create<SplineStateModel>((set) => ({
  loaded: false,
  setLoaded: (value: boolean) => set({ loaded: value }),
}));
