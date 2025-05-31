import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const EmailInput = ({ register, errors }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        {...register("email")}
        className={`h-12 ${errors.email ? "border-red-500" : ""}`}
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}
    </div>
  );
};
