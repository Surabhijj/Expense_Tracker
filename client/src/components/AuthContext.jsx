import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const recheckAuthentication = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/auth/verify', { withCredentials: true });
      console.log("Response status:", response.data.status); 
      if (response.data && response.data.status) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error during authentication verification:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    recheckAuthentication();
  }, []);


  useEffect(() => {
    console.log("Authentication status updated:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, recheckAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};
