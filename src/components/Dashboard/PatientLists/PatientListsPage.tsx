"use client";

import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PatientTable } from "./PatientTable";
import { AddPatientDialog } from "./AddPatientDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus, Filter, Bell, ChevronDown } from "lucide-react";
import { usePatientStore } from "@/utils/Store/Patient/patientStor";
import { PatientStatus } from "@/components/Types/patient";
import { useAuthStore } from "@/utils/Store/Login/authStore";

export const PatientListsPage = () => {
  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
  const { searchTerm, statusFilter, setSearchTerm, setStatusFilter } =
    usePatientStore();
  const { logout, user } = useAuthStore();

  const statusOptions: {
    value: PatientStatus | "all";
    label: string;
    color: string;
  }[] = [
    { value: "all", label: "All Patients", color: "bg-gray-500" },
    { value: "Discharged", label: "Discharged", color: "bg-[#1ACF65]" },
    { value: "Report Pending", label: "Report Pending", color: "bg-[#1E61B8]" },
    { value: "ICU", label: "ICU", color: "bg-[#8F1EB8]" },
    { value: "In Recovery", label: "In Recovery", color: "bg-[#1EABB8]" },
    { value: "Life Support", label: "Life Support", color: "bg-[#B81E42]" },
  ];

  return (
    <SidebarProvider>
      <div className=" w-full bg-gray-50">
        <main className=" overflow-auto">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <h1 className="text-lg font-semibold text-gray-900">
                  Patient Dashboard
                </h1>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search patients..."
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
            {/* Tab Navigation */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-1">
                <Button
                  variant="default"
                  className="bg-[#053C6D] hover:bg-[#053C6D]"
                >
                  Hospitalized
                </Button>
                <Button variant="ghost" className="text-gray-600">
                  Outpatients
                </Button>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  onClick={() => setIsAddPatientOpen(true)}
                  className="bg-[#053C6D] hover:bg-[#053C6D]/95"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Patient
                </Button>

                <Select
                  value={statusFilter}
                  onValueChange={(value) =>
                    setStatusFilter(value as PatientStatus | "all")
                  }
                >
                  <SelectTrigger className="w-44">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full ${option.color}`}
                          ></div>
                          <span>{option.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Status Legend */}
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1ACF65] rounded-full"></div>
                <span className="text-sm text-gray-600">Discharged</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1E61B8] rounded-full"></div>
                <span className="text-sm text-gray-600">Report Pending</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#8F1EB8] rounded-full"></div>
                <span className="text-sm text-gray-600">ICU</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1EABB8] rounded-full"></div>
                <span className="text-sm text-gray-600">In Recovery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#B81E42] rounded-full"></div>
                <span className="text-sm text-gray-600">Life Support</span>
              </div>
            </div>

            <PatientTable />
          </div>
        </main>
      </div>

      <AddPatientDialog
        open={isAddPatientOpen}
        onOpenChange={setIsAddPatientOpen}
      />
    </SidebarProvider>
  );
};
