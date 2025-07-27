"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useHealthcareStore } from "@/utils/Store/Patient/patientStore";
import { motion } from "framer-motion";

export const ProfileCard = () => {
  const { currentUser } = useHealthcareStore();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="lg:row-span-3"
    >
      <Card className="bg-[#1e3a8a] text-white">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4"></div>
            {/* <h3 className="text-xl font-semibold">{currentUser.name}</h3> */}
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

          <Button className="w-full bg-white text-blue-900 hover:bg-gray-100">
            Update Profile
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
