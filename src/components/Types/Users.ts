export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "doctor" | "nurse" | "staff";
  avatar?: string;
  department?: string;
}
