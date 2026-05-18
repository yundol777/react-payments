import type { CardResponse } from '../types/card';

export const cards: CardResponse[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    issuerCode: '31',
    number: '551112******9012',
    expirationDate: '12/28',
  },
];

export function maskCardNumber(cardNumber: string): string {
  return `${cardNumber.slice(0, 6)}******${cardNumber.slice(-4)}`;
}
