import { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import * as FlashMessage from "../../modules/FlashMessage/FlashMessage";
import { SCREENS_NAME } from "../ScreensName"
import { LargeWallet, SmallWallet } from "../../assets/Images";
import Background from "../../components/Background/Background";
import { RootStackNavigationProp, RootStackParamList } from "../../navigators/AppNavigator"
import useCardList from "../../hooks/UseCardList/useCardList";
import useImageAnimation from "../../hooks/UseImageAnimation/useImageAnimation";

import styles from "./styles";

export interface ILoadingWalletScreenParams {
  syncFromApi?: boolean
}

type TRouteParams = RouteProp<RootStackParamList, SCREENS_NAME.loadingWallet>;

export default function LoadingWalletScreen() {
  const { fetchCards } = useCardList()
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
    <Background animated>
      <Animated.View style={[styles.container]}>
        {canNavigate ? (
          <Animated.View style={animatedStyle}>
            <LargeWallet height={68} width={68} />
          </Animated.View>
        ) : (
          <SmallWallet height={68} width={68} />
        )}
      </Animated.View>
    </Background>
  );
}
