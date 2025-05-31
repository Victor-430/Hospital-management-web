import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const NameInput = ({ register, errors }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
        Name
      </Label>
      <Input
        id="name"
        type="text"
        placeholder="Enter your name"
        {...register("name")}
        className={`h-12 ${errors.email ? "border-red-500" : ""}`}
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}
    </div>
  );
};
