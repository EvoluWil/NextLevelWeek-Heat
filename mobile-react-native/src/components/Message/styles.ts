import { StyleSheet } from "react-native";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 36,
  },
  userName: {
    fontSize: 15,
    fontFamily: fonts.bold,
    color: colors.white,
    marginLeft: 16,
  },
  message: {
    fontSize: 15,
    fontFamily: fonts.regular,
    color: colors.white,
    lineHeight: 20,
    marginBottom: 11,
  },
  createdAt: {
    fontSize: 10,
    fontFamily: fonts.regular,
    color: colors.grayPrimary,
    marginLeft: 18,
  },
  messageFooter: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
