import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ArrowLeft } from "../../assets/icons";
import Text from "../../components/Text";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IOutlinedHeaderProps {
  title: string;
}

export default function OutlinedHeader({ title }: IOutlinedHeaderProps) {
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

      <Text variant="h3" color={styles.title.color} style={styles.title}>{title}</Text>
    </View>
  );
}