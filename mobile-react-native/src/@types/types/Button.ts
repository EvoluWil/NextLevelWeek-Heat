import { ColorValue, TouchableOpacityProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export interface ButtonProps extends TouchableOpacityProps {
  title: string | undefined;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>["name"];
  isLoading?: boolean;
}
