import { useState } from 'react';
import { isExactLength, isInputValidate } from '../../utils/validation';
import CommonSection from '../../common/CommonSection/CommonSection';
import NumberInput from '../../common/NumberInput/NumberInput';
import { getCardNumberError } from '../../utils/validation';

interface Props {
  value: string[];
  setValue: (value: string[]) => void;
}

export default function CardNumberSection({ value, setValue }: Props) {
  const [errors, setErrors] = useState<boolean[]>([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  function handleOnChange(inputValue: string, index: number) {
    if (!isInputValidate(inputValue, 4)) {
      setErrorMessage('카드번호는 숫자만 입력 가능합니다.');
      return;
    }

    const newValue = [...value];
    newValue[index] = inputValue;
    setValue(newValue);
    setErrorMessage('');
  }

  function handleOnBlur(inputValue: string, index: number) {
    const newError = [...errors];
    const validation = getCardNumberError(value);
    const hasError = newError.some((error) => error);

    newError[index] = !isExactLength(inputValue, 4);

    if (validation.error) {
      setErrorMessage(validation.message);
    } else if (!hasError) {
      setErrorMessage('');
    }

    setErrors(newError);
  }
  return (
    <CommonSection
      title="결제할 카드 번호를 입력해주세요"
      description="본인 명의의 카드만 결제 가능합니다"
      label="카드 번호"
      errorMessage={errorMessage}
    >
      {value.map((num, index) => (
        <NumberInput
          key={index}
          value={num}
          onChange={(v) => handleOnChange(v, index)}
          onBlur={(v) => handleOnBlur(v, index)}
          placeholder="1234"
          isError={errors[index]}
        />
      ))}
    </CommonSection>
  );
}
