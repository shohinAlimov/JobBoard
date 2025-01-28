import React, { createContext, useContext, useState, useEffect } from "react";
import type { LoginFormInputs } from "../types/type";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  users: LoginFormInputs[];
  loggedInUser: LoginFormInputs | null;
  addUser: (user: LoginFormInputs) => void;
  loginUser: (user: LoginFormInputs) => boolean;
  logoutUser: () => void;
}

// Create AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<LoginFormInputs[]>(() => {
    return JSON.parse(localStorage.getItem("users") || "[]");
  });

  const [loggedInUser, setLoggedInUser] = useState<LoginFormInputs | null>(() => {
    return JSON.parse(localStorage.getItem("loggedInUser") || "null");
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  // Function to register a new user
  const addUser = (user: LoginFormInputs) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  // Function to validate user login
  const loginUser = (user: LoginFormInputs) => {
    const existingUser = users.find((u) => u.email === user.email && u.password === user.password);
    if (existingUser) {
      setLoggedInUser(existingUser); // Save logged-in user
      return true;
    }
    return false;
  };

  // Function to log out
  const logoutUser = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
    navigate("/")
  };

  return (
    <AuthContext.Provider value={{ users, loggedInUser, addUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to access AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
