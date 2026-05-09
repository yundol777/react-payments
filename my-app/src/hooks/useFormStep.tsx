import { useState } from 'react';
import {
  getCardCvcError,
  getCardIssuerError,
  getCardMonthError,
  getCardNumberError,
  getCardPasswordError,
  getCardYearError,
} from '../utils/validation';

interface Props {
  cardNumber: string;
  cardExpirationDate: { month: string; year: string };
  cardCvc: string;
  cardIssuer: string;
  cardPassword: string;
}

function useFormStep({
  cardNumber,
  cardExpirationDate,
  cardCvc,
  cardIssuer,
  cardPassword,
}: Props) {
  const [step, setStep] = useState(0);

  if (!getCardNumberError(cardNumber).error && step === 0) {
    setStep(1);
  }

  if (!getCardIssuerError(cardIssuer).error && step === 1) {
    setStep(2);
  }

  if (
    !getCardMonthError(cardExpirationDate.month).error &&
    !getCardYearError(cardExpirationDate.year).error &&
    step === 2
  ) {
    setStep(3);
  }

  if (!getCardCvcError(cardCvc).error && step === 3) {
    setStep(4);
  }

  if (!getCardPasswordError(cardPassword).error && step === 4) {
    setStep(5);
  }

  return step;
}

export default useFormStep;
