"use client";
import React from "react";
import { View } from "react-native";
import { Button } from "@mp/shared-ui";
import Dots from "../Dots/Dots";

interface BottomProps {
  currentIndex: number;
  handleButtonPress: () => void;
  getButtonText?: (index: number) => string;
  getButtonIcon?: (index: number) => React.ReactNode;
  containerStyle?: string;
  buttonStyle?: string;
}

const defaultButtonText = (index: number): string => {
  switch (index) {
    case 0:
      return "See how it works";
    case 2:
      return "Get Started";
    default:
      return " ";
  }
};

const defaultButtonIcon = (): React.ReactNode => null;

const Bottom: React.FC<BottomProps> = ({
  currentIndex,
  handleButtonPress,
  getButtonText = defaultButtonText,
  getButtonIcon = defaultButtonIcon,
  containerStyle = "",
}) => (
  <View
    className={`border-t border-[#802EFF] w-full p-4 flex-row justify-between ${containerStyle}`}
  >
    <Dots currentIndex={currentIndex} />
    <Button
      size={"lg"}
      textVariant={"lg"}
      onPress={handleButtonPress}
      label={getButtonText(currentIndex)}
      icon={getButtonIcon(currentIndex)}
    />
  </View>
);

export default Bottom;
