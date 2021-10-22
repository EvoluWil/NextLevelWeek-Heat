import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import LogoSvg from "../../assets/logo.svg";
import { UserAvatar } from "../UserAvatar";
import { useAuth } from "../../hooks/Auth";

export const Header = () => {
  const { user, signOut } = useAuth();
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.buttonContainer}>
        {user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        )}
        <UserAvatar imageUri={user?.avatar_url} size="normal" />
      </View>
    </View>
  );
};
