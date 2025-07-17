"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

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

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
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
