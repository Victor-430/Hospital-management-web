"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import React from "react";
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDate,
  isToday,
} from "date-fns";

export const CalendarCard = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  return (
    <Card className="mt-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">May 2025</CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentDate(addDays(currentDate, -30))}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentDate(addDays(currentDate, 30))}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-xs">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div
              key={day}
              className="text-center text-gray-500 py-2 font-medium"
            >
              {day}
            </div>
          ))}
          {monthDays.map((day) => (
            <div
              key={day.toString()}
              className={`text-center py-2 cursor-pointer rounded ${
                isToday(day) ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
            >
              {getDate(day)}
            </div>
          ))}
        </div>
        <div className="mt-4 text-right">
          <p className="text-sm text-blue-600">8:00 AM</p>
          <Button variant="outline" size="sm" className="mt-2">
            <Plus className="w-4 h-4 mr-2" />
            Add reminder
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
