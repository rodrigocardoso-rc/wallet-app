import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Text from "../Text/Text";
import { ArrowLeft } from "../../assets/Icons";
import styles from "./styles";

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