import CommonSection from '../../../common/CommonSection/CommonSection';
import NumberInput from '../../../common/NumberInput/NumberInput';
import useCvc from '../../../hooks/useCvc';

interface Props {
  value: string;
  updateValue: (value: string) => void;
}

export default function CvcSection({ value, updateValue }: Props) {
  const { error, errorMessage, handleOnChange, handleOnBlur } = useCvc({
    value,
    updateValue,
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
