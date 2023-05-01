"use client";

import Link from "next/link";
import { useState, createContext, useContext } from "react";

export const Context = createContext({ user: {} });
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const LogoutBtn = () => {
  const logoutHandler = () => {
    alert("logged out");
  };
  const { user } = useContext(Context);

  return (

      user.id ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <Link className="mx-5" href={"/login"}>
          LogIn
        </Link>
      )

  );
};
