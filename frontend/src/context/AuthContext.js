import React, { createContext, useState } from "react";
import { fakeUsers } from "../services/fakeData";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const found = fakeUsers.find(u => u.email === email && u.password === password);
    if(found) setUser(found);
    return found ? true : false;
  };

  const register = (name, email, password, role="user") => {
    const exists = fakeUsers.find(u => u.email === email);
    if(exists) return false;
    const newUser = { id: Date.now(), name, email, password, role };
    fakeUsers.push(newUser);
    setUser(newUser);
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
