import React from "react";
import { Card, CardContent } from "../ui/card";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

export const FindDoctor = () => {
  return (
    <div className="">
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="pb-8 pt-4">
          <h2 className="text-4xl font-bold text-[#053C6D] mb-6 text-center">
            Find a Doctor
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Doctor name"
              className="p-4 h-16 border border-gray-200 rounded-xl focus:border-[#053C6D] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Specialty"
              className="p-4 border border-gray-200 rounded-xl focus:border-[#053C6D] focus:outline-none"
            />
            <div className="flex items-center ml-14 gap-4">
              <h1>Available</h1>
              <Switch className="bg-[#053C6D]" />
            </div>
            <Button className="bg-[#053C6D] h-16 hover:bg-[#042a4f] text-white p-4 rounded-xl">
              Search
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
