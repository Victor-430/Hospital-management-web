export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  message: string;

  department: string;
}

export interface ContactSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}
