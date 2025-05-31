import { useAuthStore } from "@/utils/Store/Login/authStore";
import { getRoleImage, getRoleTitle } from "@/utils/role";
import Image from "next/image";
import React from "react";

export const LeftSideImage = () => {
  const { userRole } = useAuthStore();
  const roleImage = getRoleImage(userRole);

  return (
    <div className="hidden lg:flex lg:w-1/2 bg-[#053C6D]  items-center justify-center p-8">
      <div className="w-full h-full mx-auto">
        <Image
          src={roleImage}
          alt={`${userRole} portal`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
