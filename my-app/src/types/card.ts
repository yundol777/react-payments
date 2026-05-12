import type { SelectedCardIssuer } from '../constants/cardIssuer';

export interface CardFormTypes {
  cardNumber: string;
  cardIssuer: SelectedCardIssuer;
  cardExpirationDate: {
    month: string;
    year: string;
  };
  cardCvc: string;
  cardPassword: string;
}
