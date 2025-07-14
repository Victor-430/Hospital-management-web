import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export const UpcomingEvent = () => {
  return (
    <div>
      {/* Upcoming Events */}
      <Card className="w-full md:w-[20rem]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Upcoming</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                M
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Monthly doctor&apos;s meet
                </p>
                <p className="text-xs text-gray-500">
                  8 March, 2025 | 04:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                M
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Monthly doctor&apos;s meet
                </p>
                <p className="text-xs text-gray-500">
                  8 March, 2025 | 04:00 PM
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
