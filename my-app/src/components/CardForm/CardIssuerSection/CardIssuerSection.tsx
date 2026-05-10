import CommonSection from '../../../common/CommonSection/CommonSection';
import SelectInput from './SelectInput/SelectInput';

interface Props {
  value: string;
  updateValue: (selectValue: string) => void;
}

function CardIssuerSection({ value, updateValue }: Props) {
  function handleOnChange(selectValue: string): void {
    updateValue(selectValue);
  }

  return (
    <CommonSection
      title="카드사를 선택해 주세요"
      description="현재 국내 카드사만 가능합니다"
    >
      <SelectInput value={value} onChange={handleOnChange} />
    </CommonSection>
  );
}

export default CardIssuerSection;
