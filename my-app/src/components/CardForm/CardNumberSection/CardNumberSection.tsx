import CommonSection from '../../../common/CommonSection/CommonSection';
import NumberInput from '../../../common/NumberInput/NumberInput';
import useCardNumber from '../../../hooks/useCardNumber';

interface Props {
  value: string;
  updateValue: (value: string) => void;
}

export default function CardNumberSection({ value, updateValue }: Props) {
  const {
    error,
    errorMessage,
    handleOnChange,
    handleOnBlur,
    inputRef,
    formmatedValue,
    formattedMaxLength,
  } = useCardNumber({ value, updateValue });
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
