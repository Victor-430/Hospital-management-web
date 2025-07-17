"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BarChart3, Calendar, Database } from "lucide-react";
import { useAuthStore } from "@/utils/Store/Login/authStore";

export const AdminPage = () => {
  const { userName } = useAuthStore();
  const adminServices = [
    {
      icon: Users,
      title: "Staff Management",
      description: "Manage hospital staff",
      color: "bg-blue-500",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Hospital analytics",
      color: "bg-green-500",
    },
    {
      icon: Calendar,
      title: "Scheduling",
      description: "Manage schedules",
      color: "bg-purple-500",
    },
    {
      icon: Database,
      title: "Database",
      description: "System database",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-8 bg-[#1e3a8a] text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome Admin {userName}</h1>
        <p className="text-indigo-100 text-lg">Administrator Dashboard</p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminServices.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 ${service.color} rounded-full mb-4`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">System Overview</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span>Active Staff</span>
              <span className="text-lg font-semibold">245</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span>Total Patients</span>
              <span className="text-lg font-semibold">1,847</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Administrative Tasks</h2>
          <div className="space-y-2">
            <Button className="w-full justify-start">Staff Reports</Button>
            <Button variant="outline" className="w-full justify-start">
              System Settings
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Data Backup
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
