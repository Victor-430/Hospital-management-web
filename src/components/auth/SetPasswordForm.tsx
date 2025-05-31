"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import { toast } from "react-toastify";
import Image from "next/image";
import { LeftSideImage } from "./LeftSideImage";
import { Logo } from "@/utils/image";

export const setPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SetPasswordFormData = z.infer<typeof setPasswordSchema>;

interface SetPasswordFormProps {
  onComplete: () => void;
}

const SetPasswordForm = ({ onComplete }: SetPasswordFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setNewPassword } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetPasswordFormData>({
    resolver: zodResolver(setPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SetPasswordFormData) => {
    setIsLoading(true);
    try {
      await setNewPassword(data.password, data.confirmPassword);
      toast.success("Your password has been successfully updated");
      onComplete();
    } catch (error) {
      toast.error(
        `Password update failed
         ${error instanceof Error} ? ${
          error.message
        } : Failed to update password`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side */}
      <LeftSideImage />

      {/* Right side - Set password form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Image src={Logo} alt="logo" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Set A Password
            </h1>
            <p className="text-gray-600">
              Your Previous Password Has Been Reseted. Please Set A New Password
              For Your Account.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Create Password
              </label>
              <div className="relative">
                <Input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="3636BMBx@34%#$**--"
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Re-Enter Password
              </label>
              <div className="relative">
                <Input
                  {...register("confirmPassword")}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="3636BMBx@34%#$**--"
                  className="h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#053C6D] hover:bg-[#053C6D]/95 text-white text-lg"
            >
              {isLoading ? "Setting Password..." : "Set Password"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SetPasswordForm;
