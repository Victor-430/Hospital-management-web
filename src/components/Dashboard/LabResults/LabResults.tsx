"use client";

import { SidebarProvider } from "@/components/ui/sidebar";

import { LabResultsTable } from "./LabResultsTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Bell, ChevronDown } from "lucide-react";
import { useLabResultStore } from "@/utils/Store/Labresults/labResultsStore";

const LabResults = () => {
  const { searchTerm, setSearchTerm } = useLabResultStore();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <h1 className="text-lg font-bold text-[#212121]">
                  Lab Results
                </h1>
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
                    <div className="font-medium">Dr Favour John</div>
                    <div className="text-gray-500">Cardiologist</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <LabResultsTable />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default LabResults;
