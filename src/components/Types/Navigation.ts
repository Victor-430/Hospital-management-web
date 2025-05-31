export interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
  href: string;
  badge?: string | number;
  children?: NavigationItem[];
}

export interface NavigationState {
  activeItem: string;
  setActiveItem: (item: string) => void;
  isCollapsed: boolean;
  toggleCollapsed: () => void;
}
