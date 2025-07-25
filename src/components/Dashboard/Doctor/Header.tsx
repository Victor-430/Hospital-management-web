import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDashboardStore } from "@/utils/Store/Doctor/DashboardStore";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import { Bell, Search, User } from "lucide-react";
import React from "react";

export const Header = () => {
  const { notifications } = useDashboardStore();
  const { userName } = useAuthStore();

  const unreadCount = notifications.filter((n) => !n.read).length;
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex flex-col md:flex-row items-center sm:gap-6 gap-4 justify-between">
        <div className="">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome, Dr. {userName},{" "}
            <span className="text-green-600">Cardiologist</span>
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search..." className="pl-10 w-64" />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {unreadCount}
              </Badge>
            )}
          </Button>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium">{userName}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
