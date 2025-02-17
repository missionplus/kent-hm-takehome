import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { Images } from "../../../assets";

const { width } = Dimensions.get("window");

const Slide3 = () => {
  const mockupData = [
    {
      title: "Transfer miles",
      subTitle: "25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio",
      description: "Best for Business & First Class",
      icon: Images.guide_pic1,
    },
    {
      title: "Fly and Claim",
      subTitle: "Upload your flight ticket, and get reimbursed within 5 days.",
      description: "Best for Economy",
      icon: Images.guide_pic2,
    },
    {
      title: "Not flying soon",
      subTitle: "You can always redeem Gift Cards with your Max Miles.",
      description: "Best for Starters",
      icon: Images.guide_pic3,
    },
  ];

  return (
    <View className="flex-1 w-full pt-10 px-5 gap-5">
      <Text className="text-white text-4xl text-right font-bold">
        Redeem your trip
      </Text>

      <View className="gap-5">
        {mockupData.map((item, index) => (
          <View
            key={index}
            className="flex-row bg-purple-700/10 w-full rounded-2xl p-4 items-center gap-3"
            style={{ width: width - 32 }}
          >
            <Image
              source={item.icon}
              className="h-16 w-16"
              resizeMode="contain"
            />
            <View className="flex-1">
              <Text className="text-white text-base font-bold">
                {item.title}
              </Text>
              <Text className="text-white/50 text-sm font-normal leading-5">
                {item.subTitle}
              </Text>
              <Text className="text-[#a164ff] text-sm font-normal leading-4">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Slide3;
