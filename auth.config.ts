import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { UserRole } from "@/utils/Store/Login/authStore";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
    error: "/auth-error",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role || null;
        token.firstName = user.firstName || user.name?.split(" ")[0] || "";
        token.lastName = user.lastName || user.name?.split(" ")[1] || "User";
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.role = token.role as UserRole;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
      }
      return session;
    },
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    Credentials({
      name: "credentials",
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
            role: credentials.role as UserRole,
          };
        }
        return null;
      },
    }),
  ],
};
