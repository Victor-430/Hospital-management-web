"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";
import { useHealthcareStore } from "@/utils/Store/Patient/patientStore";

export const UpcomingAppointments = () => {
  const { appointments } = useHealthcareStore();
  const upcomingAppointments = appointments
    .filter((apt) => apt.status === "upcoming")
    .slice(0, 2);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="lg:col-span-2"
    >
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <motion.div
                key={appointment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <h4 className="font-medium">{appointment.doctorName}</h4>
                    <p className="text-sm text-gray-600">
                      {appointment.specialty}
                    </p>
                    <p className="text-sm text-gray-500">{appointment.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{appointment.time}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
