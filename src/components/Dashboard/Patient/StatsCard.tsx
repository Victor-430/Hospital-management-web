"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, FileText, Pill } from "lucide-react";
import React from "react";

export const StatsCard = () => {
  return (
    <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className=" border-gray-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm  mb-1">Appointments</p>
                <p className="text-2xl font-bold ">4</p>
                <p className="text-xs ">Last Appointment: 15.05.2025</p>
              </div>
              {/* <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              </div> */}
              <Calendar className="w-6 h-6 " />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className=" border-gray-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm  mb-1">Prescriptions</p>
                <p className="text-2xl font-bold ">2</p>
                <p className="text-xs ">Last added: 06.05.2025</p>
              </div>
              <Pill className="w-6 h-6 " />
              {/* <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div> */}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className=" border-gray-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm  mb-1">Lab Test</p>
                <p className="text-2xl font-bold">5</p>
                <p className="text-xs ">Last Appointment: 09.02.2025</p>
              </div>
              {/* <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full">
                  {" "}
                </div>
              </div> */}
              <FileText className="w-6 h-6 " />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
