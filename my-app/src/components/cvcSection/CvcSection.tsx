import { useState } from 'react';
import { isInputValidate, isValidRange } from '../../utils/Validation';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export default function CvcSection({ value, setValue }: Props) {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  function handleOnChange(inputValue: string) {
    if(!isInputValidate(inputValue, 3)) return;

    setValue(inputValue);
  }

  function handleOnBlur(inputValue: string) {
    if(!isValidRange(inputValue, 3)) { 
      setError(true);
      setErrorMessage('필요한 자릿수를 모두 입력해주세요!');
    } else {
      setError(false);
      setErrorMessage('');
    }
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
