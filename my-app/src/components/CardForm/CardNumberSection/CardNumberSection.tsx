import CommonSection from '../../../common/CommonSection/CommonSection';
import NumberInput from '../../../common/NumberInput/NumberInput';
import useFormattedInputCursor from '../../../hooks/useFormattedInputCursor';
import useValidatedNumberInput from '../../../hooks/useValidatedNumberInput';
import { getCardNumberInfo } from '../../../utils/cardBrand';
import { getCardNumberError } from '../../../utils/validation';

interface Props {
  value: string;
  updateValue: (value: string) => void;
}

export default function CardNumberSection({ value, updateValue }: Props) {
  const { formattedMaxLength, formattedValue } = getCardNumberInfo(value);

  const { inputRef, rememberCursorPosition } =
    useFormattedInputCursor(formattedValue);

  const { error, errorMessage, handleOnChange, handleOnBlur } =
    useValidatedNumberInput({
      value,
      updateValue,
      validate: getCardNumberError,
      invalidMessage: '카드번호는 숫자만 입력 가능합니다.',
    });

  return (
    <CommonSection
      title="결제할 카드 번호를 입력해주세요"
      description="본인 명의의 카드만 결제 가능합니다"
      label="카드 번호"
      errorMessage={errorMessage}
    >
      <NumberInput
        type="text"
        inputRef={inputRef}
        value={formattedValue}
        onChange={(inputValue, cursorPosition) => {
          rememberCursorPosition(inputValue, cursorPosition);
          handleOnChange(inputValue.replace(/\s/g, ''));
        }}
        onBlur={handleOnBlur}
        placeholder="0000 0000 0000 0000"
        isError={error}
        maxLength={formattedMaxLength}
      />
    </CommonSection>
  );
}
