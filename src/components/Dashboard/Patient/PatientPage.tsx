"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
  MessageCircle,
  Bell,
  Mail,
} from "lucide-react";
import { useHealthcareStore } from "@/utils/Store/Patient/patientStore";
import {
  addDays,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDate,
  isToday,
} from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Header } from "./Header";
import { StatsCard } from "./StatsCard";
import { ProfileCard } from "./ProfileCard";
import { UpcomingAppointments } from "./UpcomingAppointments";
import { MedicationCard } from "./MedicationCard";

export const PatientPage = () => {
  return (
    <div className="flex-1 p-6 bg-gray-50">
      {/* Header */}
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <StatsCard />

        {/* User Profile Card */}
        <ProfileCard />

        {/* Upcoming Appointments */}
        <UpcomingAppointments />

        {/* Medications Table */}
        <MedicationCard />
      </div>
    </div>
  );
};
