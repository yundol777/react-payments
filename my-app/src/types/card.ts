export interface CardFormTypes {
  cardNumber: string;
  cardIssuer: string;
  cardExpirationDate: {
    month: string;
    year: string;
  };
  cardCvc: string;
  cardPassword: string;
}
