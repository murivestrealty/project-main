'use client';

// src/components/Login.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for the Next.js router

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // The hook returns a 'router' object

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Use dummy credentials for a basic login
    const DUMMY_EMAIL = 'admin@example.com';
    const DUMMY_PASSWORD = 'password123';

    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      // Simulate a successful login
      console.log('Login successful!');
      // You can store a flag in localStorage to maintain the login state
      localStorage.setItem('isAuthenticated', 'true');

      // Redirect to the admin dashboard using router.push()
      router.push('/admin');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            Use the following dummy credentials:
          </p>
          <p>Email: <strong>admin@example.com</strong></p>
          <p>Password: <strong>password123</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Login;