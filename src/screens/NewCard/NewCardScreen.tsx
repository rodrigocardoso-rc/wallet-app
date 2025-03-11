import { useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

import { ICardTyped, IFormCardData } from "../../@types/CardsTyped";
import { Camera } from "../../assets/Icons";
import { SCREENS_NAME } from "../ScreensName";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Background from "../../components/Background/Background";
import TitleAnimated from "../../components/TitleAnimated/TitleAnimated";
import * as CardMasks from '../../utils/Mask/CardMasks/CardMasks';
import * as CardValidator from '../../utils/Validators/CardValidator/CardValidator'
import { RootStackNavigationProp } from "../../navigators/AppNavigator";
import { showFlashMessage } from "../../modules/FlashMessage/FlashMessage";
import useCardList from "../../hooks/UseCardList/useCardList";

import styles from "./styles";

const INITIAL_VALUES = {
  cardNumber: "",
  ownerName: "",
  expirationDate: "",
  securityCode: "",
}

const validationSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .test("valid-card", "Número de cartão inválido", (value) => CardValidator.cardNumber(value || ""))
    .required("Campo obrigatório"),
  ownerName: yup
    .string()
    .test("valid-name", "Nome inválido", (value) => CardValidator.ownerName(value || ""))
    .required("Campo obrigatório"),
  expirationDate: yup
    .string()
    .test("valid-date", "Data de vencimento inválida", (value) => CardValidator.expirationDate(value || ""))
    .required("Campo obrigatório"),
  securityCode: yup
    .string()
    .test("valid-cvv", "Código inválido", (value) => CardValidator.securityCode(value || ""))
    .required("Campo obrigatório"),
})

export default function NewCardScreen() {
  const { addCard } = useCardList();
  const navigation = useNavigation<RootStackNavigationProp>();
  const inputsRef = useRef<any>({});

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: INITIAL_VALUES
  });

  async function createCard(form: IFormCardData) {
    try {
      setIsLoading(true);

      const res = await addCard(form);

      showFlashMessage({
        message: 'Cartão cadastrado com sucesso',
        type: 'success'
      });

      goToCardSuccessful(res);
    } catch (error) {
      showFlashMessage({
        message: 'Ocorreu um problema ao criar o cartão. Tente novamente mais tarde',
        type: 'danger'
      });
    } finally {
      setIsLoading(false);
    }
  }

  function goToCardSuccessful(card: ICardTyped) {
    navigation.reset({
      index: 0,
      routes: [
        { name: SCREENS_NAME.home },
        { name: SCREENS_NAME.cardSuccessful, params: { card } },
      ],
    });
  }

  function onSubmitEditing(next: string) {
    inputsRef.current[next]?.focus();
  }

  function onPressCameraIcon() {
    // TODO: Implements Camera feature
  }

  return (
    <Background>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyBoardContainer}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled">
          <TitleAnimated
            fromBottom
            variant="h1"
            style={styles.title}>
            Wallet Test
          </TitleAnimated>

          <Controller
            control={control}
            name="cardNumber"
            render={({ field: { onChange, value } }) => (
              <Input
                ref={(ref) => (inputsRef.current.cardNumber = ref)}
                autoFocus
                label="Número do cartão"
                value={CardMasks.applyMaskCardNumber(value)}
                maxLength={19}
                keyboardType="numeric"
                icon={{
                  Component: <Camera />,
                  onPress: onPressCameraIcon
                }}
                onChangeText={(newValue) => onChange(newValue.replace(/\D/g, ""))}
                error={errors.cardNumber?.message}
                onSubmitEditing={() => onSubmitEditing("ownerName")}
              />
            )}
          />

          <Controller
            control={control}
            name="ownerName"
            render={({ field: { onChange, value } }) => (
              <Input
                ref={(ref) => (inputsRef.current.ownerName = ref)}
                label="Nome do titular do cartão"
                value={value}
                autoCapitalize="words"
                autoCorrect={false}
                autoComplete="off"
                error={errors.ownerName?.message}
                onChangeText={onChange}
                onSubmitEditing={() => onSubmitEditing("expirationData")}
              />
            )}
          />

          <View style={styles.mediumInputsContainer}>
            <Controller
              control={control}
              name="expirationDate"
              render={({ field: { onChange, value } }) => (
                <Input
                  ref={(ref) => (inputsRef.current.expirationData = ref)}
                  label="Vencimento"
                  value={CardMasks.applyMaskExpirationDate(value)}
                  placeholder="00/00"
                  keyboardType="number-pad"
                  maxLength={5}
                  size="medium"
                  onChangeText={onChange}
                  error={errors.expirationDate?.message}
                  onSubmitEditing={() => onSubmitEditing("securityCode")}
                />
              )}
            />

            <Controller
              control={control}
              name="securityCode"
              render={({ field: { onChange, value } }) => (
                <Input
                  ref={(ref) => (inputsRef.current.securityCode = ref)}
                  label="Código de segurança"
                  value={value}
                  placeholder="***"
                  keyboardType="number-pad"
                  maxLength={3}
                  size="medium"
                  onChangeText={onChange}
                  error={errors.securityCode?.message}
                  onSubmitEditing={handleSubmit(createCard)}
                />
              )}
            />
          </View>

          <Button
            isLoading={isLoading}
            variant={!isValid ? "disable" : "default"}
            disabled={!isValid}
            text="Avançar"
            onPress={handleSubmit(createCard)} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
}
