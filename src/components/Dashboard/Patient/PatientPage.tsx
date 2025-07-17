"use client";

import React from "react";

import { Header } from "./Header";
import { StatsCard } from "./StatsCard";
import { ProfileCard } from "./ProfileCard";
import { UpcomingAppointments } from "./UpcomingAppointments";
import { MedicationCard } from "./MedicationCard";
import { CalendarCard } from "./CalendarCard";

export const PatientPage = () => {
  return (
    <div className="flex-1 p-6 bg-gray-50">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StatsCard />

        <ProfileCard />
        <CalendarCard />

        <UpcomingAppointments />

        <MedicationCard />
      </div>
    </div>
  );
};
