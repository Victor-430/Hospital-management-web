import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export const RememberMe = ({ remember, value }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="rememberMe"
        checked={remember}
        onCheckedChange={(checked) => value("rememberMe", !!checked)}
      />
      <Label htmlFor="rememberMe" className="text-sm text-gray-600">
        Remember me
      </Label>
    </div>
  );
};
