"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { usePatientStore } from "@/utils/Store/Patient/patientSearch";
import { PatientStatus } from "@/components/Types/patient";

const getStatusColor = (status: PatientStatus) => {
  switch (status) {
    case "Life Support":
      return "bg-[#B81E42]";
    case "Discharged":
      return "bg-[#1ACF65]";
    case "ICU":
      return "bg-[#8F1EB8]";
    case "In Recovery":
      return "bg-[#1EABB8]";
    case "Report Pending":
      return "bg-[#1E61B8]";
    default:
      return "bg-gray-500";
  }
};

export function PatientTable() {
  const { getFilteredPatients, getTotalPages, currentPage, setCurrentPage } =
    usePatientStore();

  const patients = getFilteredPatients();
  const totalPages = getTotalPages();

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= Math.min(totalPages, 5); i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Patients List</h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-medium text-gray-600">
              Admitted
            </TableHead>
            <TableHead className="font-medium text-gray-600">Patient</TableHead>
            <TableHead className="font-medium text-gray-600">Room</TableHead>
            <TableHead className="font-medium text-gray-600">
              Area Of Concern
            </TableHead>
            <TableHead className="font-medium text-gray-600">
              In Charge
            </TableHead>
            <TableHead className="font-medium text-gray-600">Status</TableHead>
            <TableHead className="font-medium text-gray-600">Contact</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id} className="hover:bg-gray-50">
              <TableCell className="text-gray-600">
                {patient.admitted}
              </TableCell>
              <TableCell className="font-medium text-gray-900">
                {patient.patient}
              </TableCell>
              <TableCell className="text-gray-600">{patient.room}</TableCell>
              <TableCell className="text-gray-600 max-w-xs">
                {patient.areaOfConcern}
              </TableCell>
              <TableCell className="text-gray-600">
                {patient.inCharge}
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full ${getStatusColor(
                      patient.status
                    )}`}
                  ></div>
                  <span className="text-sm text-gray-700">
                    {patient.status}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  {patient.contact && (
                    <>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Mail className="h-4 w-4 text-gray-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Phone className="h-4 w-4 text-gray-400" />
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4 text-gray-400" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="flex items-center space-x-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          <div className="flex items-center space-x-1">
            {getPageNumbers().map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className="w-8 h-8 p-0"
              >
                {page}
              </Button>
            ))}
            {totalPages > 5 && <span className="text-gray-400">...</span>}
            {totalPages > 5 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(totalPages)}
                className="w-8 h-8 p-0"
              >
                {totalPages}
              </Button>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center space-x-1"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </div>
  );
}
