import CommonSection from '../../../common/CommonSection/CommonSection';
import NumberInput from '../../../common/NumberInput/NumberInput';
import useValidatedNumberInput from '../../../hooks/useValidatedNumberInput';
import { getCardCvcError } from '../../../utils/validation';

interface Props {
  value: string;
  updateValue: (value: string) => void;
}

export default function CvcSection({ value, updateValue }: Props) {
  const { error, errorMessage, handleOnChange, handleOnBlur } =
    useValidatedNumberInput({
      value,
      updateValue,
      validate: getCardCvcError,
      invalidMessage: 'CVC는 숫자만 입력 가능합니다.',
    });

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
        maxLength={3}
        autoFocus
      />
    </CommonSection>
  );
}
