import { useState } from 'react';
import {
  getCardNumberErrorMessage,
  getCvcErrorMessage,
  getMonthErrorMessage,
  getPasswordErrorMessage,
  getYearErrorMessage,
} from '../utils/validation';

interface Props {
  cardNumber: string[];
  expirationDate: { month: string; year: string };
  cvc: string;
  cardIssuer: string;
  cardPassword: string;
}

function useFormStep({
  cardNumber,
  expirationDate,
  cvc,
  cardIssuer,
  cardPassword,
}: Props) {
  const [step, setStep] = useState(0);

  if (
    cardNumber.every((number) => getCardNumberErrorMessage(number) === '') &&
    step === 0
  ) {
    setStep(1);
  }

  if (cardIssuer !== '' && step === 1) {
    setStep(2);
  }

  if (
    getMonthErrorMessage(expirationDate.month) === '' &&
    getYearErrorMessage(expirationDate.year) === '' &&
    step === 2
  ) {
    setStep(3);
  }

  if (getCvcErrorMessage(cvc) === '' && step === 3) {
    setStep(4);
  }

  if (getPasswordErrorMessage(cardPassword) === '' && step === 4) {
    setStep(5);
  }

  return step;
}

export default useFormStep;
