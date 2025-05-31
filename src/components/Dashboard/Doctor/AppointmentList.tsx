"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboardStore } from "@/utils/Store/Doctor/DashboardStore";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export const AppointmentList = () => {
  const { appointments } = useDashboardStore();

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const navigateMonth = (direction: "prev" | "next") => {
    const newMonth = new Date(currentMonth);
    if (direction === "prev") {
      newMonth.setMonth(currentMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(currentMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };
  return (
    <div className="space-y-3 h-[33rem] w-[20rem]">
      <Card className=" ">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">
              Appointment schedule
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Calendar Header */}
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">
              {currentMonth.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateMonth("prev")}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateMonth("next")}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {appointments.map((appointment, index) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div>
                <div className="flex items-center space-x-2">
                  <div className="text-sm font-medium text-gray-600">
                    {new Date(appointment.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <div className="text-sm font-medium">
                  {appointment.patientName}
                </div>
                <div className="text-xs text-gray-500">{appointment.time}</div>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
