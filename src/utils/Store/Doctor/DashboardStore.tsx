import { create } from "zustand";

export interface Patient {
  id: string;
  name: string;
  gender: "male" | "female" | "other";
  age: number;
  lastVisit: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  type: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "appointment" | "vacation" | "patient" | "examination";
  timestamp: string;
  read: boolean;
}

interface DashboardState {
  patients: Patient[];
  appointments: Appointment[];
  notifications: Notification[];
  stats: {
    totalReviews: number;
    totalAppointments: number;
    totalSurgeries: number;
    totalExaminations: number;
  };
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  markNotificationAsRead: (id: string) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  patients: [
    {
      id: "1",
      name: "John Doe",
      gender: "male",
      age: 35,
      lastVisit: "2025-01-20",
    },
    {
      id: "2",
      name: "Jane Smith",
      gender: "female",
      age: 28,
      lastVisit: "2025-01-18",
    },
    {
      id: "3",
      name: "Mike Johnson",
      gender: "male",
      age: 42,
      lastVisit: "2025-01-15",
    },
  ],
  appointments: [
    {
      id: "1",
      patientName: "Dr. Bhanu Singh",
      doctorName: "Dr. Favour John",
      date: "2025-03-14",
      time: "10:00am - 10:30am",
      type: "Consultation",
    },
    {
      id: "2",
      patientName: "Dr. Bhanu Singh",
      doctorName: "Dr. Favour John",
      date: "2025-03-15",
      time: "10:00am - 10:30am",
      type: "Follow-up",
    },
    {
      id: "3",
      patientName: "Dr. Bhanu Singh",
      doctorName: "Dr. Favour John",
      date: "2025-03-14",
      time: "10:00am - 10:30am",
      type: "Consultation",
    },
    {
      id: "4",
      patientName: "Dr. Bhanu Singh",
      doctorName: "Dr. Favour John",
      date: "2025-03-15",
      time: "10:00am - 10:30am",
      type: "Follow-up",
    },
  ],
  notifications: [
    {
      id: "1",
      title: "You Have 28 Appointment Requests",
      message: "Review pending appointments",
      type: "appointment",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: "2",
      title: "Your Vacation Request Was Denied",
      message: "Please contact HR for details",
      type: "vacation",
      timestamp: "4 hours ago",
      read: false,
    },
    {
      id: "3",
      title: "Tony Cancelled His Appointment On Tuesday",
      message: "Slot now available",
      type: "appointment",
      timestamp: "6 hours ago",
      read: false,
    },
  ],
  stats: {
    totalReviews: 12,
    totalAppointments: 15,
    totalSurgeries: 1,
    totalExaminations: 9,
  },
  sidebarCollapsed: false,
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  markNotificationAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      ),
    })),
}));
