import {
  ScrollView,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  View,
  Image,
} from "react-native";
import { useRef, useState, useEffect } from "react";
import { Animated } from "react-native";
import useOpenBrowser from "../../hooks/useOpenBrowser";
import styles from "./styles";
import Bottom from "../../components/Onboarding/Bottom/Bottom";
import ProgressLine from "../../components/Onboarding/ProgressLine/ProgressLine";
import Slide1 from "../../components/Onboarding/Slide1/Slide";
import Slide2 from "../../components/Onboarding/Slide2/Slide2";
import Slide3 from "../../components/Onboarding/Slide3/Slide3";
import { Images } from "shared-app/assets";

const { width } = Dimensions.get("window");

export const OnboardingLayout = (): JSX.Element => {
  const { openUrl } = useOpenBrowser();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const index = Math.round(value / width);
      setCurrentIndex(index);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, [scrollX]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
      useNativeDriver: false,
    })(event);
  };

  const handleButtonPress = () => {
    if (currentIndex < 2) {
      const nextPage = (currentIndex + 1) * width;
      scrollRef.current?.scrollTo({ x: nextPage, animated: true });
    } else {
      openUrl("https://heymax.ai");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#130739] items-center justify-center">
      <View style={styles.wrapContainer}>
        <ProgressLine currentIndex={currentIndex} />
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollViewContentStyle}
          className="flex-1"
        >
          <Slide1 />
          <Slide2 />
          <Slide3 />
        </ScrollView>
        <Bottom
          currentIndex={currentIndex}
          handleButtonPress={handleButtonPress}
          getButtonIcon={(index) =>
            index === 2 ? null : (
              <Image source={Images.icon_right} className="h-4 w-4" />
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};
