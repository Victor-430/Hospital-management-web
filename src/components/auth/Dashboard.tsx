"use client";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import { DoctorPage } from "../Dashboard/Doctor/DoctorPage";
import { NursePage } from "../Dashboard/Nurse/NursePage";
import { AdminPage } from "../Dashboard/Admin/AdminPage";
import { SuperAdminPage } from "../Dashboard/SuperAdmin/SuperAdminPage";
import { PatientPage } from "../Dashboard/Patient/PatientPage";
import { useRouter } from "next/navigation";

export const Dashboard = () => {
  const router = useRouter();
  const { userRole, userName, getRedirectPath, isAuthenticated } =
    useAuthStore();

  // Redirect to appropriate dashboard based on role
  useEffect(() => {
    if (isAuthenticated && userRole) {
      const redirectPath = getRedirectPath();
      console.log("Redirecting to:", redirectPath);
      router.replace(redirectPath);
    }
  }, [userRole, isAuthenticated, router, getRedirectPath]);

  const renderDashboard = () => {
    switch (userRole) {
      case "patient":
        return <PatientPage />;
      case "doctor":
        return <DoctorPage />;
      case "nurse":
        return <NursePage />;
      case "admin":
        return <AdminPage userName={userName} />;
      case "super_admin":
        return <SuperAdminPage userName={userName} />;
      default:
        return <PatientPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderDashboard()}
      </div>
    </div>
  );
};
