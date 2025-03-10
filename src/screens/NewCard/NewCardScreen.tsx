import { useContext, useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

import {
  Input, Button,
  Background, TitleAnimated
} from "../../components";
import { Camera } from "../../assets/Icons";
import { ICard } from "../../model";
import { Uuid } from "../../modules";
import { Mask } from '../../utils';
import { Validators } from '../../utils'
import { RootStackNavigationProp } from "../../navigators/AppNavigator";
import { SCREENS_NAME } from "../ScreensName";
import { CardsContext } from "../../contexts/CardsContext";
import { FlashMessage } from "../../modules";
import { ICardListTyped } from "../../@types";

import styles from "./styles";

type IFormData = Omit<ICardListTyped, 'id' | 'type'>;

const INITIAL_VALUES = {
  cardNumber: "",
  ownerName: "",
  expirationDate: "",
  securityCode: "",
}

const validationSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .test("valid-card", "Número de cartão inválido", (value) => Validators.cardNumber(value || ""))
    .required("Campo obrigatório"),
  ownerName: yup
    .string()
    .test("valid-name", "Nome inválido", (value) => Validators.ownerName(value || ""))
    .required("Campo obrigatório"),
  expirationDate: yup
    .string()
    .test("valid-date", "Data de vencimento inválida", (value) => Validators.expirationDate(value || ""))
    .required("Campo obrigatório"),
  securityCode: yup
    .string()
    .test("valid-cvv", "Código inválido", (value) => Validators.securityCode(value || ""))
    .required("Campo obrigatório"),
})

export default function NewCardScreen() {
  const { addCard } = useContext(CardsContext);
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

  async function createCard(form: IFormData) {
    try {
      setIsLoading(true);

      const cardDto: ICard = {
        id: Uuid.generateUUid(),
        number: form.cardNumber,
        name: form.ownerName,
        expirationDate: form.expirationDate,
        cvv: form.securityCode,
      };

      const res = await addCard(cardDto);

      FlashMessage.show({
        message: 'Cartão cadastrado com sucesso',
        type: 'success'
      });

      goToCardSuccessful(res);
    } catch (error) {
      FlashMessage.show({
        message: 'Ocorreu um problema ao criar o cartão. Tente novamente mais tarde',
        type: 'danger'
      });
    } finally {
      setIsLoading(false);
    }
  }

  function goToCardSuccessful(card: ICard) {
    const cardTyped: ICardListTyped = {
      ...card,
      type: 'black',
      cardNumber: card.number,
      securityCode: card.cvv,
      ownerName: card.name
    };

    navigation.reset({
      index: 0,
      routes: [
        { name: SCREENS_NAME.home },
        { name: SCREENS_NAME.cardSuccessful, params: { card: cardTyped } },
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
      <StatusBar hidden />
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
                value={Mask.applyMaskCardNumber(value)}
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
                  value={Mask.applyMaskExpirationDate(value)}
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
