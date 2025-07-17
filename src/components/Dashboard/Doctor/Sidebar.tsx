// "use client";

// import React, { useCallback, useEffect, useMemo } from "react";
// import { cn } from "@/lib/utils";
// import { useAuthStore } from "@/utils/Store/Login/authStore";
// import { getSidebarMenuItems } from "@/utils/sidebarItems";
// import { ChevronLeft, ChevronRight, LogOut, User } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useRouter, usePathname } from "next/navigation";
// import { useDashboardStore } from "@/utils/Store/Doctor/DashboardStore";
// import Image from "next/image";
// import { Logo } from "@/utils/image";

// export const Sidebar = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { userRole, logout, userName, getRedirectPath } = useAuthStore();
//   const menuItems = getSidebarMenuItems(userRole);
//   const { sidebarCollapsed, setSidebarCollapsed } = useDashboardStore();

//   useEffect(() => {
//     setSidebarCollapsed(true);
//   }, [setSidebarCollapsed]);

//   // Memoize the base dashboard path
//   const baseDashboardPath = useMemo(() => getRedirectPath(), [getRedirectPath]);

//   // Memoize the active states for all menu items
//   const activeStates = useMemo(() => {
//     if (!menuItems || menuItems.length === 0) return {};

//     const states: Record<string, boolean> = {};

//     menuItems.forEach((item) => {
//       const itemPath = item.path;

//       // Exact match first
//       if (pathname === itemPath) {
//         states[itemPath] = true;
//         return;
//       }

//       // Special case for root dashboard path
//       if (itemPath === baseDashboardPath) {
//         states[itemPath] = pathname === baseDashboardPath || pathname === "/";
//         return;
//       }

//       // For nested routes, check if current path starts with the item path
//       if (itemPath !== baseDashboardPath && pathname.startsWith(itemPath)) {
//         const nextChar = pathname[itemPath.length];
//         states[itemPath] = nextChar === "/" || nextChar === undefined;
//         return;
//       }

//       states[itemPath] = false;
//     });

//     return states;
//   }, [pathname, menuItems, baseDashboardPath]);

//   // Memoized function to check if an item is active
//   const isActive = useCallback(
//     (itemPath: string) => {
//       return activeStates[itemPath] || false;
//     },
//     [activeStates]
//   );

//   // Memoized logout handler
//   const handleLogout = useCallback(async () => {
//     try {
//       await logout();
//       router.replace("/login");
//     } catch (error) {
//       console.error("Logout error:", error);
//       router.replace("/login");
//     }
//   }, [logout, router]);

//   // Memoized navigation handler
//   const handleNavigation = useCallback(
//     (path: string) => {
//       router.push(path);
//     },
//     [router]
//   );

//   // Memoized toggle handler
//   const handleToggleSidebar = useCallback(() => {
//     setSidebarCollapsed(!sidebarCollapsed);
//   }, [sidebarCollapsed, setSidebarCollapsed]);

//   // If no menu items, don't render sidebar
//   if (!menuItems || menuItems.length === 0) {
//     return null;
//   }

//   return (
//     <div
//       className={cn(
//         "bg-[#053C6D] text-white transition-all  rounded-lg duration-300 flex flex-col ",
//         sidebarCollapsed ? "w-18" : "w-[20rem]"
//       )}
//     >
//       {/* Header */}

//       <div className="p-4 border-b pt-10 mb-20 border-slate-700">
//         <div className="flex items-center justify-between ">
//           {!sidebarCollapsed && <Image src={Logo} alt="logo" />}

//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={handleToggleSidebar}
//             className="text-white hover:bg-[#DAF1FB]"
//           >
//             {sidebarCollapsed ? (
//               <ChevronRight className="h-4 w-4" />
//             ) : (
//               <ChevronLeft className="h-4 w-4" />
//             )}
//           </Button>
//         </div>
//       </div>

//       {/* User Role Badge */}
//       {!sidebarCollapsed && userRole && (
//         <div className="px-4 mb-4">
//           <div className="bg-slate-700 rounded-lg px-3 py-2 text-center">
//             <span className="text-xs font-medium text-slate-300 uppercase">
//               {userRole.replace("_", " ")} Portal
//             </span>
//           </div>
//         </div>
//       )}

//       {/* Navigation */}
//       <nav className="flex-1 p-4">
//         <ul className="space-y-2">
//           {menuItems.map((item, index) => (
//             <li key={`${item.path}-${index}`}>
//               <button
//                 onClick={() => handleNavigation(item.path)}
//                 className={cn(
//                   "w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors text-left",
//                   isActive(item.path)
//                     ? "bg-white text-[#053C6D]  shadow-md font-medium"
//                     : "text-slate-300 hover:bg-slate-700 hover:text-white"
//                 )}
//               >
//                 <item.icon className="h-5 w-5 flex-shrink-0 text-center" />
//                 {!sidebarCollapsed && (
//                   <span className="text-sm font-normal">{item.label}</span>
//                 )}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Profile Section */}
//       <div className="p-4 border-t border-slate-700">
//         {!sidebarCollapsed && userName && (
//           <div className="mb-3 px-3 py-2">
//             <div className="text-sm font-medium text-white truncate">
//               {userName}
//             </div>
//             <div className="text-xs text-slate-400 capitalize">
//               {userRole?.replace("_", " ")}
//             </div>
//           </div>
//         )}

//         <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
//           <User className="h-5 w-5 flex-shrink-0" />
//           {!sidebarCollapsed && <span className="text-sm">Profile</span>}
//         </button>

//         <button
//           onClick={handleLogout}
//           className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-red-400 hover:bg-slate-700 hover:text-red-300 transition-colors mt-2"
//         >
//           <LogOut className="h-5 w-5 flex-shrink-0" />
//           {!sidebarCollapsed && <span className="text-sm">Logout</span>}
//         </button>
//       </div>
//     </div>
//   );
// };

"use client";

import React, { useCallback, useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import { getSidebarMenuItems } from "@/utils/sidebarItems";
import { ChevronLeft, ChevronRight, LogOut, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useDashboardStore } from "@/utils/Store/Doctor/DashboardStore";
import Image from "next/image";
import { Logo } from "@/utils/image";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userRole, logout, userName, getRedirectPath } = useAuthStore();
  const menuItems = getSidebarMenuItems(userRole);
  const { sidebarCollapsed, setSidebarCollapsed } = useDashboardStore();

  // Initialize sidebar as closed on mount
  useEffect(() => {
    setSidebarCollapsed(true);
  }, [setSidebarCollapsed]);

  // Lock/unlock body scroll when sidebar is open/closed on mobile
  useEffect(() => {
    const handleBodyScroll = () => {
      if (window.innerWidth < 768) {
        // Mobile breakpoint
        if (!sidebarCollapsed) {
          // Lock scroll
          document.body.style.overflow = "hidden";
          document.body.style.position = "fixed";
          document.body.style.width = "100%";
          document.body.style.top = `-${window.scrollY}px`;
        } else {
          // Unlock scroll and restore position
          const scrollY = document.body.style.top;
          document.body.style.overflow = "";
          document.body.style.position = "";
          document.body.style.width = "";
          document.body.style.top = "";
          if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
          }
        }
      } else {
        // Always unlock on desktop
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
      }
    };

    handleBodyScroll();

    // Handle window resize
    const handleResize = () => {
      handleBodyScroll();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [sidebarCollapsed]);

  // Memoize the base dashboard path
  const baseDashboardPath = useMemo(() => getRedirectPath(), [getRedirectPath]);

  // Memoize the active states for all menu items
  const activeStates = useMemo(() => {
    if (!menuItems || menuItems.length === 0) return {};

    const states: Record<string, boolean> = {};

    menuItems.forEach((item) => {
      const itemPath = item.path;

      // Exact match first
      if (pathname === itemPath) {
        states[itemPath] = true;
        return;
      }

      // Special case for root dashboard path
      if (itemPath === baseDashboardPath) {
        states[itemPath] = pathname === baseDashboardPath || pathname === "/";
        return;
      }

      // For nested routes, check if current path starts with the item path
      if (itemPath !== baseDashboardPath && pathname.startsWith(itemPath)) {
        const nextChar = pathname[itemPath.length];
        states[itemPath] = nextChar === "/" || nextChar === undefined;
        return;
      }

      states[itemPath] = false;
    });

    return states;
  }, [pathname, menuItems, baseDashboardPath]);

  // Memoized function to check if an item is active
  const isActive = useCallback(
    (itemPath: string) => {
      return activeStates[itemPath] || false;
    },
    [activeStates]
  );

  // Memoized logout handler
  const handleLogout = useCallback(async () => {
    try {
      await logout();
      router.replace("/login");
    } catch (error) {
      console.error("Logout error:", error);
      router.replace("/login");
    }
  }, [logout, router]);

  // Memoized navigation handler
  const handleNavigation = useCallback(
    (path: string) => {
      router.push(path);
      // Close sidebar on mobile after navigation
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    },
    [router, setSidebarCollapsed]
  );

  // Memoized toggle handler
  const handleToggleSidebar = useCallback(() => {
    setSidebarCollapsed(!sidebarCollapsed);
  }, [sidebarCollapsed, setSidebarCollapsed]);

  // Handle backdrop click to close sidebar on mobile
  const handleBackdropClick = useCallback(() => {
    if (window.innerWidth < 768) {
      setSidebarCollapsed(true);
    }
  }, [setSidebarCollapsed]);

  // If no menu items, don't render sidebar
  if (!menuItems || menuItems.length === 0) {
    return null;
  }

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleToggleSidebar}
          className="bg-[#053C6D] text-white hover:bg-[#042d5a] p-2 rounded-lg shadow-lg"
        >
          {sidebarCollapsed ? (
            <Menu className="h-5 w-5" />
          ) : (
            <X className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Backdrop overlay for mobile */}
      {!sidebarCollapsed && (
        <div
          className="fixed inset-0 bg-black/55  z-40 md:hidden"
          onClick={handleBackdropClick}
        />
      )}

      <div
        className={cn(
          "bg-[#053C6D] text-white transition-all rounded-lg duration-300 flex flex-col z-50",
          // Desktop styles
          "md:relative md:translate-x-0",
          // Mobile styles
          "fixed top-0 left-0 h-full md:h-auto",
          sidebarCollapsed
            ? "w-16 md:w-18 -translate-x-full md:translate-x-0"
            : "w-[20rem] translate-x-0"
        )}
      >
        {/* Header */}
        <div className="p-4 border-b pt-10 mb-20 border-slate-700">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && <Image src={Logo} alt="logo" />}

            {/* Desktop toggle button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleSidebar}
              className="text-white hover:bg-[#DAF1FB] hidden md:block"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile close button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleSidebar}
              className="text-white hover:bg-[#DAF1FB] md:hidden"
            >
              <X className="h-4 w-4" />
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
              <li key={`${item.path}-${index}`}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors text-left",
                    isActive(item.path)
                      ? "bg-white text-[#053C6D] shadow-md font-medium"
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
    </>
  );
};
