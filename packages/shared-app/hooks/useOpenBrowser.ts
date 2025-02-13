import { Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";

const useOpenBrowser = () => {
  const openUrl = (url: string) => {
    if (Platform.OS === "web") {
      window.location.href = url;
    } else {
      WebBrowser.openBrowserAsync(url);
    }
  };

  return { openUrl };
};

export default useOpenBrowser;
