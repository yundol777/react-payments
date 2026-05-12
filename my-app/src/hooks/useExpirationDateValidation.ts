import { useState } from 'react';
import { getCardMonthError, getCardYearError } from '../utils/validation';

interface Props {
  value: {
    month: string;
    year: string;
  };
  updateValue: (value: { month: string; year: string }) => void;
}

function useExpirationDateValidation({ value, updateValue }: Props) {
  const [errors, setErrors] = useState({ month: false, year: false });
  const [errorMessage, setErrorMessage] = useState('');

  function handleOnChange(inputValue: string, type: 'month' | 'year') {
    if (!/^[0-9]*$/.test(inputValue)) {
      setErrorMessage('유효기간은 숫자만 입력 가능합니다.');
      return;
    }

    updateValue({ ...value, [type]: inputValue });
    setErrorMessage('');
  }

  function handleOnBlur(type: 'month' | 'year') {
    const validation =
      type === 'month'
        ? getCardMonthError(value.month)
        : getCardYearError(value.year);

    const otherValidation =
      type === 'month'
        ? getCardYearError(value.year)
        : getCardMonthError(value.month);

    setErrors({
      ...errors,
      [type]: validation.error,
    });

    setErrorMessage(
      type === 'month'
        ? validation.message
        : validation.message || otherValidation.message,
    );
  }

  return {
    errors,
    errorMessage,
    handleOnChange,
    handleOnBlur,
  };
}

export default useExpirationDateValidation;
