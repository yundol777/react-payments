import CommonSection from '../../../common/CommonSection/CommonSection';
import NumberInput from '../../../common/NumberInput/NumberInput';
import useInitialFocus from '../../../hooks/useInitialFocus';
import useValidatedNumberInput from '../../../hooks/useValidatedNumberInput';
import { getCardPasswordError } from '../../../utils/validation';

interface Props {
  value: string;
  updateValue: (value: string) => void;
}

function CardPasswordSection({ value, updateValue }: Props) {
  const inputRef = useInitialFocus<HTMLInputElement>();

  const { error, errorMessage, handleOnChange, handleOnBlur } =
    useValidatedNumberInput({
      value,
      updateValue,
      validate: getCardPasswordError,
      invalidMessage: '비밀번호는 숫자만 입력 가능합니다.',
    });

  return (
    <CommonSection
      title="비밀번호를 입력해 주세요"
      description="앞의 2자리를 입력해주세요"
      label="비밀번호 앞 2자리"
      errorMessage={errorMessage}
    >
      <NumberInput
        type="password"
        inputRef={inputRef}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder="**"
        isError={error}
        maxLength={2}
      />
    </CommonSection>
  );
}

export default CardPasswordSection;
