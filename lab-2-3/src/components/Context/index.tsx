import { createContext, useEffect, useState } from "react";

import Auth from "../../models/Auth";

interface IContext {
  auth: Auth,
  setAuth: (auth: Auth) => void
}

export const Context = createContext({} as IContext);

export function ContextProvider({ children }: any) {
  const [auth, setAuthContext] = useState<Auth>({
    token: ""
  });

  function setAuth(auth: Auth) {
    setAuthContext(auth);
    localStorage.setItem("auth", JSON.stringify(auth));
  }

  useEffect(() => {
    const authStorage = localStorage.getItem("auth");

    if (authStorage)
      setAuthContext(JSON.parse(authStorage));
  }, []);

  return (
    <Context.Provider value={{ auth, setAuth }}>
      { children }
    </Context.Provider>
  )
}
