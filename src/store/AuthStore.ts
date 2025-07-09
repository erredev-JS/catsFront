import { create } from "zustand";

interface AuthStore {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  logout: VoidFunction;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setLoggedIn: (value) => set({ isLoggedIn: value }),
  logout: () => set({ isLoggedIn: false }),
}));
