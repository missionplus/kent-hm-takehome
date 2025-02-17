import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Images } from "../../../assets";

const { width } = Dimensions.get("window");
const Slide = () => (
  <View className="flex items-center pt-24 px-4 w-full" style={{ width }}>
    <Image
      source={Images.logo_heymax}
      alt="Logo"
      resizeMode="contain"
      className="w-[40%] h-[20vw]"
    />
    <Image
      source={Images.world_map}
      alt="Intro1"
      resizeMode="cover"
      className="w-[50%] h-[50vw]"
    />
    <View className="mt-10 gap-3">
      <Text className="text-white text-[32px] text-center font-bold flex-wrap">
        Shop your way to a{" "}
        <Text className="text-[#a164ff] font-bold">Dream Vacation</Text>
      </Text>
      <Text className="text-white opacity-50 text-base text-center font-medium leading-6">
        Turn your expenses into dream vacations by earning miles every time you
        shop
      </Text>
    </View>
  </View>
);

export default Slide;
