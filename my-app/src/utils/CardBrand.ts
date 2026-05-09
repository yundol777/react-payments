export type CardBrand =
  | 'Visa'
  | 'MasterCard'
  | 'Diners'
  | 'AMEX'
  | 'UnionPay'
  | '';

export const DEFAULT_CARD_NUMBER_PATTERN = [4, 4, 4, 4];

export const CARD_NUMBER_PATTERNS: Record<Exclude<CardBrand, ''>, number[]> = {
  Visa: [4, 4, 4, 4],
  MasterCard: [4, 4, 4, 4],
  Diners: [4, 6, 4],
  AMEX: [4, 6, 5],
  UnionPay: [4, 4, 4, 4],
};

export function getCardBrand(cardNumber: string): CardBrand {
  const firstTwoDigits = Number(cardNumber.slice(0, 2));
  const firstThreeDigits = Number(cardNumber.slice(0, 3));
  const firstFourDigits = Number(cardNumber.slice(0, 4));
  const firstSixDigits = Number(cardNumber.slice(0, 6));

  if (cardNumber.startsWith('4')) {
    return 'Visa';
  }

  if (firstTwoDigits >= 51 && firstTwoDigits <= 55) {
    return 'MasterCard';
  }

  if (cardNumber.startsWith('36')) {
    return 'Diners';
  }

  if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
    return 'AMEX';
  }

  if (
    (cardNumber.length >= 6 &&
      firstSixDigits >= 622126 &&
      firstSixDigits <= 622925) ||
    (cardNumber.length >= 3 &&
      firstThreeDigits >= 624 &&
      firstThreeDigits <= 626) ||
    (cardNumber.length >= 4 &&
      firstFourDigits >= 6282 &&
      firstFourDigits <= 6288)
  ) {
    return 'UnionPay';
  }

  return '';
}

export function getCardNumberPattern(cardNumber: string): number[] {
  const cardBrand = getCardBrand(cardNumber);

  if (!cardBrand) {
    return DEFAULT_CARD_NUMBER_PATTERN;
  }

  return CARD_NUMBER_PATTERNS[cardBrand];
}

export function formatCardNumberByPattern(
  cardNumber: string,
  pattern: number[],
) {
  let startIndex = 0;

  return pattern.map((length) => {
    const slicedValue = cardNumber.slice(startIndex, startIndex + length);
    startIndex += length;
    return slicedValue;
  });
}
