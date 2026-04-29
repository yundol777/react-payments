import { useState } from 'react';
import { isInputValidate, isValidRange } from '../../utils/Validation';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';

interface Props {
  value: {
    month: string,
    year: string
  };
  setValue: (value: { month: string, year: string }) => void;
}

export default function ExpirationDateSection({ value, setValue }: Props) {
  const [errors, setErrors] = useState({month: false, year: false});
  const [errorMessage, setErrorMessage] = useState('');


  function handleOnChange(inputValue: string, type: "month" | "year") {
    if(!isInputValidate(inputValue, 2)) return;

    const newValue = { ...value, [type]: inputValue };
    setValue(newValue);
  }

  function handleOnBlur(inputValue: string, type: "month" | "year") {
    const newError = { month: false, year: false };
    const monthNum = Number(inputValue);

    if(!isValidRange(inputValue, 2)) {
      newError[type] = true;
    }

    if(type === 'month') {
      // type이 month인 경우
      if(monthNum < 1 || monthNum > 12) {
        newError.month = true;
        setErrorMessage('월은 1월부터 12월 사이여야 합니다!');
      } else {
        newError.month = false;
        setErrorMessage('');
      }
    } 

    setErrors(newError);
  }

  return (
    <CommonSection
      title="카드 유효기간을 입력해 주세요"
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
      errorMessage={errorMessage}
    >
        <NumberInput
          value={value.month}
          onChange={(v) => handleOnChange(v, "month")}
          onBlur={(v)=>handleOnBlur(v, "month")}
          placeholder="MM"
          isError={errors.month}
        />
         <NumberInput
          value={value.year}
          onChange={(v) => handleOnChange(v, "year")}
          onBlur={(v)=>handleOnBlur(v, "year")}
          placeholder="YY"
          isError={errors.year}
        />
    </CommonSection>
  );
}
