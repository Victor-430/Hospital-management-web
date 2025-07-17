"use client";

import { useAuthStore } from "@/utils/Store/Login/authStore";
import { Bell, Mail } from "lucide-react";
import React from "react";

export const Header = () => {
  const { userName, user } = useAuthStore();

  return (
    <div className="flex items-center justify-between mb-8 border-b-2 py-4 border-gray-200">
      <div className="flex items-center space-x-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Hello {userName},
          </h1>
          <p className="text-gray-600">You have no appointments today</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex space-x-1">
          <Mail />
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
            3
          </div>
        </div>
        <div className="relative flex space-x-1">
          <Bell />
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
            6
          </div>
        </div>

        <img
          src={user?.image}
          className="w-16 h-16 bg-gray-300 rounded-full"
          alt="user_img"
        />
      </div>
    </div>
  );
};
