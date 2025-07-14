import { create } from "zustand";
import { Patient, PatientStatus } from "@/components/Types/patient";

interface PatientStore {
  patients: Patient[];
  searchTerm: string;
  statusFilter: PatientStatus | "all";
  currentPage: number;
  pageSize: number;
  setPatients: (patients: Patient[]) => void;
  addPatient: (patient: Omit<Patient, "id" | "admitted">) => void;
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: PatientStatus | "all") => void;
  setCurrentPage: (page: number) => void;
  getFilteredPatients: () => Patient[];
  getTotalPages: () => number;
}

// Mock data
const mockPatients: Patient[] = [
  {
    id: "1",
    admitted: "27 Dec, 2024",
    patient: "Dianne Russell",
    room: "BC5001",
    areaOfConcern: "Upper Abdomen General",
    inCharge: "Kristin",
    status: "Life Support",
    contact: "dianne@example.com",
  },
  {
    id: "2",
    admitted: "03 Feb, 2023",
    patient: "Bessie Cooper",
    room: "DMK502",
    areaOfConcern: "Gynecologic Disorders",
    inCharge: "Kristin",
    status: "Life Support",
    contact: "bessie@example.com",
  },
  {
    id: "3",
    admitted: "02 Mar, 2023",
    patient: "Marvin McKinney",
    room: "DMK502",
    areaOfConcern: "Brain, Spinal Cord, And Nerve Disorders",
    inCharge: "Colleen",
    status: "ICU",
    contact: "marvin@example.com",
  },
  {
    id: "4",
    admitted: "02 Mar, 2023",
    patient: "Esther Howard",
    room: "DMK502",
    areaOfConcern: "Digestive Disorders",
    inCharge: "Colleen",
    status: "Discharged",
    contact: "esther@example.com",
  },
  {
    id: "5",
    admitted: "02 Mar, 2023",
    patient: "Marvin McKinney",
    room: "BC1022",
    areaOfConcern: "Upper Abdomen General",
    inCharge: "Kristin",
    status: "Report Pending",
    contact: "marvin2@example.com",
  },
  {
    id: "6",
    admitted: "02 Mar, 2023",
    patient: "Annette Black",
    room: "BC1022",
    areaOfConcern: "Digestive Disorders",
    inCharge: "Colleen",
    status: "Report Pending",
    contact: "annette@example.com",
  },
  {
    id: "7",
    admitted: "02 Mar, 2023",
    patient: "Cameron Williamson",
    room: "BC1022",
    areaOfConcern: "Liver And Gallbladder Disorders",
    inCharge: "Kristin",
    status: "Report Pending",
    contact: "cameron@example.com",
  },
  {
    id: "8",
    admitted: "02 Mar, 2023",
    patient: "Guy Hawkins",
    room: "BC1022",
    areaOfConcern: "Medical Care During Pregnancy",
    inCharge: "Alex",
    status: "Life Support",
    contact: "guy@example.com",
  },
];

export const usePatientStore = create<PatientStore>((set, get) => ({
  patients: mockPatients,
  searchTerm: "",
  statusFilter: "all",
  currentPage: 1,
  pageSize: 10,

  setPatients: (patients) => set({ patients }),

  addPatient: (patientData) =>
    set((state) => {
      const newPatient: Patient = {
        ...patientData,
        id: Math.random().toString(36).substr(2, 9),
        admitted: new Date().toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      };
      return { patients: [newPatient, ...state.patients] };
    }),

  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),
  setStatusFilter: (status) => set({ statusFilter: status, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),

  getFilteredPatients: () => {
    const { patients, searchTerm, statusFilter, currentPage, pageSize } = get();

    let filtered = patients;

    if (searchTerm) {
      filtered = filtered.filter(
        (patient) =>
          patient.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
          patient.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
          patient.areaOfConcern.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((patient) => patient.status === statusFilter);
    }

    const startIndex = (currentPage - 1) * pageSize;
    return filtered.slice(startIndex, startIndex + pageSize);
  },

  getTotalPages: () => {
    const { patients, searchTerm, statusFilter, pageSize } = get();

    let filtered = patients;

    if (searchTerm) {
      filtered = filtered.filter(
        (patient) =>
          patient.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
          patient.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
          patient.areaOfConcern.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((patient) => patient.status === statusFilter);
    }

    return Math.ceil(filtered.length / pageSize);
  },
}));
