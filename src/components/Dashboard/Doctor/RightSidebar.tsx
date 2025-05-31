import React from "react";
import { AppointmentScheduler } from "./AppointmentScheduler";
import { UpcomingEvent } from "./UpcomingEvent";
import { MedicalBot } from "./MedicalBot";

export const RightSidebar = () => {
  return (
    <div className=" space-y-4">
      <AppointmentScheduler />
      <UpcomingEvent />
      <MedicalBot />
    </div>
  );
};
