"use client";
import { signIn } from "next-auth/react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import { toast } from "react-toastify";

import Image from "next/image";
import { getRoleTitle } from "@/utils/role";
import { Logo } from "@/utils/image";
import { LeftSideImage } from "./LeftSideImage";
import { useRouter } from "next/navigation";
import Loading from "@/app/(Dashboard Layout)/loading";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onBack: () => void;
  onForgotPassword: () => void;
  onSignup: () => void;
}

export const LoginForm = ({ onBack, onForgotPassword }: LoginFormProps) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { login, userRole, getRedirectPath, selectedRole } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });


  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      await login(data.email, data.password, data.rememberMe);

      // Get the redirect path based on user role
      const redirectPath = getRedirectPath();

      console.log("Login successful, redirecting to:", redirectPath);
      console.log("User role:", userRole, "Selected role:", selectedRole);

      // Navigate based on role
      if (redirectPath && redirectPath !== "/login") {
        router.replace(redirectPath);
      } else {
        // If no valid redirect path, go to role selection
        console.warn("No valid redirect path found, going to role selection");
        router.replace("/RoleRedirect");
      }
      toast.success("Login successful (Welcome back!)");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      console.error("Login error:", errorMessage);
      toast.error(`Login failed`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);

    try {
      await signIn("google", { callbackUrl: "/RoleRedirect" });
    } catch (error) {
      console.error("Google login failed:", error);
      toast.error("Google login failed");
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleAppleLogin = () => {
    toast.success("Apple authentication successful");
  };

  const handleSignupClick = () => {
    router.push("/signup");
  };

  const roleTitle = getRoleTitle(userRole);

  return (
    <div className="min-h-screen flex">
      {/* Left side */}
      <LeftSideImage />

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md p-8 shadow-xl">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={onBack}
              className="p-0 h-auto font-normal text-[#053C6D]  hover:text-[#053C6D]/95"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Image src={Logo} alt="logo" className="mx-auto" />
            </div>
            <h1 className="text-3xl font-bold text-[#053C6D] mb-2">
              Welcome Back!
            </h1>
            <p className="text-gray-600">{roleTitle}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                {...register("email")}
                type="email"
                placeholder="jackjohnson@yahoo.com"
                className="h-12"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="jackjohnson@123"
                  className="h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox {...register("rememberMe")} id="remember" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-sm text-[#053C6D] hover:text-[#053C6D]/90"
              >
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#053C6D] hover:bg-[#053C6D]/95 text-white text-lg"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>

            <div className="text-center">
              <span className="text-gray-500">OR</span>
            </div>

            <div className="space-y-3">
              <Button
                disabled={googleLoading}
                type="button"
                variant="outline"
                onClick={handleGoogleLogin}
                className="w-full h-12 border-2"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                {googleLoading ? "Authenticating ..." : "Log in with Google"}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={handleAppleLogin}
                disabled={true}
                className="w-full h-12 border-2"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Log in with Apple
              </Button>
            </div>

            <div className="text-center">
              <span className="text-gray-600">
                Don&apos;t have an account?{" "}
              </span>
              <button
                type="button"
                onClick={handleSignupClick}
                className="text-[#053C6D] hover:text-[#053C6D]/90 font-medium"
              >
                Create Account
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};
