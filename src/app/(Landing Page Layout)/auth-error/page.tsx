import { AuthError } from "@/components/auth/AuthError";

// Force dynamic rendering - opt out of static generation
export const dynamic = "force-dynamic";

const AuthErrorPage = () => {
  return <AuthError />;
};

export default AuthErrorPage;
