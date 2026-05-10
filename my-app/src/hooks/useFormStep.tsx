import { useState } from 'react';
import {
  getCardCvcError,
  getCardIssuerError,
  getCardMonthError,
  getCardNumberError,
  getCardPasswordError,
  getCardYearError,
} from '../utils/validation';
import type { CardFormTypes } from '../types/card';

function useFormStep(cardForm: CardFormTypes) {
  const [step, setStep] = useState(0);

  if (!getCardNumberError(cardForm.cardNumber).error && step === 0) {
    setStep(1);
  }

  if (!getCardIssuerError(cardForm.cardIssuer).error && step === 1) {
    setStep(2);
  }

  if (
    !getCardMonthError(cardForm.cardExpirationDate.month).error &&
    !getCardYearError(cardForm.cardExpirationDate.year).error &&
    step === 2
  ) {
    setStep(3);
  }

  if (!getCardCvcError(cardForm.cardCvc).error && step === 3) {
    setStep(4);
  }

  if (!getCardPasswordError(cardForm.cardPassword).error && step === 4) {
    setStep(5);
  }

  return step;
}

export default useFormStep;
