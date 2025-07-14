// "use client";

// import React from "react";
// import { cn } from "@/lib/utils";
// import { useDashboardStore } from "@/utils/Store/Doctor/DashboardStore";
// import {
//   Calendar,
//   Home,
//   User,
//   FileText,
//   MessageSquare,
//   Star,
//   ChevronLeft,
//   ChevronRight,
//   LogOut,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { Logo } from "@/utils/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const menuItems = [
//   { icon: Home, label: "Dashboard", active: true, path: "doctor" },
//   { icon: Calendar, label: "Appointment", path: "appointment" },
//   { icon: User, label: "Patients", path: "patient-lists" },
//   { icon: FileText, label: "Lab Results", path: "labresults" },
//   { icon: MessageSquare, label: "Messages", path: "messages" },
//   { icon: Star, label: "Reviews And Rating", path: "review" },
// ];

// export const Sidebar = () => {
//   const { sidebarCollapsed, setSidebarCollapsed } = useDashboardStore();
//   const pathname = usePathname();

//   const isActive = (itemPath: string) => {
//     // Exact match for dashboard
//     if (itemPath === "/doctor") {
//       return (
//         pathname === "/doctor" ||
//         pathname === "/" ||
//         pathname.startsWith("/doctor")
//       );
//     }
//     // For other paths, check if current path starts with the item path
//     return pathname === itemPath || pathname.startsWith(itemPath + "/");
//   };

//   return (
//     <div
//       className={cn(
//         "bg-[#053C6D] text-white  transition-all rounded-lg duration-300 flex flex-col",
//         sidebarCollapsed ? "w-16" : "w-[20rem]"
//       )}
//     >
//       {/* Header */}
//       <div className="p-4 border-b pt-10 mb-20 border-slate-700">
//         <div className="flex items-center justify-between ">
//           {!sidebarCollapsed && <Image src={Logo} alt="logo" />}
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             className="text-white hover:bg-slate-700"
//           >
//             {sidebarCollapsed ? (
//               <ChevronRight className="h-4 w-4" />
//             ) : (
//               <ChevronLeft className="h-4 w-4" />
//             )}
//           </Button>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-4">
//         <ul className="space-y-8">
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <Link
//                 href={item.path}
//                 className={
//                   isActive(item.path)
//                     ? "w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors bg-white text-[#053C6D] shadow-md font-medium"
//                     : "w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-slate-300 hover:bg-slate-700 hover:text-white"
//                 }
//               >
//                 <item.icon className="h-5 w-5 flex-shrink-0" />
//                 {!sidebarCollapsed && (
//                   <span className="text-sm font-normal">{item.label}</span>
//                 )}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Profile Section */}
//       <div className="p-4 border-t border-slate-700">
//         <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
//           <User className="h-5 w-5 flex-shrink-0" />
//           {!sidebarCollapsed && <span className="text-sm">Profile</span>}
//         </button>
//         <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-red-400 hover:bg-slate-700 hover:text-red-300 transition-colors mt-2">
//           <LogOut className="h-5 w-5 flex-shrink-0" />
//           {!sidebarCollapsed && <span className="text-sm">Logout</span>}
//         </button>
//       </div>
//     </div>
//   );
// };

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import { getSidebarMenuItems } from "@/utils/sidebarItems";
import { ChevronLeft, ChevronRight, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useDashboardStore } from "@/utils/Store/Doctor/DashboardStore";
import Image from "next/image";
import { Logo } from "@/utils/image";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userRole, logout, userName } = useAuthStore();
  const menuItems = getSidebarMenuItems(userRole);
  const { sidebarCollapsed, setSidebarCollapsed } = useDashboardStore();

  const isActive = (itemPath: string) => {
    console.log(
      "Checking isActive for:",
      itemPath,
      "current pathname:",
      pathname
    );

    // Exact match first
    if (pathname === itemPath) {
      return true;
    }

    // Special case for root dashboard path
    if (itemPath === "/Dashboard/doctor") {
      return pathname === "/Dashboard/doctor" || pathname === "/";
    }

    // For nested routes, check if current path starts with the item path
    // but make sure it's a proper path segment (not just a prefix)
    if (itemPath !== "/Dashboard/doctor" && pathname.startsWith(itemPath)) {
      return true;
    }

    return false;
  };

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  const handleNavigation = (path: string) => {
    router.replace(path);
  };

  return (
    <div
      className={cn(
        "bg-[#053C6D] text-white transition-all  rounded-lg duration-300 flex flex-col ",
        sidebarCollapsed ? "w-18" : "w-[20rem]"
      )}
    >
      {/* Header */}

      <div className="p-4 border-b pt-10 mb-20 border-slate-700">
        <div className="flex items-center justify-between ">
          {!sidebarCollapsed && <Image src={Logo} alt="logo" />}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-white hover:bg-[#DAF1FB]"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* User Role Badge */}
      {!sidebarCollapsed && userRole && (
        <div className="px-4 mb-4">
          <div className="bg-slate-700 rounded-lg px-3 py-2 text-center">
            <span className="text-xs font-medium text-slate-300 uppercase">
              {userRole.replace("_", " ")} Portal
            </span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(item.path)}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors text-left",
                  isActive(item.path)
                    ? "bg-white text-[#053C6D]  shadow-md font-medium"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0 text-center" />
                {!sidebarCollapsed && (
                  <span className="text-sm font-normal">{item.label}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Profile Section */}
      <div className="p-4 border-t border-slate-700">
        {!sidebarCollapsed && userName && (
          <div className="mb-3 px-3 py-2">
            <div className="text-sm font-medium text-white truncate">
              {userName}
            </div>
            <div className="text-xs text-slate-400 capitalize">
              {userRole?.replace("_", " ")}
            </div>
          </div>
        )}

        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
          <User className="h-5 w-5 flex-shrink-0" />
          {!sidebarCollapsed && <span className="text-sm">Profile</span>}
        </button>

        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-red-400 hover:bg-slate-700 hover:text-red-300 transition-colors mt-2"
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!sidebarCollapsed && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </div>
  );
};
