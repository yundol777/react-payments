import { useState } from 'react';
import CommonSection from '../../common/CommonSection/CommonSection';
import {
  getPasswordErrorMessage,
  isInputValidate,
} from '../../utils/validation';
import PasswordInput from './PasswordInput/PasswordInput';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

function CardPasswordSection({ value, setValue }: Props) {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleOnChange(inputValue: string) {
    if (!isInputValidate(inputValue, 2)) {
      setErrorMessage('비밀번호는 숫자만 입력 가능합니다.');
      return;
    }

    setValue(inputValue);
    setErrorMessage('');
  }

  function handleOnBlur(inputValue: string) {
    const inputErrorMessage = getPasswordErrorMessage(inputValue);

    setError(inputErrorMessage !== '');
    setErrorMessage(inputErrorMessage);
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
      />
    </CommonSection>
  );
}

export default CardPasswordSection;
