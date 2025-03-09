import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native"
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { LargeWallet, SmallWallet } from "../../assets/images";
import { CardsContext } from "../../context/cardsContext";
import BackgroundScreen from "../../components/BackgroundScreen";
import { RootStackNavigationProp } from "../../navigator/appNavigation"

import styles from "./styles";
import { SCREENS_NAME } from "../screensName"

export default function LoadingWalletScreen() {
  const { getCards } = useContext(CardsContext)

  const navigation = useNavigation<RootStackNavigationProp>()
  const walletImageScale = useSharedValue(1)

  const [canNavigate, setCanNavigate] = useState(false)

  useEffect(fetchCardsList, [])
  useEffect(() => {
    if (canNavigate)
      execAnimation()
  }, [canNavigate]);

  function fetchCardsList() {
    getCards()
      .then(() => { setCanNavigate(true) })
      .catch((err) => { console.log({ err }) })
  }

  function navigateToHome() {
    navigation.reset({
      index: 0,
      routes: [
        { name: SCREENS_NAME.home },
        { name: SCREENS_NAME.cardsList },
      ]
    })
  }

  function execAnimation() {
    walletImageScale.value = withTiming(
      2,
      { duration: 1200, easing: Easing.ease },
      () => runOnJS(navigateToHome)()
    );
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: walletImageScale.value }],
    };
  });

  return (
    <BackgroundScreen animated>
      <Animated.View style={[styles.container]}>
        {canNavigate ? (
          <Animated.View style={animatedStyle}>
            <LargeWallet height={68} width={68} />
          </Animated.View>
        ) : (
          <SmallWallet height={68} width={68} />
        )}
      </Animated.View>
    </BackgroundScreen>
  );
}
