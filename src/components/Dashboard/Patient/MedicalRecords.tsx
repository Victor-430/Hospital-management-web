"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import { useHealthcareStore } from "@/utils/Store/Patient/patientStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const MedicalRecords = () => {
  const { medicalRecords } = useHealthcareStore();
  const [activeTab, setActiveTab] = useState("all");

  const getRecordsByType = (type: string) => {
    if (type === "all") return medicalRecords;
    return medicalRecords.filter((record) =>
      record.type.toLowerCase().includes(type.toLowerCase())
    );
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "lab result":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "immunization":
        return "bg-green-100 text-green-800 border-green-200";
      case "medication":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center space-x-2 mb-8">
          <Button variant="ghost" size="sm">
            ← Back
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Medical Records</h1>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="all">All Records</TabsTrigger>
            <TabsTrigger value="lab">Lab Results</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>All Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-gray-50">
                          <th className="text-left p-4 font-medium text-gray-700">
                            Date
                          </th>
                          <th className="text-left p-4 font-medium text-gray-700">
                            Type
                          </th>
                          <th className="text-left p-4 font-medium text-gray-700">
                            Description
                          </th>
                          <th className="text-left p-4 font-medium text-gray-700">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {getRecordsByType("all").map((record, index) => (
                          <motion.tr
                            key={record.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b hover:bg-gray-50"
                          >
                            <td className="p-4">{record.date}</td>
                            <td className="p-4">
                              <Badge className={getTypeColor(record.type)}>
                                {record.type}
                              </Badge>
                            </td>
                            <td className="p-4 text-blue-600 hover:underline cursor-pointer">
                              {record.description}
                            </td>
                            <td className="p-4">
                              <Button
                                variant="outline"
                                size="sm"
                                className="mr-2"
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                View Details
                              </Button>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="lab" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Lab Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {getRecordsByType("lab").map((record, index) => (
                      <motion.div
                        key={record.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 border rounded-lg hover:shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-medium">
                                {record.description}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {record.date}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="medications" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Medications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {getRecordsByType("medication").map((record, index) => (
                      <motion.div
                        key={record.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 border rounded-lg hover:shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 bg-purple-600 rounded"></div>
                            </div>
                            <div>
                              <h3 className="font-medium">
                                {record.description}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {record.date}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </motion.div>
                    ))}
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
