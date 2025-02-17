"use client";
import { View, Animated } from "react-native";
import { useRef } from "react";

import { styles } from "./styles";

const Dot = ({
  index,
  currentIndex,
}: {
  index: number;
  currentIndex: number;
}) => {
  const animation = useRef(new Animated.Value(10)).current;

  Animated.timing(animation, {
    toValue: currentIndex === index ? 20 : 10,
    duration: 300,
    useNativeDriver: false,
  }).start();

  const backgroundColor = currentIndex === index ? "#fff" : "#666";

  return (
    <Animated.View
      key={index}
      style={[
        styles.dot,
        { width: animation, backgroundColor: backgroundColor },
      ]}
    />
  );
};

const Dots = ({ currentIndex }: { currentIndex: number }) => (
  <View className="flex-row justify-center items-center gap-2">
    {[0, 1, 2].map((i) => (
      <Dot key={i} index={i} currentIndex={currentIndex} />
    ))}
  </View>
);

export default Dots;
