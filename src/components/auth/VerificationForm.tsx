"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Shield, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import { toast } from "react-toastify";
import { LeftSideImage } from "./LeftSideImage";
import Image from "next/image";
import { Logo } from "@/utils/image";

const verificationSchema = z.object({
  code: z.string().min(6, "Code must be at least 6 characters"),
});

type VerificationFormData = z.infer<typeof verificationSchema>;

interface VerificationFormProps {
  onBack: () => void;
  onSetPassword: () => void;
}

export const VerificationForm = ({
  onBack,
  onSetPassword,
}: VerificationFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const { verifyCode } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (data: VerificationFormData) => {
    setIsLoading(true);
    try {
      await verifyCode(data.code);
      toast.success("Code verified , Please set your new password");
      onSetPassword();
    } catch (error) {
      toast.error(
        `Verification failed
          ${error instanceof Error} ? ${
          error.message
        } : Invalid verification code`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    toast.success(
      "Code resent, A new verification code has been sent to your email"
    );
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side  */}
      <LeftSideImage />

      {/* Right side - Verification form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md p-8 shadow-xl">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={onBack}
              className="p-0 h-auto font-normal text-[#053C6D] hover:text-[#053C6D]/90"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back To Login
            </Button>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Image src={Logo} alt="logo" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Verify Code
            </h1>
            <p className="text-gray-600">
              An Authentication Code Has Been Sent To Your Email
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Code
              </label>
              <div className="relative">
                <Input
                  {...register("code")}
                  type={showCode ? "text" : "password"}
                  placeholder="3636BMB"
                  className="h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowCode(!showCode)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showCode ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.code && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.code.message}
                </p>
              )}
            </div>

            <div className="text-left">
              <span className="text-gray-600">Didn't Receive A Code? </span>
              <button
                type="button"
                onClick={handleResend}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Resend
              </button>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#053C6D] hover:bg-[#053C6D]/95 text-white text-lg"
            >
              {isLoading ? "Verifying..." : "Verify"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
