import type { CardFormTypes } from '../types/card';
import { CARD_BRAND_NAMES, getCardNumberInfo } from './cardBrand';

interface ErrorResponse {
  error: boolean;
  message: string;
}

export function isInputValidate(value: string, maxLength: number): boolean {
  return /^[0-9]*$/.test(value) && value.length <= maxLength;
}

export function isExactLength(value: string, length: number): boolean {
  return value.length === length;
}

export function getCardNumberError(cardNumber: string): ErrorResponse {
  const { brand, maxLength } = getCardNumberInfo(cardNumber);

  if (!brand) {
    return {
      error: true,
      message: '유효한 카드 정보가 없습니다.',
    };
  }

  if (!isExactLength(cardNumber, maxLength)) {
    return {
      error: true,
      message: `${CARD_BRAND_NAMES[brand]}의 번호는 ${maxLength}자리를 입력해주세요.`,
    };
  }

  return {
    error: false,
    message: '',
  };
}

export function getCardIssuerError(cardIssuer: string): ErrorResponse {
  if (isExactLength(cardIssuer, 0)) {
    return {
      error: true,
      message: '카드사를 선택해주세요.',
    };
  }

  return {
    error: false,
    message: '',
  };
}

export function getCardMonthError(cardMonth: string): ErrorResponse {
  const monthNum = Number(cardMonth);

  if (!isExactLength(cardMonth, 2)) {
    return {
      error: true,
      message: '월은 2자리로 입력해주세요.',
    };
  }

  if (monthNum < 1 || monthNum > 12) {
    return {
      error: true,
      message: '월은 01부터 12 사이여야 합니다.',
    };
  }

  return {
    error: false,
    message: '',
  };
}

export function getCardYearError(cardYear: string): ErrorResponse {
  if (!isExactLength(cardYear, 2)) {
    return {
      error: true,
      message: '연도는 2자리로 입력해주세요.',
    };
  }

  return {
    error: false,
    message: '',
  };
}

export function getCardCvcError(cardCvc: string): ErrorResponse {
  if (!isExactLength(cardCvc, 3)) {
    return {
      error: true,
      message: 'CVC는 3자리로 입력해주세요.',
    };
  }

  return {
    error: false,
    message: '',
  };
}

export function getCardPasswordError(cardPassword: string): ErrorResponse {
  if (!isExactLength(cardPassword, 2)) {
    return {
      error: true,
      message: '비밀번호는 2자리로 입력해주세요.',
    };
  }

  return {
    error: false,
    message: '',
  };
}

export function hasCardFormError(cardForm: CardFormTypes): boolean {
  const validations = [
    getCardNumberError(cardForm.cardNumber),
    getCardIssuerError(cardForm.cardIssuer),
    getCardMonthError(cardForm.cardExpirationDate.month),
    getCardYearError(cardForm.cardExpirationDate.year),
    getCardCvcError(cardForm.cardCvc),
    getCardPasswordError(cardForm.cardPassword),
  ];

  return validations.some((validation) => validation.error);
}
