"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Pill, Activity, FileText } from "lucide-react";
import { useAuthStore } from "@/utils/Store/Login/authStore";

export const NursePage = () => {
  const { userName } = useAuthStore();
  const nurseServices = [
    {
      icon: Users,
      title: "Patient Care",
      description: "Manage patient care",
      color: "bg-pink-500",
    },
    {
      icon: Pill,
      title: "Medications",
      description: "Medication administration",
      color: "bg-purple-500",
    },
    {
      icon: Activity,
      title: "Vitals",
      description: "Record vital signs",
      color: "bg-red-500",
    },
    {
      icon: FileText,
      title: "Reports",
      description: "Nursing reports",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-to-r from-pink-600 to-pink-800 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome Nurse {userName}!</h1>
        <p className="text-pink-100 text-lg">Nurse Dashboard</p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {nurseServices.map((service, index) => {
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
          <h2 className="text-xl font-semibold mb-4">Patient Assignments</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span>Room 101 - Sarah Wilson</span>
              <span className="text-sm text-gray-500">Medication due</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span>Room 205 - Mike Davis</span>
              <span className="text-sm text-gray-500">Vitals check</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Tasks</h2>
          <div className="space-y-2">
            <Button className="w-full justify-start">Record Vitals</Button>
            <Button variant="outline" className="w-full justify-start">
              Medication Log
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Patient Notes
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
