"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Stethoscope, Heart, Settings, Crown, ArrowLeft } from "lucide-react";
import { useAuthStore } from "@/utils/Store/Login/authStore";
import { LeftSideImage } from "./LeftSideImage";
import { Logo } from "@/utils/image";
import Image from "next/image";

const roleSchema = z.object({
  role: z.enum(["doctor", "nurse", "admin", "super_admin"], {
    required_error: "Please select your role to continue",
  }),
});

type RoleForm = z.infer<typeof roleSchema>;

interface RoleVerificationProps {
  onBack: () => void;
  onContinue: () => void;
}

const roleOptions = [
  {
    value: "doctor",
    label: "Doctor",
    description: "Medical practitioner and healthcare provider",
    icon: Stethoscope,
    color: "text-blue-600",
    dashboardPath: "/Dashboard/doctor",
  },
  {
    value: "nurse",
    label: "Nurse",
    description: "Patient care specialist and medical assistant",
    icon: Heart,
    color: "text-pink-600",
    dashboardPath: "/Dashboard/nurse",
  },
  {
    value: "admin",
    label: "Administrator",
    description: "Hospital operations and management staff",
    icon: Settings,
    color: "text-green-600",
    dashboardPath: "/Dashboard/admin",
  },
  {
    value: "super_admin",
    label: "Super Administrator",
    description: "System administrator with full access",
    icon: Crown,
    color: "text-purple-600",
    dashboardPath: "/Dashboard/superAdmin",
  },
];

export const RoleVerification = ({
  onBack,
  onContinue,
}: RoleVerificationProps) => {
  const { setUserRole, setRoleDashboardPath, setSelectedRole } = useAuthStore();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<RoleForm>({
    resolver: zodResolver(roleSchema),
  });

  const selectedRole = watch("role");

  const onSubmit = async (data: RoleForm) => {
    try {
      const selectedRoleOption = roleOptions.find(
        (option) => option.value === data.role
      );
      setUserRole(data.role);
      setSelectedRole(data.role); // Set selectedRole
      if (selectedRoleOption) {
        setRoleDashboardPath(selectedRoleOption.dashboardPath);
      }
      console.log(
        "Role selected:",
        data.role,
        "Dashboard path:",
        selectedRoleOption?.dashboardPath
      );
      onContinue();
    } catch (error) {
      console.error("Role verification failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side  */}
      <LeftSideImage />

      {/* Right side - Role selection form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md p-8 shadow-xl">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={onBack}
              className="p-0 h-auto font-normal text-[#053C6D] hover:text-[#053C6D]/90"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Role Selection
            </Button>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Image src={Logo} alt="logo" />
            </div>
            <h1 className="text-3xl font-bold text-[#053C6D] mb-2">
              Verify Your Role
            </h1>
            <p className="text-gray-600">
              Select your role to access the appropriate dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <Label className="text-base font-medium">I am a:</Label>
              <RadioGroup
                value={selectedRole}
                onValueChange={(value) =>
                  setValue("role", value as RoleForm["role"])
                }
                className="space-y-3"
              >
                {roleOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <div
                      key={option.value}
                      className="flex items-center space-x-3"
                    >
                      <RadioGroupItem value={option.value} id={option.value} />
                      <label
                        htmlFor={option.value}
                        className="flex-1 flex items-center space-x-3 cursor-pointer p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <IconComponent className={`h-6 w-6 ${option.color}`} />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            {option.label}
                          </div>
                          <div className="text-sm text-gray-500">
                            {option.description}
                          </div>
                        </div>
                      </label>
                    </div>
                  );
                })}
              </RadioGroup>
              {errors.role && (
                <p className="text-sm text-red-600">{errors.role.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#053C6D] hover:bg-[#053C6D]/95 text-white text-lg"
              disabled={!selectedRole}
            >
              Continue to Login
            </Button>

            <div className="text-center">
              <span className="text-gray-600">Need help? </span>
              <button
                type="button"
                className="text-[#053C6D] hover:text-[#053C6D]/90 transition-colors"
              >
                Contact Support
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};
