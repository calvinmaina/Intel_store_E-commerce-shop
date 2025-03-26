


// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import "./Auth.css"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data

  // Simulate login
  const login = (email, password) => {
    // Replace with actual API call
    setUser({ email, firstName: 'John', lastName: 'Doe' }); // Simulate user data
  };

  // Simulate signup
  const signup = (email, password, firstName, lastName) => {
    // Replace with actual API call
    setUser({ email, firstName, lastName }); // Store user data
  };

  // Simulate logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};