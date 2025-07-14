"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useDashboardStore } from "@/utils/Store/Doctor/DashboardStore";

const genderData = [
  { name: "Women", value: 68, color: "#3b82f6" },
  { name: "Men", value: 32, color: "#1e40af" },
];

const weeklyData = [
  { day: "Mon", visits: 25 },
  { day: "Tue", visits: 30 },
  { day: "Wed", visits: 28 },
  { day: "Thu", visits: 35 },
  { day: "Fri", visits: 32 },
];

export const PatientAnalytics = () => {
  const { patients } = useDashboardStore();

  return (
    <div className="grid grid-cols-1  xl:grid-cols-3 gap-3 mb-8">
      {/* Patients Overview */}
      <Card className="bg-[#053C6D] text-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Patients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className=" flex gap-3 justify-between">
              <div className="  mb-2">
                <span className="text-sm">Total Patients</span>
                <span className="text-lg items-center  flex font-bold animate-pulse">
                  {patients.length}
                </span>
              </div>
              <div className="text-xs text-slate-300 space-y-4">
                <div>68.5% New Patients</div>
                <div>83.5% Old Patients</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gender Distribution */}
      {/* <Card className="h-[10.6rem] w-[8.5rem]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Gender</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {genderData.map((entry, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-sm text-gray-600">{entry.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Gender</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <PieChart width={120} height={120}>
              <Pie
                data={genderData}
                cx={60}
                cy={60}
                innerRadius={30}
                outerRadius={50}
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="mt-2 space-y-1">
            <div className="flex items-center text-sm">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span>Women</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-3 h-3 bg-blue-800 rounded-full mr-2"></div>
              <span>Men</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Chart */}
      {/* <Card className="lg:col-span-1 w-[30rem] h-[10.6rem]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Analytics</CardTitle>
          <p className="text-sm text-gray-500">This Week</p>
        </CardHeader>
        <CardContent>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card> */}

      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Analytics</span>
            <span className="text-sm font-normal text-gray-500">This Week</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-32 sm:h-48 md:h-64 xl:h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
