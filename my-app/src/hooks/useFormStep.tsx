import { useState } from 'react';
import { FORM_STEP, type FormStep } from '../constants/formStep';
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
  const [step, setStep] = useState<FormStep>(FORM_STEP.CARD_NUMBER);

  if (
    !getCardNumberError(cardForm.cardNumber).error &&
    step === FORM_STEP.CARD_NUMBER
  ) {
    setStep(FORM_STEP.CARD_ISSUER);
  }

  if (
    !getCardIssuerError(cardForm.cardIssuer).error &&
    step === FORM_STEP.CARD_ISSUER
  ) {
    setStep(FORM_STEP.EXPIRATION_DATE);
  }

  if (
    !getCardMonthError(cardForm.cardExpirationDate.month).error &&
    !getCardYearError(cardForm.cardExpirationDate.year).error &&
    step === FORM_STEP.EXPIRATION_DATE
  ) {
    setStep(FORM_STEP.CVC);
  }

  if (
    !getCardCvcError(cardForm.cardCvc).error &&
    step === FORM_STEP.CVC
  ) {
    setStep(FORM_STEP.PASSWORD);
  }

  if (
    !getCardPasswordError(cardForm.cardPassword).error &&
    step === FORM_STEP.PASSWORD
  ) {
    setStep(FORM_STEP.SUBMIT);
  }

  return step;
}

export default useFormStep;
