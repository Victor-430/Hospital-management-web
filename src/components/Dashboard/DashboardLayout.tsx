import { ReactNode } from "react";
import { Sidebar } from "./Doctor/Sidebar";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};
