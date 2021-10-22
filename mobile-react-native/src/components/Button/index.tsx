import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

import { ButtonProps } from "../../@types/types/Button";

export const Button: React.FC<ButtonProps> = ({
  title,
  color,
  backgroundColor,
  icon,
  isLoading = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.7}
      style={[styles.button, { backgroundColor }]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={color} />
      ) : (
        <>
          <AntDesign name={icon} size={24} style={styles.icon} color={color} />
          <Text style={[styles.buttonTitle, { color }]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
