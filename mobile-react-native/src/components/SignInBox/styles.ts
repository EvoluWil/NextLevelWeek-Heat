import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: getBottomSpace() + 32,
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
