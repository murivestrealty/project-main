export interface ReviewData {
  name: string;
  title: string;
  email: string;
  content: string;
  rating: number;
  investment?: string;
  image?: string;
}

export interface StoredReview extends ReviewData {
  id: string;
  approved: boolean;
  createdAt: any; // Firestore timestamp
  submittedAt: string;
  moderatedBy?: string;
  moderatedAt?: any; // Firestore timestamp
  rejectionReason?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface SubmissionResult {
  success: boolean;
  id?: string;
  error?: string;
}