import { Platform } from "react-native";
const Images = {
  logo_heymax: Platform.OS === "web" ? "/heymax.png" : require("./heymax.png"),
  intro_pic2:
    Platform.OS === "web" ? "/intro_pic2.png" : require("./intro_pic2.png"),
  world_map:
    Platform.OS === "web" ? "/world_map.png" : require("./world_map.png"),
  icon_right:
    Platform.OS === "web" ? "/icon_right.png" : require("./icon_right.png"),
  guide_pic1:
    Platform.OS === "web" ? "/guide_pic1.png" : require("./guide_pic1.png"),
  guide_pic2:
    Platform.OS === "web" ? "/guide_pic2.png" : require("./guide_pic2.png"),
  guide_pic3:
    Platform.OS === "web" ? "/guide_pic3.png" : require("./guide_pic3.png"),
};

export { Images };
