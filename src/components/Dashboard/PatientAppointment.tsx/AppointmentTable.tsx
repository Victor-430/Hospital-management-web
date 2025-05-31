"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppointmentStore } from "@/utils/Store/Doctor/appointmentStore";
import { AppointmentStatus } from "@/components/Types/appointment";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const statusColors: Record<AppointmentStatus, string> = {
  Completed: "text-[#41BC63] bg-[#EBF9F1] border-green-200",
  Upcoming: "bg-[#FBF9F4] text-[#BC9241] border-yellow-200",
  Cancelled: "bg-[#FBF4F4] text-[#BC4141] border-red-200",
  Missed: "bg-[#EBF9F1] text-[#007AFF] border-blue-200",
};

export const AppointmentTable = () => {
  const {
    getFilteredAppointments,
    getTotalPages,
    currentPage,
    setCurrentPage,
    rescheduleAppointment,
    bookNowAppointment,
    requestFollowUp,
  } = useAppointmentStore();

  const appointments = getFilteredAppointments();
  const totalPages = getTotalPages();

  const renderActionButtons = (appointment: string) => {
    const buttons = [];

    // Always show Reschedule button
    buttons.push(
      <Button
        key="reschedule"
        variant="outline"
        size="sm"
        onClick={() => rescheduleAppointment(appointment.id)}
        className="bg-[#053C6D] text-white hover:bg-[#053C6D]/95 border-[#053C6D]/75"
      >
        Reschedule
      </Button>
    );

    // Show different second button based on status
    if (appointment.status === "Completed") {
      buttons.push(
        <Button
          key="follow-up"
          variant="outline"
          size="sm"
          onClick={() => requestFollowUp(appointment.id)}
          className="bg-[#053C6D] text-white hover:bg-[#053C6D]/95 border-[#053C6D]/75"
        >
          Follow Up
        </Button>
      );
    } else {
      buttons.push(
        <Button
          key="book-now"
          variant="outline"
          size="sm"
          onClick={() => bookNowAppointment(appointment.id)}
          className="bg-[#053C6D] text-white hover:bg-[#053C6D]/95 border-[#053C6D]/75"
        >
          Book Now
        </Button>
      );
    }

    return buttons;
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold text-gray-700">
                First Name
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Last Name
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Phone Number
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Appointment Date & Time
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Status
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">
                  {appointment.firstName}
                </TableCell>
                <TableCell>{appointment.lastName}</TableCell>
                <TableCell>{appointment.phoneNumber}</TableCell>
                <TableCell>
                  {appointment.appointmentDate} At {appointment.appointmentTime}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={statusColors[appointment.status]}
                  >
                    {appointment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    {renderActionButtons(appointment)}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};
