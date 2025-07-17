"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import { useEffect } from "react";

function SessionSync() {
  const { data: session, status } = useSession();
  const syncWithNextAuth = useAuthStore((state) => state.syncWithNextAuth);

  useEffect(() => {
    if (status === "loading") return; // Wait until session is loaded
    console.log("SessionSync - Status:", status, "Session:", session);
    syncWithNextAuth(session);
  }, [session, status, syncWithNextAuth]);

  return null;
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthSessionProvider>
      <SessionSync />
      {children}
    </NextAuthSessionProvider>
  );
}
