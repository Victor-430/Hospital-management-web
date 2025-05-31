"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Shield, Database, Settings, Users } from "lucide-react";

export const SuperAdminPage = ({ userName }: { userName: string | null }) => {
  const superAdminServices = [
    {
      icon: Shield,
      title: "Security",
      description: "System security management",
      color: "bg-red-500",
    },
    {
      icon: Database,
      title: "Database Admin",
      description: "Database administration",
      color: "bg-blue-500",
    },
    {
      icon: Users,
      title: "User Management",
      description: "Manage all users",
      color: "bg-green-500",
    },
    {
      icon: Settings,
      title: "System Config",
      description: "System configuration",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="flex items-center mb-2">
          <Crown className="h-8 w-8 mr-2" />
          <h1 className="text-3xl font-bold">
            Welcome Super Admin {userName}!
          </h1>
        </div>
        <p className="text-purple-100 text-lg">Super Administrator Dashboard</p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {superAdminServices.map((service, index) => {
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span>Server Status</span>
              <span className="text-green-600 font-semibold">Online</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span>Database</span>
              <span className="text-blue-600 font-semibold">Healthy</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Global Stats</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span>Total Users</span>
              <span className="text-lg font-semibold">2,847</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span>Active Sessions</span>
              <span className="text-lg font-semibold">156</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">System Controls</h2>
          <div className="space-y-2">
            <Button className="w-full justify-start">System Backup</Button>
            <Button variant="outline" className="w-full justify-start">
              Security Logs
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Global Settings
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
