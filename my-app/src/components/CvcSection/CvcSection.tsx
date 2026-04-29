import CommonSection from '../CommonSection/CommonSection';
import NumberInput from '../NumberInput/NumberInput';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export default function CvcSection({ value, setValue }: Props) {
  return (
    <CommonSection
      title="CVC 번호를 입력해주세요"
      description=""
      label="CVC"
      errorMessage="숫자만 입력 가능합니다."
    >
      <NumberInput
        value={value}
        setValue={setValue}
        placeholder="123"
        maxLength={3}
      />
    </CommonSection>
  );
}
