export const FORM_STEP = {
  CARD_NUMBER: 0,
  CARD_ISSUER: 1,
  EXPIRATION_DATE: 2,
  CVC: 3,
  PASSWORD: 4,
  SUBMIT: 5,
} as const;

export type FormStep = (typeof FORM_STEP)[keyof typeof FORM_STEP];
