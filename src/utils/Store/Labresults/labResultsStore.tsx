import { create } from "zustand";
import { LabResult, LabResultStatus } from "@/utils/Validations/labResults";

// Mock data
const mockLabResults: LabResult[] = [
  {
    id: "1",
    name: "Brooklyn Simmons",
    patientId: "87584523",
    email: "Brooklyn@Mail.Com",
    test: "Complete Blood Count",
    date: "21/12/2022",
    time: "10:20 PM",
    status: "Normal",
    avatar: "👨‍💼",
  },
  {
    id: "2",
    name: "Kristin Watson",
    patientId: "93874563",
    email: "Kristin@Mail.Com",
    test: "X-Ray",
    date: "22/12/2022",
    time: "08:30 PM",
    status: "Critical",
    avatar: "👩‍💼",
  },
  {
    id: "3",
    name: "Jacob Jones",
    patientId: "23847569",
    email: "Jacob@Mail.Com",
    test: "Lipid Panel",
    date: "23/12/2022",
    time: "02:15 PM",
    status: "Normal",
    avatar: "👨‍💼",
  },
  {
    id: "4",
    name: "Cody Fisher",
    patientId: "39485632",
    email: "Cody@Mail.Com",
    test: "Basic Metabolic Panel",
    date: "24/12/2022",
    time: "04:45 PM",
    status: "Pending",
    avatar: "👨‍💼",
  },
  {
    id: "5",
    name: "Brooklyn Simmons",
    patientId: "87584523",
    email: "Brooklyn@Mail.Com",
    test: "Complete Blood Count",
    date: "21/12/2022",
    time: "10:20 PM",
    status: "Normal",
    avatar: "👨‍💼",
  },
  {
    id: "6",
    name: "Kristin Watson",
    patientId: "93874563",
    email: "Kristin@Mail.Com",
    test: "Urinalysis",
    date: "22/12/2022",
    time: "05:30 PM",
    status: "Critical",
    avatar: "👩‍💼",
  },
  {
    id: "7",
    name: "Jacob Jones",
    patientId: "23847569",
    email: "Jacob@Mail.Com",
    test: "MRI",
    date: "23/12/2022",
    time: "12:40 PM",
    status: "Normal",
    avatar: "👨‍💼",
  },
  {
    id: "8",
    name: "Cody Fisher",
    patientId: "39485632",
    email: "Cody@Mail.Com",
    test: "X-Ray",
    date: "24/12/2022",
    time: "11:50 PM",
    status: "Normal",
    avatar: "👨‍💼",
  },
];

interface LabResultStore {
  labResults: LabResult[];
  searchTerm: string;
  statusFilter: LabResultStatus | "all";
  setLabResults: (results: LabResult[]) => void;
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: LabResultStatus | "all") => void;
  getFilteredResults: () => LabResult[];
}

export const useLabResultStore = create<LabResultStore>((set, get) => ({
  labResults: mockLabResults,
  searchTerm: "",
  statusFilter: "all",

  setLabResults: (results) => set({ labResults: results }),

  setSearchTerm: (term) => set({ searchTerm: term }),

  setStatusFilter: (status) => set({ statusFilter: status }),

  getFilteredResults: () => {
    const { labResults, searchTerm, statusFilter } = get();
    let filtered = labResults;

    if (searchTerm) {
      filtered = filtered.filter(
        (result) =>
          result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          result.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          result.test.toLowerCase().includes(searchTerm.toLowerCase()) ||
          result.patientId.includes(searchTerm)
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((result) => result.status === statusFilter);
    }

    return filtered;
  },
}));
