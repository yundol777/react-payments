import { useState } from 'react';
import { getCardPasswordError } from '../utils/validation';

interface Props {
  value: string;
  updateValue: (value: string) => void;
}

function usePassword({ value, updateValue }: Props) {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleOnChange(inputValue: string) {
    if (!/^[0-9]*$/.test(inputValue)) {
      setErrorMessage('비밀번호는 숫자만 입력 가능합니다.');
      return;
    }

    updateValue(inputValue);
    setErrorMessage('');
  }

  function handleOnBlur() {
    const validation = getCardPasswordError(value);

    setError(validation.error);
    setErrorMessage(validation.message);
  }

  return { error, errorMessage, handleOnChange, handleOnBlur };
}

export default usePassword;
