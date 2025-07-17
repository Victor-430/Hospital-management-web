import { signIn, signOut } from "next-auth/react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserRole =
  | "patient"
  | "staff"
  | "doctor"
  | "nurse"
  | "admin"
  | "super_admin"
  | null;

interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  role: UserRole;
  image?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  userRole: UserRole;
  userEmail: string | null;
  userName: string | null;
  user: User | null;
  error: string | null;
  roleDashboardPath: string | null;

  // Actions from both stores
  login: (
    email: string,
    password: string,
    rememberMe?: boolean
  ) => Promise<void>;
  // loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  setUserRole: (role: UserRole) => void;
  selectedRole: UserRole | null;
  setSelectedRole: (role: UserRole) => void;
  setRoleDashboardPath: (path: string) => void;
  setLoading: (loading: boolean) => void;
  forgotPassword: (email: string) => Promise<void>;
  verifyCode: (code: string) => Promise<void>;
  setNewPassword: (password: string, confirmPassword: string) => Promise<void>;
  resendCode: () => Promise<void>;
  clearError: () => void;
  getRedirectPath: () => string;
  syncWithNextAuth: (session: any) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      isLoading: false,
      userRole: null,
      userEmail: null,
      userName: null,
      user: null,
      error: null,
      roleDashboardPath: null,
      selectedRole: null,

      setUserRole: (role: UserRole) => {
        set({ userRole: role });
        console.log("User role set to:", role);
      },

      setSelectedRole: (role) => set({ selectedRole: role }),

      setRoleDashboardPath: (path: string) => {
        set({ roleDashboardPath: path });
        console.log("Role dashboard path set to:", path);
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      getRedirectPath: () => {
        const { userRole } = get();

        switch (userRole) {
          case "doctor":
            return "/Dashboard/doctor";
          case "nurse":
            return "/Dashboard/nurse";
          case "admin":
            return "/Dashboard/admin";
          case "super_admin":
            return "/Dashboard/superAdmin";
          case "patient":
            return "/Dashboard/patient";
          default:
            return null;
        }
      },

      // Sync Zustand store with NextAuth session
      syncWithNextAuth: (session: any) => {
        if (session?.user) {
          const roleFromSession = session.user.role as UserRole;
          const roleToUse = roleFromSession || get().selectedRole;
          const user: User = {
            id: session.user.id,
            email: session.user.email,
            firstName: session.user.firstName,
            lastName: session.user.lastName,
            name: session.user.name,
            role: session.user.role,
            image: session.user.image,
          };

          set({
            isAuthenticated: true,
            user,
            userEmail: session.user.email,
            userName: session.user.name,
            userRole: roleToUse,
            error: null,
            selectedRole: get().selectedRole,
          });
        } else {
          set({
            selectedRole: null,
            isAuthenticated: false,
            user: null,
            userEmail: null,
            userName: null,
            userRole: null,
          });
        }
      },

      login: async (
        email: string,
        password: string,
        rememberMe: boolean = false
      ) => {
        set({ isLoading: true, error: null });

        try {
          const result = await signIn("credentials", {
            email,
            password,
            role: get().userRole,
            redirect: false,
          });

          if (result?.error) {
            throw new Error(result.error);
          }

          // The session will be synced via useEffect
          if (result?.ok) {
            set({ isLoading: false });
            if (rememberMe) {
              localStorage.setItem("rememberUser", email);
            }
          }

          console.log("Login successful for:", email);
        } catch (error) {
          set({
            error: "Login failed. Please check your credentials.",
            isLoading: false,
          });
          throw error;
        }
      },

      // ckeck loginform to see google oauth and follow same step for apple
      loginWithApple: async () => {
        set({ isLoading: true, error: null });

        try {
          // Simulate Apple OAuth
          await new Promise((resolve) => setTimeout(resolve, 5000));

          const { userRole } = get();
          const mockUser: User = {
            id: "3",
            email: "user@icloud.com",
            name: "Apple User",
            firstName: "Apple",
            lastName: "User",
            role: userRole || "patient",
          };

          set({
            isAuthenticated: true,
            isLoading: false,
            userEmail: "user@icloud.com",
            userName: "Apple User",
            user: mockUser,
            error: null,
          });
        } catch (error) {
          set({ error: "Apple login failed.", isLoading: false });
          throw error;
        }
      },

      signup: async (name: string, email: string, password: string) => {
        set({ isLoading: true, error: null });

        try {
          // call API to create the user first
          // Then sign them in
          const result = await signIn("credentials", {
            email,
            password,
            role: get().userRole,
            redirect: false,
          });

          if (result?.error) {
            throw new Error(result.error);
          }

          set({ isLoading: false });
        } catch (error) {
          set({ error: "Signup failed. Please try again.", isLoading: false });
          throw error;
        }
      },

      signUp: async (
        email: string,
        password: string
        // firstName: string,
        // lastName: string
      ) => {
        set({ isLoading: true, error: null });

        try {
          // call API to create the user first
          // Then sign them in
          const result = await signIn("credentials", {
            email,
            password,
            role: get().userRole,
            redirect: false,
          });

          if (result?.error) {
            throw new Error(result.error);
          }

          set({ isLoading: false });
          console.log("Sign up successful for:", email);
        } catch (error) {
          set({ error: "Sign up failed. Please try again.", isLoading: false });
          throw error;
        }
      },

      forgotPassword: async (email: string) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          set({ isLoading: false });
          console.log("Password reset email sent to:", email);
        } catch (error) {
          set({
            error: "Failed to send password reset email.",
            isLoading: false,
          });
          throw error;
        }
      },

      verifyCode: async (code: string) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          if (code.length < 6) {
            throw new Error("Invalid verification code");
          }
          set({ isLoading: false });
        } catch (error) {
          set({ error: "Invalid verification code.", isLoading: false });
          throw error;
        }
      },

      setNewPassword: async (password: string, confirmPassword: string) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
          }
          if (password.length < 6) {
            throw new Error("Password must be at least 6 characters");
          }
          set({ isLoading: false });
        } catch (error) {
          set({
            error:
              error instanceof Error
                ? error.message
                : "Failed to set new password.",
            isLoading: false,
          });
          throw error;
        }
      },

      resendCode: async () => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          set({ isLoading: false });
          console.log("Verification code resent");
        } catch (error) {
          set({
            error: "Failed to resend verification code.",
            isLoading: false,
          });
          throw error;
        }
      },

      clearError: () => {
        set({ error: null });
      },

      logout: async () => {
        signOut({ redirect: false });
        set({
          isAuthenticated: false,
          userRole: null,
          userEmail: null,
          userName: null,
          user: null,
          error: null,
          roleDashboardPath: null,
          selectedRole: null,
        });
        localStorage.removeItem("rememberUser");
        console.log("User logged out");
      },
    }),
    {
      name: "carecycle-auth-storage",
    }
  )
);
