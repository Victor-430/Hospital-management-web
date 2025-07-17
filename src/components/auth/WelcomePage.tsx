"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { VerificationForm } from "./VerificationForm";
import SetPasswordForm from "./SetPasswordForm";
import { RoleVerification } from "./RoleVerification";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import { LeftSideImage } from "./LeftSideImage";
import Image from "next/image";
import { Logo } from "@/utils/image";
import { useRouter } from "next/navigation";

type AuthView =
  | "welcome"
  | "role-verification"
  | "login"
  | "signup"
  | "forgot-password"
  | "verification"
  | "set-password";

export const WelcomePage = () => {
  const router = useRouter();
  const [currentView, setCurrentView] = useState<AuthView>("welcome");

  const renderCurrentView = () => {
    switch (currentView) {
      case "role-verification":
        return (
          <RoleVerification
            onBack={() => setCurrentView("welcome")}
            onContinue={() => setCurrentView("login")}
          />
        );
      case "login":
        return (
          <LoginForm
            onBack={() => setCurrentView("welcome")}
            onForgotPassword={() => setCurrentView("forgot-password")}
            // onSignup={() => setCurrentView("signup")}
            onSignup={() => router.push("/signup")}
          />
        );
      case "signup":
        return (
          <SignupForm
            onBack={() => setCurrentView("welcome")}
            onLogin={() => router.push("/signup")}
          />
        );
      case "forgot-password":
        return (
          <ForgotPasswordForm
            onBack={() => setCurrentView("login")}
            onVerification={() => setCurrentView("verification")}
          />
        );
      case "verification":
        return (
          <VerificationForm
            onBack={() => setCurrentView("forgot-password")}
            onSetPassword={() => setCurrentView("set-password")}
          />
        );
      case "set-password":
        return <SetPasswordForm onComplete={() => setCurrentView("login")} />;
      default:
        return (
          <div className="min-h-screen flex">
            {/* Left side - Medical professional image */}
            <LeftSideImage />
            {/* Right side - Welcome options */}
            <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
              <Card className="w-full max-w-md p-8 shadow-xl">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Image src={Logo} alt="logo" />
                  </div>
                  <h1 className="text-3xl font-bold text-[#053C6D] mb-2">
                    Welcome!
                  </h1>
                  <p className="text-gray-600">Select your role to continue</p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={() => setCurrentView("role-verification")}
                    className="w-full h-14 text-lg bg-[#053C6D] hover:bg-[#053C6D]/95 text-white"
                  >
                    Staff
                  </Button>
                  <Button
                    onClick={() => {
                      useAuthStore.getState().setUserRole("patient");
                      setCurrentView("login");
                    }}
                    className="w-full h-14 text-lg bg-[#053C6D] hover:bg-[#053C6D]/95 text-white"
                  >
                    Patient
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        );
    }
  };

  return renderCurrentView();
};
