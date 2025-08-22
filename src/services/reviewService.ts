import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  onSnapshot,
  Timestamp
} from 'firebase/firestore';
import { db } from '../firebase/config';
import type { ReviewData, StoredReview, ValidationResult, SubmissionResult } from '../types/review';

// Submit a new review
export const submitReview = async (reviewData: ReviewData): Promise<SubmissionResult> => {
  try {
    console.log('Submitting review:', reviewData); // Debug log
    const docRef = await addDoc(collection(db, 'reviews'), {
      ...reviewData,
      approved: false,
      createdAt: serverTimestamp(),
      submittedAt: new Date().toISOString(),
    });
    console.log('Review submitted with ID:', docRef.id); // Debug log
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting review:', error);
    return { success: false, error: (error as Error).message };
  }
};

// Get approved reviews
export const getApprovedReviews = async (): Promise<StoredReview[]> => {
  try {
    console.log('Fetching approved reviews...'); // Debug log
    const q = query(
      collection(db, 'reviews'),
      where('approved', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const reviews: StoredReview[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      // Convert Firestore timestamp to readable format
      const review: StoredReview = {
        id: doc.id,
        ...data,
        createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : data.createdAt,
      } as StoredReview;
      reviews.push(review);
    });
    console.log('Fetched reviews:', reviews); // Debug log
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};

// Subscribe to approved reviews (real-time updates)
export const subscribeToApprovedReviews = (callback: (reviews: StoredReview[]) => void) => {
  try {
    console.log('Setting up real-time listener for approved reviews...'); // Debug log
    const q = query(
      collection(db, 'reviews'),
      where('approved', '==', true),
      orderBy('createdAt', 'desc')
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviews: StoredReview[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const review: StoredReview = {
          id: doc.id,
          ...data,
          createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : data.createdAt,
        } as StoredReview;
        reviews.push(review);
      });
      console.log('Real-time update - reviews:', reviews); // Debug log
      callback(reviews);
    }, (error) => {
      console.error('Error in real-time listener:', error);
    });
    
    return unsubscribe;
  } catch (error) {
    console.error('Error setting up real-time listener:', error);
    return null;
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