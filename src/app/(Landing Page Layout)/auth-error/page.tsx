import Loading from "@/app/(Dashboard Layout)/loading";
import { AuthError } from "@/components/auth/AuthError";
import { Suspense } from "react";

const AuthErrorpage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AuthError />;
    </Suspense>
  );
};

export default AuthErrorpage;
