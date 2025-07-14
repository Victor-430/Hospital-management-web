import { create } from "zustand";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  consultationFee: number;
  availability: string[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
  type: string;
}

export interface MedicalRecord {
  id: string;
  date: string;
  type: string;
  description: string;
  doctor?: string;
}

interface HealthcareState {
  currentUser: {
    age: number;
    location: string;
    avatar: string;
  };
  appointments: Appointment[];
  doctors: Doctor[];
  medicalRecords: MedicalRecord[];
  selectedDoctor: Doctor | null;
  setSelectedDoctor: (doctor: Doctor | null) => void;
  addAppointment: (appointment: Omit<Appointment, "id">) => void;
  cancelAppointment: (id: string) => void;
}

const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Dennis Martine",
    specialty: "Cardiologist",
    experience: "12 years",
    location: "No 5, Ojo Street, Ikeja Lagos State",
    rating: 4.8,
    reviews: 32,
    image: "/placeholder.svg",
    consultationFee: 5000,
    availability: ["9:00 AM", "10:30 AM", "11:00 AM", "1:30 PM", "4:00 PM"],
  },
  {
    id: "2",
    name: "Dr. Agnes Jacob",
    specialty: "Dermatologist",
    experience: "8 years",
    location: "Victoria Island, Lagos",
    rating: 4.9,
    reviews: 45,
    image: "/placeholder.svg",
    consultationFee: 6000,
    availability: ["8:00 AM", "9:30 AM", "11:00 AM", "2:00 PM", "4:30 PM"],
  },
  {
    id: "3",
    name: "Dr. Kayode Samuel",
    specialty: "Pediatrician",
    experience: "15 years",
    location: "Lekki, Lagos",
    rating: 4.7,
    reviews: 28,
    image: "/placeholder.svg",
    consultationFee: 5500,
    availability: ["9:00 AM", "10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM"],
  },
];

const mockAppointments: Appointment[] = [
  {
    id: "1",
    doctorId: "1",
    doctorName: "Dr. Dennis Martine",
    specialty: "Cardiologist",
    date: "2025-06-31",
    time: "8:00 - 9:00 am",
    status: "upcoming",
    type: "Annual Checkup",
  },
  {
    id: "2",
    doctorId: "1",
    doctorName: "Dr. Dennis Martine",
    specialty: "Cardiologist",
    date: "2025-07-31",
    time: "8:00 - 9:00 am",
    status: "upcoming",
    type: "Follow-up",
  },
];

const mockMedicalRecords: MedicalRecord[] = [
  {
    id: "1",
    date: "05/15/2025",
    type: "Lab Result",
    description: "Cholesterol Test Results",
  },
  {
    id: "2",
    date: "04/20/2024",
    type: "Immunization",
    description: "Flu Shot",
  },
  {
    id: "3",
    date: "03/10/2024",
    type: "Medication",
    description: "Prescription for Amoxicillin",
  },
];

export const useHealthcareStore = create<HealthcareState>((set) => ({
  currentUser: {
    age: 25,
    location: "Lagos Nigeria",
    avatar: "/placeholder.svg",
  },
  appointments: mockAppointments,
  doctors: mockDoctors,
  medicalRecords: mockMedicalRecords,
  selectedDoctor: null,
  setSelectedDoctor: (doctor) => set({ selectedDoctor: doctor }),
  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [
        ...state.appointments,
        { ...appointment, id: Date.now().toString() },
      ],
    })),
  cancelAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.map((apt) =>
        apt.id === id ? { ...apt, status: "cancelled" as const } : apt
      ),
    })),
}));
