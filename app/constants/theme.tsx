import { create } from "zustand";

interface Theme {
  isDark: Boolean;
  toogleTheme: () => void;
}

export const useTheme = create<Theme>((set) => ({
  isDark: true,
  toogleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));
