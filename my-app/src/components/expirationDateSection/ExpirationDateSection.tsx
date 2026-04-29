import isInputValidate from '../../utils/Validation';
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
  function handleOnChange(inputValue: string, type: "month" | "year") {
    if(!isInputValidate(inputValue, 2)) return;

    const newValue = { ...value, [type]: inputValue };
    setValue(newValue);
  }

  return (
    <CommonSection
      title="카드 유효기간을 입력해 주세요"
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
      errorMessage="숫자만 입력 가능합니다."
    >
        <NumberInput
          value={value.month}
          onChange={(v) => handleOnChange(v, "month")}
          placeholder="MM"
        />
         <NumberInput
          value={value.year}
          onChange={(v) => handleOnChange(v, "year")}
          placeholder="YY"
        />
    </CommonSection>
  );
}
