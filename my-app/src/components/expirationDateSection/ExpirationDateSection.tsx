import { useEffect, useRef, useState } from 'react';
import CommonSection from '../../common/CommonSection/CommonSection';
import NumberInput from '../../common/NumberInput/NumberInput';
import { getCardMonthError, getCardYearError } from '../../utils/validation';

interface Props {
  value: {
    month: string;
    year: string;
  };
  updateValue: (value: { month: string; year: string }) => void;
}

export default function ExpirationDateSection({ value, updateValue }: Props) {
  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState({ month: false, year: false });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const animationFrameId = requestAnimationFrame(() => {
      monthInputRef.current?.focus();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  function handleOnChange(inputValue: string, type: 'month' | 'year') {
    if (!/^[0-9]*$/.test(inputValue)) {
      setErrorMessage('유효기간은 숫자만 입력 가능합니다.');
      return;
    }

    const newValue = { ...value, [type]: inputValue };
    updateValue(newValue);
    setErrorMessage('');

    if (type === 'month' && inputValue.length === 2) {
      requestAnimationFrame(() => {
        yearInputRef.current?.focus();
      });
    }
  }

  function handleOnBlur(type: 'month' | 'year') {
    const validation =
      type === 'month'
        ? getCardMonthError(value.month)
        : getCardYearError(value.year);

    const otherValidation =
      type === 'month'
        ? getCardYearError(value.year)
        : getCardMonthError(value.month);

    setErrors({
      ...errors,
      [type]: validation.error,
    });

    setErrorMessage(
      type === 'month'
        ? validation.message
        : validation.message || otherValidation.message,
    );
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
        onChange={(v) => handleOnChange(v, 'month')}
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
