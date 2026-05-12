import AMEX from '../assets/AMEX.png';
import Diners from '../assets/Diners.png';
import MasterCard from '../assets/Mastercard.png';
import UnionPay from '../assets/UnionPay.png';
import Visa from '../assets/Visa.png';

export const CARD_BRANDS = [
  'Visa',
  'MasterCard',
  'Diners',
  'AMEX',
  'UnionPay',
] as const;

export type CardBrand = (typeof CARD_BRANDS)[number];

export const DEFAULT_CARD_NUMBER_PATTERN = [4, 4, 4, 4];

export const CARD_NUMBER_PATTERNS: Record<CardBrand, number[]> = {
  Visa: [4, 4, 4, 4],
  MasterCard: [4, 4, 4, 4],
  Diners: [4, 6, 4],
  AMEX: [4, 6, 5],
  UnionPay: [4, 4, 4, 4],
};

export const CARD_BRAND_NAMES: Record<CardBrand, string> = {
  Visa: '비자 카드',
  MasterCard: '마스터 카드',
  Diners: '다이너스 카드',
  AMEX: '아멕스 카드',
  UnionPay: '유니온페이 카드',
};

export const CARD_BRAND_IMAGES: Record<CardBrand, string> = {
  Visa,
  MasterCard,
  Diners,
  AMEX,
  UnionPay,
};
