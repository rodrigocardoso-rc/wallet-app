import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import { Camera } from "../../assets/icons";
import { ICard } from "../../model/card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BackgroundScreen from "../../components/BackgroundScreen";
import TitleAnimated from "../../components/TitleAnimated";
import {
  validateCardNumber, validateExpirationData,
  validateOwnerName, validateSecurityCode
} from "../../modules/validators";
import { cardNumberApplyMask, expirationDateApplyMask } from "../../modules/mask";
import { generateUUid } from "../../modules/uuid";
import { createCards } from "../../modules/network/endPoints";
import { RootStackNavigationProp } from "../../navigator/appNavigation";
import { SCREENS_NAME } from "../screensName";

import styles from "./styles";

const INITIAL_FORM = {
  cardNumber: '',
  ownerName: '',
  expirationData: '',
  securityCode: ''
}

export default function NewCardScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const [form, setForm] = useState(INITIAL_FORM)
  const [isLoading, setIsLoading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  useEffect(checkCanCreate, [form])

  function onPressCameraIcon() {
    // TODO: Implements Camera feature
  }

  function handleInputText(name: string, newValue: string) {
    setForm((oldValue) => { return { ...oldValue, [name]: newValue } })
  }

  function checkCanCreate() {
    const { cardNumber, ownerName, expirationData, securityCode } = form;

    const isInvalid = !(
      validateCardNumber(cardNumber) &&
      validateOwnerName(ownerName) &&
      validateExpirationData(expirationData) &&
      validateSecurityCode(securityCode)
    )

    setButtonDisabled(isInvalid)
  }

  function onPressNext() {
    createCard()
  }

  function createCard() {
    setIsLoading(true)

    const cardDto: ICard = {
      id: generateUUid(),
      number: form.cardNumber,
      name: form.ownerName,
      expirationDate: form.expirationData,
      cvv: form.securityCode,
    }

    createCards(cardDto)
      .then((res) => { goToCardSuccessful(res) })
      .catch((err) => { console.log({ err }) })
      .finally(() => { setIsLoading(false) })
  }

  function goToCardSuccessful(card: ICard) {
    navigation.reset({
      index: 0,
      routes: [
        { name: SCREENS_NAME.home },
        { name: SCREENS_NAME.cardSuccessful, params: { card } }]
    })
  }

  return (
    <BackgroundScreen>
      <StatusBar hidden />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyBoardContainer}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled">
          <TitleAnimated fromBottom variant="h1" style={styles.title}>
            Wallet Test
          </TitleAnimated>

          <Input
            label={'Numero do cartão'}
            value={cardNumberApplyMask(form.cardNumber)}
            maxLength={19}
            inputMode={"numeric"}
            keyboardType={"numeric"}
            icon={{
              Component: <Camera />,
              onPress: onPressCameraIcon,
            }}
            onChangeText={(newValue) => handleInputText('cardNumber', newValue.replace(/\D/g, ""))} />

          <Input
            label={'Nome do titular do cartão'}
            value={form.ownerName}
            keyboardType={"default"}
            autoCapitalize={"words"}
            autoCorrect={false}
            onChangeText={(newValue) => handleInputText('ownerName', newValue)} />

          <View style={styles.mediumInputsContainer}>
            <Input
              label={'Vencimento'}
              value={expirationDateApplyMask(form.expirationData)}
              placeholder={'00/00'}
              keyboardType={"number-pad"}
              maxLength={5}
              size={"medium"}
              onChangeText={(newValue) => handleInputText('expirationData', newValue)} />

            <Input
              label={'Código de segurança'}
              value={form.securityCode}
              placeholder={'***'}
              keyboardType={"number-pad"}
              maxLength={3}
              size={"medium"}
              onChangeText={(newValue) => handleInputText('securityCode', newValue)} />
          </View>

          <Button
            isLoading={isLoading}
            variant={buttonDisabled ? 'disable' : 'default'}
            text={"Avançar"}
            onPress={onPressNext} />
        </ScrollView>
      </KeyboardAvoidingView>
    </BackgroundScreen>
  )
}

