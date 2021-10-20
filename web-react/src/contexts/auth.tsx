import { createContext, useEffect, useState } from "react";
import { api } from "../data/services/api";
import { AuthContextDataTypes } from "../data/types/AuthContextData";
import { AuthResponseTypes } from "../data/types/AuthResponse";
import { ChildrenType } from "../data/types/Children";
import { UserTypes } from "../data/types/User";

export const AuthContext = createContext({} as AuthContextDataTypes);

export const AuthProvider: React.FC<ChildrenType> = ({ children }) => {
  const [user, setUser] = useState<UserTypes | null>(null);

  const signIn = async (code: string) => {
    try {
      const res = await api.post<AuthResponseTypes>("/authenticate", {
        code,
      });
      const { token, user } = res.data;

      localStorage.setItem("@NLW-Heat:token", token);

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("@NLW-Heat:token");
  };

  const getUserAuthenticated = async (token: string) => {
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.get<UserTypes>("profile");
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@NLW-Heat:token");
    if (token) {
      getUserAuthenticated(token);
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGithub = url.includes("?code=");
    if (hasGithub) {
      const [urlWithoutCode, githubCode] = url.split("?code=");
      window.history.pushState({}, "", urlWithoutCode);
      signIn(githubCode);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
