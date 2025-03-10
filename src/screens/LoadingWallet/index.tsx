import { useContext, useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { LargeWallet, SmallWallet } from "../../assets/Images";
import { CardsContext } from "../../contexts/CardsContext";
import { BackgroundScreen } from "../../components";
import { RootStackNavigationProp, RootStackParamList } from "../../navigators/AppNavigator"
import { SCREENS_NAME } from "../ScreensName"
import { FlashMessage } from "../../modules";

import styles from "./styles";
import { useImageAnimation } from "../../hooks";

export interface ILoadingWalletScreenParams {
  syncFromApi?: boolean
}

type TRouteParams = RouteProp<RootStackParamList, SCREENS_NAME.loadingWallet>;

export default function LoadingWalletScreen() {
  const { fetchCards } = useContext(CardsContext)
  const navigation = useNavigation<RootStackNavigationProp>()
  const { params } = useRoute<TRouteParams>()

  const [canNavigate, setCanNavigate] = useState(false)

  const walletImageScale = useImageAnimation(canNavigate, navigateToCardsList)

  useEffect(() => { fetchCardsList() }, [])

  async function fetchCardsList() {
    try {
      await fetchCards(params?.syncFromApi)
      setCanNavigate(true)
    }
    catch (err) {
      FlashMessage.show({
        message: 'Ocorreu um problema ao carregar os cartões. Tente novamente mais tarde',
        type: 'danger'
      })

      navigateToHome()
    }
  }

  function navigateToCardsList() {
    navigation.reset({
      index: 0,
      routes: [
        { name: SCREENS_NAME.home },
        { name: SCREENS_NAME.cardsList },
      ]
    })
  }

  function navigateToHome() {
    navigation.reset({
      index: 0,
      routes: [{ name: SCREENS_NAME.home }]
    })
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
