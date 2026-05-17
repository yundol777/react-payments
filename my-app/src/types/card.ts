import type { SelectedCardIssuerCode } from '../constants/cardIssuer';

export interface CardFormTypes {
  cardNumber: string;
  cardIssuer: SelectedCardIssuerCode;
  cardExpirationDate: {
    month: string;
    year: string;
  };
  cardCvc: string;
  cardPassword: string;
}
