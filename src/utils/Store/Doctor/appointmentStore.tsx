import { create } from "zustand";
import { Appointment, AppointmentStatus } from "@/components/Types/appointment";

// Mock data
const mockAppointments: Appointment[] = [
  {
    id: "1",
    firstName: "Jane",
    lastName: "Cooper",
    phoneNumber: "+91 9876543210",
    appointmentDate: "13-Aug-2023",
    appointmentTime: "10:00 AM",
    status: "Completed",
  },
  {
    id: "2",
    firstName: "Wade",
    lastName: "Warren",
    phoneNumber: "+91 9876543210",
    appointmentDate: "13-Aug-2023",
    appointmentTime: "10:00 AM",
    status: "Upcoming",
  },
  {
    id: "3",
    firstName: "Brooklyn",
    lastName: "Simmons",
    phoneNumber: "+91 9876543210",
    appointmentDate: "13-Aug-2023",
    appointmentTime: "10:00 AM",
    status: "Cancelled",
  },
  {
    id: "4",
    firstName: "Cameron",
    lastName: "Williamson",
    phoneNumber: "+91 9876543210",
    appointmentDate: "13-Aug-2023",
    appointmentTime: "10:00 AM",
    status: "Completed",
  },
  {
    id: "5",
    firstName: "Ronald",
    lastName: "Richards",
    phoneNumber: "+91 9876543210",
    appointmentDate: "13-Aug-2023",
    appointmentTime: "10:00 AM",
    status: "Completed",
  },
  {
    id: "6",
    firstName: "Savannah",
    lastName: "Nguyen",
    phoneNumber: "+91 9876543210",
    appointmentDate: "13-Aug-2023",
    appointmentTime: "10:00 AM",
    status: "Completed",
  },
  {
    id: "7",
    firstName: "Darlene",
    lastName: "Robertson",
    phoneNumber: "+91 9876543210",
    appointmentDate: "13-Aug-2023",
    appointmentTime: "10:00 AM",
    status: "Cancelled",
  },
  {
    id: "8",
    firstName: "Kathryn",
    lastName: "Murphy",
    phoneNumber: "+91 9876543210",
    appointmentDate: "13-Aug-2023",
    appointmentTime: "10:00 AM",
    status: "Missed",
  },
  {
    id: "9",
    firstName: "Darrell",
    lastName: "Steward",
    phoneNumber: "+91 9876543210",
    appointmentDate: "13-Aug-2023",
    appointmentTime: "10:00 AM",
    status: "Completed",
  },
];

interface AppointmentState {
  appointments: Appointment[];
  searchTerm: string;
  statusFilter: AppointmentStatus | "all";
  currentPage: number;
  pageSize: number;
  setAppointments: (appointments: Appointment[]) => void;
  addAppointment: (appointmentData: Omit<Appointment, "id">) => void;
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: AppointmentStatus | "all") => void;
  setCurrentPage: (page: number) => void;
  getFilteredAppointments: () => Appointment[];
  getTotalPages: () => number;
  rescheduleAppointment: (id: string) => void;
  bookNowAppointment: (id: string) => void;
  requestFollowUp: (id: string) => void;
}

export const useAppointmentStore = create<AppointmentState>((set, get) => ({
  appointments: mockAppointments,
  searchTerm: "",
  statusFilter: "all",
  currentPage: 1,
  pageSize: 10,

  setAppointments: (appointments) => set({ appointments }),

  addAppointment: (appointmentData) =>
    set((state) => {
      const newAppointment = {
        ...appointmentData,
        id: Math.random().toString(36).substr(2, 9),
      };
      return {
        appointments: [newAppointment, ...state.appointments],
      };
    }),

  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),

  setStatusFilter: (status) => set({ statusFilter: status, currentPage: 1 }),

  setCurrentPage: (page) => set({ currentPage: page }),

  getFilteredAppointments: () => {
    const { appointments, searchTerm, statusFilter, currentPage, pageSize } =
      get();
    let filtered = appointments;

    if (searchTerm) {
      filtered = filtered.filter(
        (appointment) =>
          appointment.firstName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          appointment.lastName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          appointment.phoneNumber.includes(searchTerm)
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (appointment) => appointment.status === statusFilter
      );
    }

    const startIndex = (currentPage - 1) * pageSize;
    return filtered.slice(startIndex, startIndex + pageSize);
  },

  getTotalPages: () => {
    const { appointments, searchTerm, statusFilter, pageSize } = get();
    let filtered = appointments;

    if (searchTerm) {
      filtered = filtered.filter(
        (appointment) =>
          appointment.firstName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          appointment.lastName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          appointment.phoneNumber.includes(searchTerm)
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (appointment) => appointment.status === statusFilter
      );
    }

    return Math.ceil(filtered.length / pageSize);
  },

  rescheduleAppointment: (id) => {
    // Implementation for rescheduling
    console.log("Reschedule appointment:", id);
  },

  bookNowAppointment: (id) => {
    // Implementation for booking now
    console.log("Book now appointment:", id);
  },

  requestFollowUp: (id) => {
    // Implementation for follow up request
    console.log("Request follow up:", id);
  },
}));
