import { DefaultSession } from "next-auth";
import { UserRole } from "@/utils/Store/Login/authStore";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: UserRole;
      firstName?: string;
      lastName?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email?: string | null;
    name?: string | null;
    image?: string | null;
    role: UserRole;
    firstName?: string;
    lastName?: string;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role: UserRole;
    firstName?: string;
    lastName?: string;
  }
}
