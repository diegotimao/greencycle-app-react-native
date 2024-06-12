import React, { createContext, useState } from "react";

interface AuthContextType {
  name: String
}

export const AuthContext = createContext<AuthContextType>({ name: ""});

function AuthProvider({ children }: any) {
  return (
    <AuthContext.Provider value={{ name: "" }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;