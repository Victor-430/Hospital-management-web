import { Doctor_img, Patient_img, Staff_img } from "./image";

export const getRoleImage = (userRole: string | null) => {
  const roleImages = {
    patient: Patient_img,
    doctor: Doctor_img,
    nurse: Staff_img,
    admin: Staff_img,
    super_admin: Staff_img,
    staff: Staff_img,
  };

  return roleImages[userRole as keyof typeof roleImages] || roleImages.patient;
};

export const getRoleTitle = (userRole: string | null) => {
  const roleTitles = {
    patient: "Patient Portal",
    doctor: "Doctor Portal",
    nurse: "Nurse Portal",
    admin: "Administrator Portal",
    super_admin: "Super Administrator Portal",
  };

  return roleTitles[userRole as keyof typeof roleTitles] || "Healthcare Portal";
};

export const getRoleDescription = (userRole: string | null) => {
  const roleDescriptions = {
    patient: "Access your health records and manage appointments",
    doctor: "Manage patients and medical records",
    nurse: "Patient care and medical assistance",
    admin: "Hospital operations and management",
    super_admin: "System administration and oversight",
  };

  return (
    roleDescriptions[userRole as keyof typeof roleDescriptions] ||
    "Healthcare management system"
  );
};
