import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 184,
    backgroundColor: colors.blackTertiary,
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace() + 16,
    paddingTop: 16,
  },

  textInput: {
    width: "100%",
    height: 88,
    textAlignVertical: "top",
    color: colors.white,
  },
});
