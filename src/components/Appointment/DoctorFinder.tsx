import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DoctorSearchForm } from "../Types/doctorSearchForm";

export const DoctorFinder = () => {
  const { register, handleSubmit } = useForm<DoctorSearchForm>();

  const onSubmit = (data: DoctorSearchForm) => {
    console.log("Doctor search:", data);
    // Handle search
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Find A Doctor
        </h2>
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid md:grid-cols-4 gap-4"
            >
              <Input placeholder="Name" {...register("name")} className="p-3" />
              <Input
                placeholder="Specialty"
                {...register("specialty")}
                className="p-3"
              />
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="available"
                  {...register("available")}
                  className="w-4 h-4"
                />
                <label htmlFor="available" className="text-sm">
                  Available
                </label>
              </div>
              <Button
                type="submit"
                className="bg-[#053C6D] hover:bg-[#042a4f] text-white flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                Search
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
