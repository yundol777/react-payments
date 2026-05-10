import { useState } from 'react';
import PasswordInput from './PasswordInput/PasswordInput';
import { getCardPasswordError } from '../../../utils/validation';
import CommonSection from '../../../common/CommonSection/CommonSection';

interface Props {
  value: string;
  updateValue: (value: string) => void;
}

function CardPasswordSection({ value, updateValue }: Props) {
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

  return (
    <CommonSection
      title="비밀번호를 입력해 주세요"
      description="앞의 2자리를 입력해주세요"
      label="비밀번호 앞 2자리"
      errorMessage={errorMessage}
    >
      <PasswordInput
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        isError={error}
        maxLength={2}
        autoFocus
      />
    </CommonSection>
  );
}

export default CardPasswordSection;
