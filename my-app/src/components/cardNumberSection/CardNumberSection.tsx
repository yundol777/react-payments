import { useState } from 'react';
import isInputValidate from '../../utils/Validation';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';

interface Props {
  value: string[];
  setValue: (value: string[]) => void;
}

export default function CardNumberSection({ value, setValue }: Props) {
  const [error, setError] = useState<boolean[]>([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState("");
  function handleOnChange(inputValue: string, index: number) {
    if(!isInputValidate(inputValue, 4)) return;

    const newValue = [...value];
    newValue[index] = inputValue;
    setValue(newValue);
  }

  function handleOnBlur(index: number) {
    // 에러체크
    // 조건 걸고 조건마다 setErrorMessage('원하는 텍스트');
    // newError = [...error]
    // newError[index] = value.length < 4 && value.length > 0; // checkError()
    // setError(newError);
  }

  return (
    <CommonSection
      title="결제할 카드 번호를 입력해주세요"
      description="본인 명의의 카드만 결제 가능합니다"
      label="카드 번호"
      errorMessage="숫자만 입력 가능합니다."
    >
      {value.map((num, index) => (
        <NumberInput
          key={index}
          value={num}
          onChange={(v) => handleOnChange(v, index)}
          placeholder="1234"
          // error={error[index]}
        />
      ))}
    </CommonSection>
  );
}
