'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';

//
// Define UserData shape
//
interface UserData {
  uid: string;
  email: string;
  displayName: string;
  profileImage?: string | null;
  address?: { city?: string; street?: string };
  totalInvestment?: number;
  properties?: string[];
  joinDate?: string;
  portfolioValue?: number;
  totalYield?: number;
  kycStatus?: "pending" | "verified" | "rejected";
  preferences?: {
    theme?: "light" | "dark";
    notifications?: boolean;
    language?: string;
    marketingEmails?: boolean;       // ✅ now inside preferences
    emailNotifications?: boolean;    // ✅ now inside preferences
  };
}

//
// Define Auth context type
//
interface AuthContextType {
  currentUser: User | null;
  userData: UserData | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  //
  // Signup new user
  //
  const signup = async (email: string, password: string, displayName: string) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName });

    // Initial Firestore user doc
    const userDoc: UserData = {
      uid: user.uid,
      email: user.email!,
      displayName,
      totalInvestment: 0,
      properties: [],
      joinDate: new Date().toISOString(),
      portfolioValue: 0,
      totalYield: 0,
      address: { city: undefined, street: undefined },
      profileImage: null,
      kycStatus: "pending",
      preferences: {
        theme: "light",
        notifications: true,
        language: "en"
      }
    };

    await setDoc(doc(db, 'users', user.uid), userDoc);
    setUserData(userDoc);
  };

  //
  // Login existing user
  //
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  //
  // Logout
  //
  const logout = async () => {
    await signOut(auth);
    setUserData(null);
  };

  //
  // Fetch Firestore user data
  //
  const fetchUserData = async (user: User) => {
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      setUserData(userDoc.data() as UserData);
    }
  };

  //
  // Watch auth state
  //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchUserData(user);
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    userData,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
