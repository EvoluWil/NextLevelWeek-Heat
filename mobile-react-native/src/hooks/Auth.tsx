import React, { createContext, useContext, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContextData } from "../@types/types/AuthContextData";
import { AuthContextProps } from "../@types/types/AuthContextProps";
import { UserTypes } from "../@types/types/User";
import { authUrl } from "../services/AuthUrl";
import {
  AuthorizationResponseTypes,
  AuthResponseTypes,
} from "../@types/types/AuthResponse";
import { api } from "../services/api";

const AuthContext = createContext({} as AuthContextData);

const AuthPrivider: React.FC<AuthContextProps> = ({ children }) => {
  const [isSignIng, setIsSigning] = useState(true);
  const [user, setUser] = useState<UserTypes | null>(null);

  const signIn = async () => {
    try {
      setIsSigning(true);
      const authSessionResponse = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponseTypes;

      if (
        authSessionResponse.type === "success" &&
        authSessionResponse.params.error !== "access_denied"
      ) {
        const authResponse = await api.post<AuthResponseTypes>(
          "/authenticate",
          {
            code: authSessionResponse.params.code,
          }
        );
        const { user, token } = authResponse.data;

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setUser(user);
        await AsyncStorage.setItem("@nlw-mobile:user", JSON.stringify(user));
        await AsyncStorage.setItem("@nlw-mobile:token", token);
      }
    } catch (err) {
      console.log();
    } finally {
      setIsSigning(false);
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("@nlw-mobile:user");
    await AsyncStorage.removeItem("@nlw-mobile:token");
    setUser(null);
  };

  useEffect(() => {
    const loadUserStored = async () => {
      const userStored = await AsyncStorage.getItem("@nlw-mobile:user");
      const tokenStored = await AsyncStorage.getItem("@nlw-mobile:token");

      if (userStored && tokenStored) {
        api.defaults.headers.common["Authorization"] = `Bearer ${tokenStored}`;
        setUser(JSON.parse(userStored));
      }
      setIsSigning(false);
    };
    loadUserStored();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        isSignIng,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuth, AuthPrivider };
