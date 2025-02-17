import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Button } from "@mp/shared-ui";
import { Images } from "../../../assets";

const { width } = Dimensions.get("window");

const Slide2 = () => (
  <View className="flex-1 w-full pt-10 px-4 gap-6" style={{ width }}>
    <Text className="text-white text-4xl text-left font-bold">
      Shop your favourite brands, earn miles
    </Text>

    <View className="flex-row w-full overflow-hidden gap-3">
      {["Shop online", "Book travel", "Order food", "Get a haircut"].map(
        (label, index) => (
          <Button label={label} key={index} size={"sm"} textVariant={"sm"} />
        ),
      )}
    </View>

    <Image
      source={Images.intro_pic2}
      style={{ width: width - 16 * 2, height: width - 40 }}
      resizeMode="contain"
      alt="Introductory picture"
    />
  </View>
);

export default Slide2;
