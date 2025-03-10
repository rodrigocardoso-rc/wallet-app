import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Text from "../Text";
import { ArrowLeft, Plus } from "../../assets/Icons";
import { SCREENS_NAME } from "../../screens/ScreensName";
import { RootStackNavigationProp } from "../../navigators/AppNavigator";
import styles from "./styles";

interface IHeaderFilledProps {
  title: string;
}

export default function HeaderFilled({ title }: IHeaderFilledProps) {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation<RootStackNavigationProp>()

  function onPressGoBack() {
    navigation.goBack()
  }

  function onPressPlus() {
    navigation.navigate(SCREENS_NAME.newCard)
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableOpacity onPress={onPressGoBack} style={styles.iconContainer}>
        <ArrowLeft height={styles.icon.height} width={styles.icon.width} />
      </TouchableOpacity>

      <Text variant="h3" color={styles.title.color}>
        {title}
      </Text>

      <TouchableOpacity onPress={onPressPlus} style={styles.iconContainer}>
        <Plus height={styles.icon.height} width={styles.icon.width} />
      </TouchableOpacity>
    </View>
  );
}