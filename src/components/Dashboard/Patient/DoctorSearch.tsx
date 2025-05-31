"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Star, Heart, Filter } from "lucide-react";
import { useHealthcareStore } from "@/utils/Store/Patient/patientStore";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const DoctorSearch = () => {
  const { doctors, setSelectedDoctor } = useHealthcareStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const specialties = [
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist",
    "General",
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      !selectedSpecialty || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleDoctorSelect = (doctor: any) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Search Doctor</h1>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Hide Filters</span>
              </Button>
              <Button className="bg-[#053C6DF2]">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Specialty Filters */}
          <div className="mt-4">
            <h3 className="font-medium mb-3">Top Specialities</h3>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <Badge
                  key={specialty}
                  variant={
                    selectedSpecialty === specialty ? "default" : "outline"
                  }
                  className="cursor-pointer"
                  onClick={() =>
                    setSelectedSpecialty(
                      selectedSpecialty === specialty ? "" : specialty
                    )
                  }
                >
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing 1-12 of {filteredDoctors.length} Doctors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className="w-full h-48 bg-blue-100 rounded-lg mb-4"></div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 p-2"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{doctor.name}</h3>
                    <p className="text-gray-600">{doctor.specialty}</p>
                    <p className="text-sm text-gray-500">
                      {doctor.experience} experience
                    </p>

                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(doctor.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({doctor.reviews} reviews)
                      </span>
                    </div>

                    <div className="pt-2">
                      <p className="text-sm text-gray-500">Consulting Fee</p>
                      <p className="font-semibold">
                        ₦{doctor.consultationFee.toLocaleString()}
                      </p>
                    </div>

                    <Button
                      className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleDoctorSelect(doctor)}
                    >
                      Book Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No doctors found matching your criteria
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};
