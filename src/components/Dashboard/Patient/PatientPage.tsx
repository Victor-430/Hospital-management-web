"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
  MessageCircle,
  Bell,
  Mail,
} from "lucide-react";
import { useHealthcareStore } from "@/utils/Store/Patient/patientStore";
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDate,
  isToday,
} from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const PatientPage = () => {
  const { currentUser, appointments } = useHealthcareStore();
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const upcomingAppointments = appointments
    .filter((apt) => apt.status === "upcoming")
    .slice(0, 2);

  const medications = [
    { name: "Ibuprofen 200mg", date: "03.05.2025", schedule: "Twice a day" },
    { name: "Amoxicillin 500mg", date: "16.04.2025", schedule: "Twice a day" },
    { name: "Lisinopril 10mg", date: "15.02.2025", schedule: "Once a day" },
  ];

  return (
    <div className="flex-1 p-6 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 ">
        <div className="flex items-center space-x-4  ">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Hello {currentUser.name},
            </h1>
            <p className="text-gray-600">You have no appointments today</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative flex gap-2">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
              3
            </div>
            <Mail />
          </div>
          <div className="relative flex gap-2">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
              6
            </div>
            <Bell />
          </div>
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 mb-1">Appointments</p>
                    <p className="text-2xl font-bold text-blue-700">4</p>
                    <p className="text-xs text-blue-500">
                      Last Appointment: 15.05.2025
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 mb-1">Prescriptions</p>
                    <p className="text-2xl font-bold text-green-700">2</p>
                    <p className="text-xs text-green-500">
                      Last added: 06.05.2025
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-600 mb-1">Lab Test</p>
                    <p className="text-2xl font-bold text-purple-700">5</p>
                    <p className="text-xs text-purple-500">
                      Last Appointment: 09.02.2025
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* User Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:row-span-3"
        >
          <Card className="bg-[#053C6DF2] text-white">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">{currentUser.name}</h3>
                <p className="text-blue-200">{currentUser.age} years old</p>
                <p className="text-blue-200 text-sm">{currentUser.location}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-blue-200 text-sm">Blood</p>
                  <p className="font-semibold">O+</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-200 text-sm">Height</p>
                  <p className="font-semibold">186cm</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-200 text-sm">Weight</p>
                  <p className="font-semibold">90kg</p>
                </div>
              </div>

              <Button className="w-full bg-white text-[#053C6DF2] hover:bg-gray-100">
                Update Profile
              </Button>
            </CardContent>
          </Card>

          {/* Mini Calendar */}
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
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-gray-500 py-2 font-medium"
                    >
                      {day}
                    </div>
                  )
                )}
                {monthDays.map((day) => (
                  <div
                    key={day.toString()}
                    className={`text-center py-2 cursor-pointer rounded ${
                      isToday(day)
                        ? "bg-[#053C6DF2] text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {getDate(day)}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <p className="text-sm text-[#053C6DF2]">8:00 AM</p>
                <Button variant="outline" size="sm" className="mt-2">
                  <Plus className="w-4 h-4 mr-2" />
                  Add reminder
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Chat Support Card */}
          <Card className="mt-4 bg-gray-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Need Help ?
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Chat with our AI assistant for quick support
                  </p>
                  <Button className="bg-[#053C6DF2] hover:bg-[#053C6DF2]/95 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start Chat
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Appointments */}
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
                        <h4 className="font-medium">
                          {appointment.doctorName}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {appointment.specialty}
                        </p>
                        <p className="text-sm text-gray-500">
                          {appointment.date}
                        </p>
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

        {/* Medications Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>Medications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Drug Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Schedule</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {medications.map((medication, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {medication.name}
                      </TableCell>
                      <TableCell>{medication.date}</TableCell>
                      <TableCell>{medication.schedule}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
