import { TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft, Plus } from "../../assets/icons";
import Text from "../Text";
import { SCREENS_NAME } from "../../screens/screensName";
import { RootStackNavigationProp } from "../../navigator/appNavigation";

interface IHeaderFilledProps {
  title: string
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