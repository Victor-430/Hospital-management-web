import React from "react";
import { DashboardCards } from "./DashboardCards";
import { PatientAnalytics } from "./PatientAnalytics";
import { NotificationsPanel } from "./NotificationPanel";
import { AppointmentList } from "./AppointmentList";

export const MainContent = () => {
  return (
    <div className="flex-1 p-6 space-y-6 flex-col ">
      <DashboardCards />

      {/* Analytics row - patient stats and gender charts */}
      <div className="w-full">
        <PatientAnalytics />
      </div>

      {/* Appointment Schedule and Notifications together */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <AppointmentList />
        <NotificationsPanel />
      </div>
    </div>
  );
};
