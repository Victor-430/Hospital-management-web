import {
  Calendar,
  Home,
  User,
  FileText,
  MessageSquare,
  Star,
  Settings,
  Users,
  Shield,
  Activity,
  Heart,
  Crown,
  Pill,
  Search,
  FlaskConical,
  CreditCard,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
  active?: boolean;
}

export const getSidebarMenuItems = (userRole: string | null): MenuItem[] => {
  switch (userRole) {
    case "patient":
      return [
        { icon: Home, label: "Dashboard", path: "/Dashboard/patient" },
        {
          icon: Calendar,
          label: "Appointments",
          path: "/Dashboard/patient/appointments",
        },
        {
          icon: FileText,
          label: "Medical Records",
          path: "/Dashboard/patient/records",
        },
        {
          icon: Pill,
          label: "Pharmacy",
          path: "/Dashboard/patient/pharmacy",
        },
        { icon: Search, label: "Search", path: "/Dashboard/patient/search" },
        {
          icon: FlaskConical,
          label: "Book a test",
          path: "/Dashboard/patient/booking-test",
        },
        {
          icon: CreditCard,
          label: "Payment",
          path: "/Dashboard/patient/payment",
        },
      ];

    case "doctor":
      return [
        { icon: Home, label: "Dashboard", path: "/Dashboard/doctor" },
        {
          icon: Calendar,
          label: "Appointments",
          path: "/Dashboard/doctor/appointment",
        },
        {
          icon: User,
          label: "Patients",
          path: "/Dashboard/doctor/patient-lists",
        },
        {
          icon: FileText,
          label: "Lab Results",
          path: "/Dashboard/doctor/labresults",
        },
        {
          icon: MessageSquare,
          label: "Messages",
          path: "/Dashboard/doctor/messages",
        },
        { icon: Star, label: "Reviews", path: "/Dashboard/doctor/reviews" },
      ];

    case "nurse":
      return [
        { icon: Home, label: "Dashboard", path: "/Dashboard/nurse" },
        {
          icon: Heart,
          label: "Patient Care",
          path: "/Dashboard/nurse/patient-care",
        },
        {
          icon: Calendar,
          label: "Schedule",
          path: "/Dashboard/nurse/schedule",
        },
        { icon: FileText, label: "Reports", path: "/Dashboard/nurse/reports" },
        {
          icon: MessageSquare,
          label: "Messages",
          path: "/Dashboard/nurse/messages",
        },
        { icon: Activity, label: "Vitals", path: "/Dashboard/nurse/vitals" },
      ];

    case "admin":
      return [
        { icon: Home, label: "Dashboard", path: "/Dashboard/admin" },
        {
          icon: Users,
          label: "Staff Management",
          path: "/Dashboard/admin/staff",
        },
        {
          icon: Settings,
          label: "System Settings",
          path: "/Dashboard/admin/settings",
        },
        { icon: FileText, label: "Reports", path: "/Dashboard/admin/reports" },
        {
          icon: Calendar,
          label: "Scheduling",
          path: "/Dashboard/admin/scheduling",
        },
        {
          icon: MessageSquare,
          label: "Communications",
          path: "/Dashboard/admin/communications",
        },
      ];

    case "super_admin":
      return [
        { icon: Home, label: "Dashboard", path: "/Dashboard/superAdmin" },
        {
          icon: Crown,
          label: "System Overview",
          path: "/Dashboard/superAdmin/overview",
        },
        {
          icon: Users,
          label: "User Management",
          path: "/Dashboard/superAdmin/users",
        },
        {
          icon: Shield,
          label: "Security",
          path: "/Dashboard/superAdmin/security",
        },
        {
          icon: Settings,
          label: "Global Settings",
          path: "/Dashboard/superAdmin/settings",
        },
        {
          icon: FileText,
          label: "System Reports",
          path: "/Dashboard/superAdmin/reports",
        },
        {
          icon: Activity,
          label: "Analytics",
          path: "/Dashboard/superAdmin/analytics",
        },
      ];

    default:
      return null;
  }
};
