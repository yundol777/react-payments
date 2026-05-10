import { useState } from 'react';
import CommonSection from '../../common/CommonSection/CommonSection';
import NumberInput from '../../common/NumberInput/NumberInput';
import { getCardNumberError } from '../../utils/validation';
import useFormattedInputCursor from '../../hooks/useFormattedInputCursor';
import {
  formatCardNumberByPattern,
  getCardNumberPattern,
} from '../../utils/cardBrand';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export default function CardNumberSection({ value, setValue }: Props) {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const pattern = getCardNumberPattern(value);
  const maxLength = pattern.reduce((sum, length) => sum + length, 0);
  const formattedMaxLength = maxLength + pattern.length - 1;
  const formmatedValue = formatCardNumberByPattern(value, pattern)
    .filter(Boolean)
    .join(' ');
  const { inputRef, rememberCursorPosition } =
    useFormattedInputCursor(formmatedValue);

  function handleOnChange(inputValue: string, cursorPosition: number | null) {
    const onlyNumber = inputValue.replace(/\s/g, '');

    if (!/^[0-9]*$/.test(onlyNumber)) {
      setErrorMessage('카드번호는 숫자만 입력 가능합니다.');
      return;
    }

    rememberCursorPosition(inputValue, cursorPosition);
    setValue(onlyNumber);
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
        inputRef={inputRef}
        value={formmatedValue}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder="0000 0000 0000 0000"
        isError={error}
        maxLength={formattedMaxLength}
        autoFocus
      />
    </CommonSection>
  );
}
