"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText, Home, LogOut, Pill, User } from "lucide-react";
import { useAuthStore } from "@/utils/Store/Login/authStore";

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { isAuthenticated, userRole, userName, logout } = useAuthStore();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const patientServices = [
    { label: "Dashboard", icon: Home, path: "/Dashboard/patient" },
    { label: "Find Doctor", icon: User, path: "/Dashboard/patient/search" },
    { label: "Pharmacy", icon: Pill, path: "/Dashboard/patient/pharmacy" },
    {
      label: "Book Test",
      icon: FileText,
      path: "/Dashboard/patient/book-test",
    },
  ];

  const getServicesForRole = () => {
    if (userRole === "patient") {
      return patientServices;
    }
    return [];
  };

  const handleServiceSelect = (path: string) => {
    console.log(`Navigating to ${path}`);
    router.replace(`${path}`);
  };

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Blog", path: "/blog" },
  ];

  const authItems = [
    { label: "Sign up", path: "/signup", variant: "ghost" as const },
    { label: "Login", path: "/login", variant: "ghost" as const },
  ];

  return (
    <nav className="flex items-center space-x-1">
      {/* Main navigation links */}
      <div className="hidden md:flex items-center space-x-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-3 py-2 rounded-md  font-normal text-[1rem] transition-colors flex items-center ${
              pathname === item.path
                ? "text-white bg-[#053C6D] "
                : "text-[#000000] hover:text-[#053C6D] hover:bg-[#DAF1FB]"
            }`}
          >
            {item.label}
            {/* {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />} */}
          </Link>
        ))}

        {/* Services Dropdown - Only show when authenticated */}
        {isAuthenticated && (
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Button
              variant="ghost"
              className="flex items-center space-x-1 font-normal text-[1rem] text-[#000000] hover:text-[#053C6D] "
            >
              <span>Services</span>
              <ChevronRight
                className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </Button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border shadow-lg z-50 rounded-md mt-1">
                {getServicesForRole().map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={service.path}
                      onClick={() => handleServiceSelect(service.path)}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 cursor-pointer first:rounded-t-md last:rounded-b-md"
                    >
                      <IconComponent className="h-4 w-4 text-[#053C6D]" />
                      <span>{service.label}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Auth Section */}
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{userName}</p>
              <p className="text-xs text-gray-500 capitalize">{userRole}</p>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </>
        ) : (
          // display login
          <div className="flex items-center space-x-2">
            {authItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md  font-normal text-[1rem] transition-colors flex items-center ${
                  pathname === item.path
                    ? "text-white bg-[#053C6D] "
                    : "text-[#000000] hover:text-[#053C6D] hover:bg-[#DAF1FB]"
                }`}
              >
                <Button
                  variant={pathname === item.path ? "default" : item.variant}
                  size="sm"
                  className={
                    pathname === item.path ? "bg-[#053C6D] text-white" : ""
                  }
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
