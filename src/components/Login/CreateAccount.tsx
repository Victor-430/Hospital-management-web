import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { variantProp } from "../Types/signup";

export const CreateAccount = ({ variant }: { variant: variantProp }) => {
  const router = useRouter();

  const handleCreateAccount = () => {
    router.push("/sign-up");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="text-center mt-6">
      {variant === "login" ? (
        <div className="dv">
          <span className="text-gray-600">Don't have an account? </span>
          <Button
            onClick={handleCreateAccount}
            variant="link"
            className="text-[#053C6D] p-0 h-auto font-medium"
          >
            Create Account
          </Button>
        </div>
      ) : (
        <div className="dv">
          <span className="text-gray-600">Have an account? </span>
          <Button
            onClick={handleLogin}
            variant="link"
            className="text-[#053C6D] p-0 h-auto font-medium"
          >
            Log in
          </Button>
        </div>
      )}
    </div>
  );
};
