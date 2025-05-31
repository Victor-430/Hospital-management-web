"use client";

import React from "react";

import { useDashboardStore } from "@/utils/Store/Doctor/DashboardStore";
import { cn } from "@/lib/utils";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { RightSidebar } from "./RightSidebar";
import { useAuthStore } from "@/utils/Store/Login/authStore";

export const DoctorPage = () => {
  const { userName } = useAuthStore();
  const { sidebarCollapsed } = useDashboardStore();

  return (
    <div className=" bg-gray-50 flex rounded-lg">
      {/* Main Content */}
      <div
        className={cn(
          "flex-1 transition-all duration-300",
          sidebarCollapsed ? "ml-0" : "ml-0"
        )}
      >
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <Header userName={userName} />
          <div className="flex-1 flex">
            <MainContent />
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
