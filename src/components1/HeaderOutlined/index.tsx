import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ArrowLeft } from "../../assets1/Icons";
import Text from "../Text";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IHeaderOutlinedProps {
  title: string;
}

export default function HeaderOutlined({ title }: IHeaderOutlinedProps) {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  function onPressGoBack() {
    navigation.goBack()
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableOpacity onPress={onPressGoBack} style={styles.iconContainer}>
        <ArrowLeft height={styles.icon.height} width={styles.icon.width} />
      </TouchableOpacity>

      <Text
        variant="h3"
        color={styles.title.color}
        style={styles.title}>
        {title}
      </Text>
    </View>
  );
}