"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDashboardStore } from "@/utils/Store/Doctor/DashboardStore";
import { Calendar, User, FileText, Activity } from "lucide-react";

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "appointment":
      return Calendar;
    case "patient":
      return User;
    case "examination":
      return FileText;
    default:
      return Activity;
  }
};

const getNotificationColor = (type: string) => {
  switch (type) {
    case "appointment":
      return "bg-blue-100 text-blue-600";
    case "vacation":
      return "bg-red-100 text-red-600";
    case "patient":
      return "bg-green-100 text-green-600";
    case "examination":
      return "bg-purple-100 text-purple-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const NotificationsPanel = () => {
  const { notifications, markNotificationAsRead } = useDashboardStore();
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-6">
      {/* Notifications */}
      <Card className="h-[33rem] w-[21rem] ">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">
              Notifications
            </CardTitle>
            {unreadCount > 0 && (
              <Badge variant="destructive">{unreadCount}</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.slice(0, 4).map((notification) => {
              const Icon = getNotificationIcon(notification.type);
              return (
                <div
                  key={notification.id}
                  className={`flex items-start space-x-3 p-3 rounded-lg transition-colors hover:bg-gray-50 ${
                    !notification.read
                      ? "bg-blue-50 border-l-4 border-blue-500"
                      : ""
                  }`}
                  onClick={() => markNotificationAsRead(notification.id)}
                >
                  <div
                    className={`p-2 rounded-lg ${getNotificationColor(
                      notification.type
                    )}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {notification.timestamp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <Button variant="outline" className="w-full mt-4">
            See more
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
