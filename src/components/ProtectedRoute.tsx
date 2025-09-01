'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from './contexts/AuthContext'; // Assuming you have a client-side auth context

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { currentUser } = useAuth(); // or however you get the current user

  if (!currentUser) {
    // If no user is logged in, redirect to the login page
    router.push('/login');
    // It's good practice to return null or a loading state while redirecting
    return null; 
  }

  // If a user is logged in, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;