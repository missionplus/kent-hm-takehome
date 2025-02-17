"use client";

import { Dimensions, Text, View } from "react-native";
import { Animated } from "react-native";
import { useRef, useEffect } from "react";

import { styles } from "./styles";

const { width } = Dimensions.get("window");

const ProgressLine = ({ currentIndex }: { currentIndex: number }) => {
  const progressX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressX, {
      toValue: currentIndex === 1 ? 0 : width - 60,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentIndex, progressX]);

  return (
    <>
      {currentIndex > 0 && (
        <View className="absolute top-5 left-5 right-5 h-2 justify-center">
          <View className="absolute h-[2px] bg-[#802EFF] left-0 right-0" />
          <Animated.View
            style={[
              styles.progressCircle,
              { transform: [{ translateX: progressX }] },
            ]}
          >
            <Text className="text-white text-sm font-bold">{currentIndex}</Text>
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default ProgressLine;
