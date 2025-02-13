import { Button, Text } from "@mp/shared-ui";
import { View, Image, ScrollView } from "react-native";

import useOpenBrowser from "../hooks/useOpenBrowser";
import { Images } from "../assets";

export function Home() {
  const { openUrl } = useOpenBrowser();

  const handleCTAPress = () => {
    const url = "https://heymax.ai";
    openUrl(url);
  };

  return (
    <View className="flex flex-1 items-center bg-[#130739]">
      <ScrollView
        className="flex-1 flex-grow"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        <View className="flex flex-col items-center gap-8 mx-10">
          <Image source={Images.logo_app} className="w-40 h-40 mt-24" />
          <Image source={Images.bg_intro_1} className="w-40 h-40" />
          <Text
            variant={"heading"}
            fontFamily={"bold"}
            className="text-white leading-10 self-center"
          >
            Shop your way to a
          </Text>
          <Text
            variant={"heading"}
            fontFamily={"bold"}
            className="text-[#802eff] self-center"
          >
            Dream Vacation
          </Text>
          <Text className="text-white self-center text-center">
            Turn your expenses into dream vacations by earning miles every time
            you shop
          </Text>
        </View>
        <View className="flex flex-col items-center gap-8 mx-10">
          <Image source={Images.logo_app} className="w-40 h-40 mt-24" />
          <Image source={Images.bg_intro_1} className="w-40 h-40" />
          <Text
            variant={"heading"}
            fontFamily={"bold"}
            className="text-white leading-10 self-center"
          >
            Shop your way to a
          </Text>
          <Text
            variant={"heading"}
            fontFamily={"bold"}
            className="text-[#802eff] self-center"
          >
            Dream Vacation
          </Text>
          <Text className="text-white self-center text-center">
            Turn your expenses into dream vacations by earning miles every time
            you shop
          </Text>
        </View>
        <View className="flex flex-col items-center gap-8 mx-10">
          <Image source={Images.logo_app} className="w-40 h-40 mt-24" />
          <Image source={Images.bg_intro_1} className="w-40 h-40" />
          <Text
            variant={"heading"}
            fontFamily={"bold"}
            className="text-white leading-10 self-center"
          >
            Shop your way to a
          </Text>
          <Text
            variant={"heading"}
            fontFamily={"bold"}
            className="text-[#802eff] self-center"
          >
            Dream Vacation
          </Text>
          <Text className="text-white self-center text-center">
            Turn your expenses into dream vacations by earning miles every time
            you shop
          </Text>
        </View>
      </ScrollView>
      <View className=" h-[80px] flex-row items-center justify-between w-full border-t border-[#802eff] py-4">
        <Text>Test</Text>
        <Button
          variant={"primary"}
          onPress={handleCTAPress}
          icon={<Image source={Images.icon_right} className="w-5 h-5" />}
        >
          See how it work
        </Button>
      </View>
    </View>
  );
}
