"use client";

import React, { createContext, useLayoutEffect, useState } from "react";

const AuthContext = createContext({
  authUser: false,
  setAuthUser: (value: boolean) => {},
});

export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }: any): React.ReactNode => {
  const [authUser, setAuthUser] = useState<boolean>(false);

  useLayoutEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")!));
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
