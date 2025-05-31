"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHealthcareStore } from "@/utils/Store/Patient/patientStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export const Appointments = () => {
  const { appointments, cancelAppointment } = useHealthcareStore();
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingAppointments = appointments.filter(
    (apt) => apt.status === "upcoming"
  );
  const pastAppointments = appointments.filter(
    (apt) => apt.status === "completed"
  );

  const handleCancelAppointment = (id: string) => {
    cancelAppointment(id);
  };

  const handleViewAppointment = (id: string) => {
    console.log("Viewing appointment:", id);
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Appointments</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
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
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-6 bg-white border rounded-lg shadow-sm"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                          <div>
                            <h3 className="font-semibold text-lg">
                              {appointment.doctorName}
                            </h3>
                            <p className="text-gray-600">
                              {appointment.specialty}
                            </p>
                            <p className="text-sm text-gray-500">
                              {appointment.type}
                            </p>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                {appointment.date}
                              </Badge>
                              <Badge variant="outline">
                                {appointment.time}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            onClick={() =>
                              handleCancelAppointment(appointment.id)
                            }
                          >
                            Cancel Appointment
                          </Button>
                          <Button
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() =>
                              handleViewAppointment(appointment.id)
                            }
                          >
                            View Appointment
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                    {upcomingAppointments.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        No upcoming appointments
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="past" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Past Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pastAppointments.map((appointment, index) => (
                      <motion.div
                        key={appointment.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-6 bg-gray-50 border rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                          <div>
                            <h3 className="font-semibold text-lg">
                              {appointment.doctorName}
                            </h3>
                            <p className="text-gray-600">
                              {appointment.specialty}
                            </p>
                            <p className="text-sm text-gray-500">
                              {appointment.type}
                            </p>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge variant="secondary">
                                {appointment.date}
                              </Badge>
                              <Badge variant="secondary">
                                {appointment.time}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline">View Details</Button>
                      </motion.div>
                    ))}
                    {pastAppointments.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        No past appointments
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};
