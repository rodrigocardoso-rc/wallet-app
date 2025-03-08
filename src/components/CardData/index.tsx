import { View } from "react-native";
import { ICard } from "../../model/card";
import styles from "./styles";
import Text from "../Text";
import { expirationDateApplyMask, cardNumbersHideDataApplyMask } from "../../modules/mask";

interface ICardDataProps {
  card: ICard,
  type: 'green' | 'black'
}

export default function CardData({ card, type }: ICardDataProps) {
  const { name, number, expirationDate } = card

  const title = type === 'green'
    ? 'Green Card'
    : 'Black Card'

  return (
    <View style={[styles.container, styles[type]]}>
      <Text variant={"h5"} color={styles[type].color}>{title}</Text>

      <View style={styles.containerText}>
        <Text
          variant={"paragraph"}
          color={styles[type].color}>
          {name}
        </Text>

        <Text
          variant={"paragraph"}
          color={styles[type].color}>
          {cardNumbersHideDataApplyMask(number)}
        </Text>

        <Text
          variant={"paragraph"}
          color={styles[type].color}>
          Validade: {expirationDateApplyMask(expirationDate)}
        </Text>
      </View>
    </View>
  )
}