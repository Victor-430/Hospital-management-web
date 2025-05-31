"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useDashboardStore } from "@/utils/Store/Doctor/DashboardStore";
import { Star, Calendar, FileText, Activity } from "lucide-react";

const statCards = [
  {
    icon: Star,
    value: 12,
    label: "Reviews",
    color: "bg-purple-100 text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Calendar,
    value: 15,
    label: "Appointments",
    color: "bg-blue-100 text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Activity,
    value: 1,
    label: "Surgery",
    color: "bg-green-100 text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: FileText,
    value: 9,
    label: "Examination",
    color: "bg-red-100 text-red-600",
    bgColor: "bg-red-50",
  },
];

export const DashboardCards = () => {
  const { stats } = useDashboardStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statCards.map((card, index) => (
        <Card
          key={index}
          className={`${card.bgColor} border-none hover:shadow-lg transition-shadow duration-200`}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                <p className="text-sm text-gray-600 mt-1">{card.label}</p>
              </div>
              <div className={`${card.color} p-3 rounded-lg`}>
                <card.icon className="h-6 w-6 animate-pulse" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
