// "use client";

import { CalendarCard } from "../Patient/CalendarCard";

// import React, { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { cn } from "@/lib/utils";

// export const AppointmentScheduler = () => {
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>(
//     new Date()
//   );
//   const [currentMonth, setCurrentMonth] = useState(new Date());

//   const navigateMonth = (direction: "prev" | "next") => {
//     const newMonth = new Date(currentMonth);
//     if (direction === "prev") {
//       newMonth.setMonth(currentMonth.getMonth() - 1);
//     } else {
//       newMonth.setMonth(currentMonth.getMonth() + 1);
//     }
//     setCurrentMonth(newMonth);
//   };

//   return (
//     <Card className="w-[20rem] h-[32rem] ">
//       <CardHeader>
//         <div className="flex items-center justify-between">
//           <CardTitle className="text-lg font-semibold">Calendar</CardTitle>
//           <Button variant="outline" size="sm">
//             View All
//           </Button>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-6">
//           {/* Calendar Header */}
//           <div className="flex items-center justify-between">
//             <h3 className="font-semibold">
//               {currentMonth.toLocaleDateString("en-US", {
//                 month: "long",
//                 year: "numeric",
//               })}
//             </h3>
//             <div className="flex space-x-2">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => navigateMonth("prev")}
//               >
//                 <ChevronLeft className="h-4 w-4" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => navigateMonth("next")}
//               >
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           {/* Mini Calendar */}
//           <div className="border rounded-lg p-4">
//             <Calendar
//               mode="single"
//               selected={selectedDate}
//               onSelect={setSelectedDate}
//               month={currentMonth}
//               onMonthChange={setCurrentMonth}
//               className={cn("w-full pointer-events-auto")}
//             />
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

export const AppointmentScheduler = () => {
  return <CalendarCard />;
};
