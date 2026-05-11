import { useState } from 'react';
import {
  formatCardNumberByPattern,
  getCardNumberPattern,
} from '../utils/cardBrand';
import useFormattedInputCursor from './useFormattedInputCursor';
import { getCardNumberError } from '../utils/validation';

interface Props {
  value: string;
  updateValue: (value: string) => void;
}

function useCardNumber({ value, updateValue }: Props) {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');

  const pattern = getCardNumberPattern(value);
  const maxLength = pattern.reduce((sum, length) => sum + length, 0);
  const formattedMaxLength = maxLength + pattern.length - 1;
  const formmatedValue = formatCardNumberByPattern(value, pattern)
    .filter(Boolean)
    .join(' ');
  const { inputRef, rememberCursorPosition } =
    useFormattedInputCursor(formmatedValue);

  function handleOnChange(inputValue: string, cursorPosition: number | null) {
    const onlyNumber = inputValue.replace(/\s/g, '');

    if (!/^[0-9]*$/.test(onlyNumber)) {
      setErrorMessage('카드번호는 숫자만 입력 가능합니다.');
      return;
    }

    rememberCursorPosition(inputValue, cursorPosition);
    updateValue(onlyNumber);
    setErrorMessage('');
  }

  function handleOnBlur() {
    const validation = getCardNumberError(value);

    setError(validation.error);
    setErrorMessage(validation.message);
  }

  return {
    error,
    errorMessage,
    handleOnChange,
    handleOnBlur,
    inputRef,
    formmatedValue,
    formattedMaxLength,
  };
}

export default useCardNumber;
