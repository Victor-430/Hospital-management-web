import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { UserRole } from "@/utils/Store/Login/authStore";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile",
        },
      },
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const password = credentials.password;
        const email = credentials.email;
        if (
          typeof password === "string" &&
          typeof email === "string" &&
          password.length >= 6
        ) {
          return {
            id: "1",
            email: email,
            name: email.split("@")[0],
            firstName: email.split("@")[0],
            lastName: "User",
            role: (credentials.role as UserRole) || "patient",
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // Add secret
  secret: process.env.AUTH_SECRET,
  trustHost: true,
});
