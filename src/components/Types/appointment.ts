export type AppointmentStatus =
  | "Completed"
  | "Upcoming"
  | "Cancelled"
  | "Missed";

export interface Appointment {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  appointmentDate: string;
  appointmentTime: string;
  status: AppointmentStatus;
}

export interface AddAppointmentData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  appointmentDate: string;
  appointmentTime: string;
}
