import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  btmContainer: {
    borderTopWidth: 1,
    borderTopColor: "#802EFF",
    width: "100%",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
