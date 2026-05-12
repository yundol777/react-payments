import CommonSection from '../../../common/CommonSection/CommonSection';
import useInitialFocus from '../../../hooks/useInitialFocus';
import SelectInput from './SelectInput/SelectInput';

interface Props {
  value: string;
  updateValue: (selectValue: string) => void;
}

function CardIssuerSection({ value, updateValue }: Props) {
  const selectRef = useInitialFocus<HTMLSelectElement>();

  function handleOnChange(selectValue: string): void {
    updateValue(selectValue);
  }

  return (
    <CommonSection
      title="카드사를 선택해 주세요"
      description="현재 국내 카드사만 가능합니다"
    >
      <SelectInput
        inputRef={selectRef}
        value={value}
        onChange={handleOnChange}
      />
    </CommonSection>
  );
}

export default CardIssuerSection;
