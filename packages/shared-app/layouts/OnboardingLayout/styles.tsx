import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130739",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapContainer: { flex: 1, width, height, overflow: "hidden" },
  scrollViewContentStyle: {
    width: width * 3,
    flexGrow: 1,
    paddingVertical: 24,
  },
  fullWidth: {
    width,
  },
});

export default styles;
