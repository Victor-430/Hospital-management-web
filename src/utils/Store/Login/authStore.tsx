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
  loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  logout: () => void;
  setUserRole: (role: UserRole) => void;
  setRoleDashboardPath: (path: string) => void;
  setLoading: (loading: boolean) => void;
  forgotPassword: (email: string) => Promise<void>;
  verifyCode: (code: string) => Promise<void>;
  setNewPassword: (password: string, confirmPassword: string) => Promise<void>;
  resendCode: () => Promise<void>;
  clearError: () => void;
  getRedirectPath: () => string;
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

      setUserRole: (role: UserRole) => {
        set({ userRole: role });
        console.log("User role set to:", role);
      },

      setRoleDashboardPath: (path: string) => {
        set({ roleDashboardPath: path });
        console.log("Role dashboard path set to:", path);
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      getRedirectPath: () => {
        const { userRole } = get();

        // Return app routes that match your folder structure
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
            return "/Dashboard";
        }
      },

      login: async (
        email: string,
        password: string,
        rememberMe: boolean = false
      ) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const { userRole } = get();

          // Mock validation
          if (email && password.length >= 6) {
            const mockUser: User = {
              id: "1",
              email,
              name: email.split("@")[0],
              firstName: email.split("@")[0],
              lastName: "User",
              role: userRole || "patient",
            };

            set({
              isAuthenticated: true,
              isLoading: false,
              userEmail: email,
              userName: email.split("@")[0],
              user: mockUser,
              error: null,
            });

            if (rememberMe) {
              localStorage.setItem("rememberUser", email);
            }

            console.log("Login successful for:", email, "as", userRole);
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (error) {
          set({
            error: "Login failed. Please check your credentials.",
            isLoading: false,
          });
          throw error;
        }
      },

      loginWithGoogle: async () => {
        set({ isLoading: true, error: null });

        try {
          // Simulate Google OAuth
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const { userRole } = get();
          const mockUser: User = {
            id: "2",
            email: "user@gmail.com",
            name: "Google User",
            firstName: "Google",
            lastName: "User",
            role: userRole || "patient",
          };

          set({
            isAuthenticated: true,
            isLoading: false,
            userEmail: "user@gmail.com",
            userName: "Google User",
            user: mockUser,
            error: null,
          });
        } catch (error) {
          set({ error: "Google login failed.", isLoading: false });
          throw error;
        }
      },

      loginWithApple: async () => {
        set({ isLoading: true, error: null });

        try {
          // Simulate Apple OAuth
          await new Promise((resolve) => setTimeout(resolve, 1000));

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
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const { userRole } = get();
          const mockUser: User = {
            id: "4",
            email,
            name,
            firstName: name.split(" ")[0],
            lastName: name.split(" ")[1] || "",
            role: userRole || "patient",
          };

          set({
            isAuthenticated: true,
            isLoading: false,
            userEmail: email,
            userName: name,
            user: mockUser,
            error: null,
          });
        } catch (error) {
          set({ error: "Signup failed. Please try again.", isLoading: false });
          throw error;
        }
      },

      signUp: async (
        email: string,
        password: string,
        firstName: string,
        lastName: string
      ) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const { userRole } = get();
          const mockUser: User = {
            id: "5",
            email,
            firstName,
            lastName,
            name: `${firstName} ${lastName}`,
            role: userRole || "doctor",
          };

          set({
            isAuthenticated: true,
            isLoading: false,
            userEmail: email,
            userName: `${firstName} ${lastName}`,
            user: mockUser,
            error: null,
          });

          console.log("Sign up successful for:", email, "as", userRole);
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

      logout: () => {
        set({
          isAuthenticated: false,
          userRole: null,
          userEmail: null,
          userName: null,
          user: null,
          error: null,
          roleDashboardPath: null,
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
