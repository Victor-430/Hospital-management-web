"use client";
import { useEffect } from "react";
import { useAuthStore } from "@/utils/Store/Login/authStore";

import { useRouter } from "next/navigation";
import Loading from "@/app/(Dashboard Layout)/loading";

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

  // const renderDashboard = () => {
  //   switch (userRole) {
  //     case "patient":
  //       return <PatientPage />;
  //     case "doctor":
  //       return <DoctorPage />;
  //     case "nurse":
  //       return <NursePage />;
  //     case "admin":
  //       return <AdminPage />;
  //     case "super_admin":
  //       return <SuperAdminPage />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* {renderDashboard()} */}
        <Loading />
      </div>
    </div>
  );
};
