"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import Loading from "@/app/(Dashboard Layout)/loading";

export default function RoleRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const { userRole, getRedirectPath, isAuthenticated, syncWithNextAuth } =
    useAuthStore();

  useEffect(() => {
    // Wait for the session to load
    if (status === "loading") return;

    // Check for error query parameter
    const error = searchParams.get("error");
    if (error) {
      if (error === "AccessDenied") {
        router.replace("/login?cancelled=true");
      } else {
        router.replace(`/auth-error?error=${error}`);
      }
      return; // Stop further execution after error redirect
    }

    // Handle authenticated users with role-based redirection
    if (status === "authenticated" && isAuthenticated && userRole) {
      syncWithNextAuth(session);

      const redirectPath = getRedirectPath();
      console.log("Redirecting to:", redirectPath, "Role:", userRole);
      if (redirectPath) {
        router.replace(redirectPath);
      } else {
        console.error("No valid redirect path for role:", userRole);
        router.replace("/login");
      }
    }
    // Handle unauthenticated users
    else if (status === "unauthenticated" || !isAuthenticated) {
      router.replace("/login");
    }
  }, [
    status,
    isAuthenticated,
    userRole,
    router,
    getRedirectPath,
    searchParams,
    session,
  ]);

  return <Loading />;
}
