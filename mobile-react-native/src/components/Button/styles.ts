import { StyleSheet } from "react-native";
import { fonts } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
  },

  buttonTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    marginTop: 5,
  },

  icon: {
    marginRight: 12,
  },
});
