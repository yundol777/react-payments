import { useState } from 'react';
import { getCvcErrorMessage, isInputValidate } from '../../utils/validation';
import CommonSection from '../../common/CommonSection/CommonSection';
import NumberInput from '../../common/NumberInput/NumberInput';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export default function CvcSection({ value, setValue }: Props) {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleOnChange(inputValue: string) {
    if (!isInputValidate(inputValue, 3)) {
      setErrorMessage('CVC는 숫자만 입력 가능합니다.');
      return;
    }

    setValue(inputValue);
    setErrorMessage('');
  }

  function handleOnBlur(inputValue: string) {
    const inputErrorMessage = getCvcErrorMessage(inputValue);

    setError(inputErrorMessage !== '');
    setErrorMessage(inputErrorMessage);
  }

  return (
    <CommonSection
      title="CVC 번호를 입력해주세요"
      description=""
      label="CVC"
      errorMessage={errorMessage}
    >
      <NumberInput
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder="123"
        isError={error}
      />
    </CommonSection>
  );
}
