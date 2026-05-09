import { useState } from 'react';
import { isInputValidate } from '../../utils/validation';
import CommonSection from '../../common/CommonSection/CommonSection';
import NumberInput from '../../common/NumberInput/NumberInput';
import { getCardNumberError } from '../../utils/validation';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export default function CardNumberSection({ value, setValue }: Props) {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleOnChange(inputValue: string) {
    if (!isInputValidate(inputValue, 4)) {
      setErrorMessage('카드번호는 숫자만 입력 가능합니다.');
      return;
    }

    setValue(inputValue);
    setErrorMessage('');
  }

  function handleOnBlur() {
    const validation = getCardNumberError(value);

    setError(validation.error);
    setErrorMessage(validation.message);
  }

  return (
    <CommonSection
      title="결제할 카드 번호를 입력해주세요"
      description="본인 명의의 카드만 결제 가능합니다"
      label="카드 번호"
      errorMessage={errorMessage}
    >
      <NumberInput
        value={value}
        onChange={(v) => handleOnChange(v)}
        onBlur={handleOnBlur}
        placeholder=""
        isError={error}
      />
    </CommonSection>
  );
}
