"use client";

import React from "react";

import { useDashboardStore } from "@/utils/Store/Doctor/DashboardStore";
import { cn } from "@/lib/utils";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { RightSidebar } from "./RightSidebar";

export const DoctorPage = () => {
  const { sidebarCollapsed } = useDashboardStore();

  return (
    <div className=" bg-gray-50 flex  rounded-lg">
      <div
        className={cn(
          "flex-1 transition-all duration-300",
          sidebarCollapsed ? "ml-0" : "ml-0"
        )}
      >
        <div className="  ">
          <Header />
          <div className=" flex flex-col md:flex-row  ">
            <MainContent />
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
