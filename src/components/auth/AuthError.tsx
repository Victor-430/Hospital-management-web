"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/(Dashboard Layout)/loading";

const AuthErrorContent = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const router = useRouter();

  let errorMessage = "An error occurred during authentication.";
  if (error === "AccessDenied") {
    errorMessage = "Authentication was cancelled or denied.";
  } else if (error === "Configuration") {
    errorMessage = "Unable to get profile";
  } else if (error === "OAuthCallbackError") {
    errorMessage = "An error occured during authentication";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-red-600">Authentication Error</h1>
      <p className="mt-4 text-gray-700">{errorMessage}</p>
      <Button onClick={() => router.push("/login")} className="mt-6">
        Back to Login
      </Button>
    </div>
  );
};

export const AuthError = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AuthErrorContent />
    </Suspense>
  );
};
