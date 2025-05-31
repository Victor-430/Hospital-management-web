import { create } from "zustand";

interface NavigationStore {
  activeItem: string;
  isCollapsed: boolean;
  setActiveItem: (item: string) => void;
  toggleCollapsed: () => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  activeItem: "contact",
  isCollapsed: false,

  setActiveItem: (item) => set({ activeItem: item }),
  toggleCollapsed: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
