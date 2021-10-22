import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

import { Button } from "../Button";
import { colors } from "../../theme";
import { useAuth } from "../../hooks/Auth";

export const SignInBox = () => {
  const { signIn, isSignIng } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM GITHUB"
        color={colors.blackPrimary}
        backgroundColor={colors.yellow}
        icon="github"
        onPress={signIn}
        isLoading={isSignIng}
      />
    </View>
  );
};
