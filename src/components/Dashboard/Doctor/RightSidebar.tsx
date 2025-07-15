import React from "react";
import { UpcomingEvent } from "./UpcomingEvent";
import { MedicalBot } from "./MedicalBot";
import { CalendarCard } from "../Patient/CalendarCard";

export const RightSidebar = () => {
  return (
    <div className="space-y-4 p-6 ">
      {/* <AppointmentScheduler /> */}
      <CalendarCard />
      <UpcomingEvent />

      <MedicalBot />
    </div>
  );
};
