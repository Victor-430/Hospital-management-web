"use client";

import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppointmentTable } from "./AppointmentTable";
import { AddAppointmentDialog } from "./AddApointment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Bell, ChevronDown, ArrowLeft } from "lucide-react";
import { useAppointmentStore } from "@/utils/Store/Doctor/appointmentStore";
import { useAuthStore } from "@/utils/Store/Login/authStore";

export const AppointmentPage = () => {
  const [isAddAppointmentOpen, setIsAddAppointmentOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useAppointmentStore();
  const { logout, user } = useAuthStore();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>Dashboard</span>
                  <span>•</span>
                  <span>Appointment</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-80 bg-gray-50 border-gray-200"
                  />
                </div>

                <Bell className="h-5 w-5 text-gray-400" />

                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="text-sm">
                    <div className="font-medium">
                      {user?.name || "Dr Favour John"}
                    </div>
                    <div className="text-gray-500">Cardiologist</div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={logout}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Header with back button and add appointment */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm" className="p-2">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <h1 className="text-xl font-semibold text-gray-900">
                  Appointments
                </h1>
              </div>

              <Button
                onClick={() => setIsAddAppointmentOpen(true)}
                className="bg-[#053C6D] hover:bg-[#053C6D]/95 hover:scale-105"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Appointment
              </Button>
            </div>

            <AppointmentTable />
          </div>
        </main>
      </div>

      <AddAppointmentDialog
        open={isAddAppointmentOpen}
        onOpenChange={setIsAddAppointmentOpen}
      />
    </SidebarProvider>
  );
};
