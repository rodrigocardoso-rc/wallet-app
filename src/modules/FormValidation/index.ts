import * as yup from 'yup';
import { Validators } from '../../utils';
import { yupResolver } from '@hookform/resolvers/yup';

const formCardValidationSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .test("valid-card", "Número de cartão inválido", (value) => Validators.cardNumber(value || ""))
    .required("Campo obrigatório"),
  ownerName: yup
    .string()
    .test("valid-name", "Nome inválido", (value) => Validators.ownerName(value || ""))
    .required("Campo obrigatório"),
  expirationData: yup
    .string()
    .test("valid-date", "Data de vencimento inválida", (value) => Validators.expirationDate(value || ""))
    .required("Campo obrigatório"),
  securityCode: yup
    .string()
    .test("valid-cvv", "Código inválido", (value) => Validators.securityCode(value || ""))
    .required("Campo obrigatório"),
});

export { formCardValidationSchema };
export { yupResolver as resolver }
