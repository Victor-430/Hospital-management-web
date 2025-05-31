import { ContactFormData } from "../Validations/contact";
import { create } from "zustand";
import { ContactSubmissionState } from "@/components/Types/contact";
import { toast } from "react-toastify";

interface ContactStore extends ContactSubmissionState {
  formData: Partial<ContactFormData>;
  setFormData: (data: Partial<ContactFormData>) => void;
  submitForm: (data: ContactFormData) => Promise<void>;
  resetForm: () => void;
  clearError: () => void;
}

export const useContactStore = create<ContactStore>((set, get) => ({
  // State
  isSubmitting: false,
  isSuccess: false,
  error: null,
  formData: {},

  // Actions
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),

  submitForm: async (data) => {
    set({ isSubmitting: true, error: null });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Replace with actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });

      set({ isSubmitting: false, isSuccess: true });
      toast.success("Message sent successfully!");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong";
      set({
        isSubmitting: false,
        error: errorMessage,
      });
      toast.error(errorMessage);
    }
  },

  resetForm: () =>
    set({
      formData: {},
      isSuccess: false,
      error: null,
      isSubmitting: false,
    }),

  clearError: () => set({ error: null }),
}));
