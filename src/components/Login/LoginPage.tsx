"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { loginSchema, type LoginFormData } from "@/utils/Validations/login";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import { CreateAccount } from "./CreateAccount";
import { SocialLoginBtn } from "./SocialLoginBtn";
import { RememberMe } from "./RememberMe";
import { PasswordInput } from "./PasswordInput";
import { EmailInput } from "./EmailInput";
import Image from "next/image";
import { Login_Image, Logo } from "@/utils/image";
import { LoginBtn } from "./LoginBtn";
import { ForgotPassword } from "./ForgotPassword";
import { variantProp } from "../Types/signup";
import { NameInput } from "./NameInput";

// disabled this check loginForm in auth folder

export const LoginPage = ({ variant }: { variant: variantProp }) => {
  const { login, loginWithApple, isLoading } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "jackjohnson@yahoo.com",
      password: "jackjohnson@123",
      rememberMe: false,
    },
  });

  const rememberMe = watch("rememberMe");

  const onFormSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password, data.rememberMe);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleAppleLogin = async () => {
    try {
      await loginWithApple();
    } catch (error) {
      console.error("Apple login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Blue background with doctor image */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#053C6D] items-center justify-center p-12">
        <Image src={Login_Image} alt="Healthcare Professional" />
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <div className="space-y-8 mb-8 text-center lg:text-left">
            <Image src={Logo} alt="logo" className="mx-auto" />
            {/* display only when prop is singup */}
            {variant === "signup" ? (
              <div className="">
                <h1 className="text-3xl font-bold text-[#053C6D] mb-2">
                  Create Account
                </h1>

                <p className="text-gray-600">
                  Please fill the information below
                </p>
              </div>
            ) : (
              <div className="div">
                <h1 className="text-5xl font-bold text-[#053C6D] mb-2">
                  Welcome Back!
                </h1>
                {variant === "login" ? (
                  <p className="text-gray-600">Staff Portal Login</p>
                ) : (
                  <p className="text-[#919191] font-normal text-lg">
                    Staff Portal Login
                  </p>
                )}
              </div>
            )}
          </div>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
                {/* display name only when the prop is signup */}
                {variant === "signup" && (
                  <NameInput errors={errors} register={register} />
                )}

                <EmailInput errors={errors} register={register} />

                <PasswordInput errors={errors} register={register} />

                <div className="flex items-center justify-between">
                  <RememberMe remember={rememberMe} value={setValue} />
                  <ForgotPassword />
                </div>

                <LoginBtn loading={isLoading} />

                {/* Divider */}
                <div className="relative my-6">
                  <Separator />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500">
                      OR
                    </span>
                  </div>
                </div>

                <SocialLoginBtn
                  // googleLogin={handleGoogleLogin}
                  appleLogin={handleAppleLogin}
                  loading={isLoading}
                />

                <CreateAccount variant="login" />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
