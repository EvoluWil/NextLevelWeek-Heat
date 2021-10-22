import { StyleSheet } from "react-native";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.blackTertiary,
    height: 80,
    marginTop: -17,
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoutText: {
    fontSize: 15,
    fontFamily: fonts.regular,
    color: colors.white,
    marginRight: 10,
  },
});
