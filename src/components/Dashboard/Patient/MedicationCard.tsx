"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const MedicationCard = () => {
  const medications = [
    { name: "Ibuprofen 200mg", date: "03.05.2025", schedule: "Twice a day" },
    { name: "Amoxicillin 500mg", date: "16.04.2025", schedule: "Twice a day" },
    { name: "Lisinopril 10mg", date: "15.02.2025", schedule: "Once a day" },
  ];
  return (
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
  );
};
