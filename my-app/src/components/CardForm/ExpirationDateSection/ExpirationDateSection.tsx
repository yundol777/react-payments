import { useRef } from 'react';
import CommonSection from '../../../common/CommonSection/CommonSection';
import NumberInput from '../../../common/NumberInput/NumberInput';
import useExpirationDateValidation from '../../../hooks/useExpirationDateValidation';
import useInitialFocus from '../../../hooks/useInitialFocus';

interface Props {
  value: {
    month: string;
    year: string;
  };
  updateValue: (value: { month: string; year: string }) => void;
}

export default function ExpirationDateSection({ value, updateValue }: Props) {
  const monthInputRef = useInitialFocus<HTMLInputElement>();
  const yearInputRef = useRef<HTMLInputElement>(null);

  const { errors, errorMessage, handleOnChange, handleOnBlur } =
    useExpirationDateValidation({ value, updateValue });

  function handleMonthChange(inputValue: string) {
    handleOnChange(inputValue, 'month');

    if (/^[0-9]*$/.test(inputValue) && inputValue.length === 2) {
      requestAnimationFrame(() => {
        yearInputRef.current?.focus();
      });
    }
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
        onChange={handleMonthChange}
        onBlur={() => handleOnBlur('month')}
        placeholder="MM"
        isError={errors.month}
        inputRef={monthInputRef}
        maxLength={2}
      />
      <NumberInput
        value={value.year}
        onChange={(v) => handleOnChange(v, 'year')}
        onBlur={() => handleOnBlur('year')}
        placeholder="YY"
        isError={errors.year}
        inputRef={yearInputRef}
        maxLength={2}
      />
    </CommonSection>
  );
}
