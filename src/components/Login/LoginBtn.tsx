import React from "react";
import { Button } from "../ui/button";

export const LoginBtn = ({ loading }) => {
  return (
    <Button
      type="submit"
      className="w-full h-12 hover:bg-[#053C6D]/80 rounded-4xl bg-[#053C6D] text-white font-medium"
      disabled={loading}
    >
      {loading ? "Logging in..." : "Login"}
    </Button>
  );
};
