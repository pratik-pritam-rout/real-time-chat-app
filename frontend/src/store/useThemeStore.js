import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "Sunset",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme }); //Triggers re-render in subscribed components
  },
}));