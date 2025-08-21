import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config';
import type { ReviewData, StoredReview, ValidationResult, SubmissionResult } from '../types/review';

// Submit a new review
export const submitReview = async (reviewData: ReviewData): Promise<SubmissionResult> => {
  try {
    const docRef = await addDoc(collection(db, 'reviews'), {
      ...reviewData,
      approved: false,
      createdAt: serverTimestamp(),
      submittedAt: new Date().toISOString(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting review:', error);
    return { success: false, error: (error as Error).message };
  }
};

// Get approved reviews
export const getApprovedReviews = async (): Promise<StoredReview[]> => {
  try {
    const q = query(
      collection(db, 'reviews'),
      where('approved', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const reviews: StoredReview[] = [];
    querySnapshot.forEach((doc) => {
      reviews.push({ id: doc.id, ...doc.data() } as StoredReview);
    });
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};

// Validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate review data
export const validateReviewData = (data: ReviewData): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!data.title || data.title.trim().length < 2) {
    errors.title = 'Title must be at least 2 characters long';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.content || data.content.trim().length < 50) {
    errors.content = 'Review must be at least 50 characters long';
  }

  if (!data.rating || data.rating < 1 || data.rating > 5) {
    errors.rating = 'Please select a rating between 1 and 5 stars';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};