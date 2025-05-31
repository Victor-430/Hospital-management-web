"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { useLabResultStore } from "@/utils/Store/Labresults/labResultsStore";
import { LabResultStatus } from "@/utils/Validations/labResults";

const getStatusColor = (status: LabResultStatus) => {
  switch (status) {
    case "Normal":
      return "bg-green-100 text-green-800 border-green-200";
    case "Critical":
      return "bg-red-100 text-red-800 border-red-200";
    case "Pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export function LabResultsTable() {
  const { getFilteredResults } = useLabResultStore();
  const labResults = getFilteredResults();

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-medium text-gray-600 w-[200px]">
              Name
            </TableHead>
            <TableHead className="font-medium text-gray-600 w-[120px]">
              ID
            </TableHead>
            <TableHead className="font-medium text-gray-600 w-[200px]">
              Email
            </TableHead>
            <TableHead className="font-medium text-gray-600 w-[200px]">
              Test
            </TableHead>
            <TableHead className="font-medium text-gray-600 w-[150px]">
              Date
            </TableHead>
            <TableHead className="font-medium text-gray-600 w-[120px]">
              STATUS
            </TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {labResults.map((result) => (
            <TableRow
              key={result.id}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <TableCell>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm">
                    {result.avatar || result.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-900">
                    {result.name}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-gray-600">
                {result.patientId}
              </TableCell>
              <TableCell className="text-gray-600">{result.email}</TableCell>
              <TableCell className="text-gray-600">{result.test}</TableCell>
              <TableCell className="text-gray-600">
                <div>
                  <div className="font-medium">{result.date}</div>
                  <div className="text-sm text-gray-500">{result.time}</div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={`${getStatusColor(
                    result.status
                  )} border font-medium`}
                >
                  {result.status}
                </Badge>
              </TableCell>
              <TableCell>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
