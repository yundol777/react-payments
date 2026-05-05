export function isInputValidate(value: string, maxLength: number): boolean {
  return /^[0-9]*$/.test(value) && value.length <= maxLength;
}

export function isExactLength(value: string, length: number): boolean {
  return value.length === length;
}

export function getCardNumberErrorMessage(cardNumber: string): string {
  if (!isExactLength(cardNumber, 4)) {
    return '카드번호는 4자리씩 입력해주세요.';
  }

  return '';
}

export function getCvcErrorMessage(cvc: string): string {
  if (!isExactLength(cvc, 3)) {
    return 'CVC는 3자리로 입력해주세요.';
  }

  return '';
}

export function getMonthErrorMessage(month: string): string {
  const monthNum = Number(month);

  if (!isExactLength(month, 2)) {
    return '월은 2자리로 입력해주세요.';
  }

  if (monthNum < 1 || monthNum > 12) {
    return '월은 01부터 12 사이여야 합니다.';
  }

  return '';
}

export function getYearErrorMessage(year: string): string {
  if (!isExactLength(year, 2)) {
    return '연도는 2자리로 입력해주세요.';
  }

  return '';
}
