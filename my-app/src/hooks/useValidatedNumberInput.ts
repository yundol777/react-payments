import { useState } from 'react';

interface ValidationResult {
  error: boolean;
  message: string;
}

interface Props {
  value: string;
  updateValue: (value: string) => void;
  validate: (value: string) => ValidationResult;
  invalidMessage: string;
}

function useValidatedNumberInput({
  value,
  updateValue,
  validate,
  invalidMessage,
}: Props) {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleOnChange(inputValue: string) {
    if (!/^[0-9]*$/.test(inputValue)) {
      setErrorMessage(invalidMessage);
      return;
    }

    updateValue(inputValue);
    setErrorMessage('');
  }

  function handleOnBlur() {
    const validation = validate(value);

    setError(validation.error);
    setErrorMessage(validation.message);
  }

  return { error, errorMessage, handleOnChange, handleOnBlur };
}

export default useValidatedNumberInput;
