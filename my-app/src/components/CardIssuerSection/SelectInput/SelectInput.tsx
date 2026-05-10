import { StyledOption, StyledSelect } from './SelectInput.styles';

interface Props {
  value: string;
  onChange: (selectValue: string) => void;
}

function SelectInput({ value, onChange }: Props) {
  return (
    <StyledSelect
      value={value}
      onChange={(e) => onChange(e.target.value)}
      name="cardIssuer"
      isInitial={value === ''}
      autoFocus
    >
      <StyledOption value="" hidden>
        카드사를 선택해주세요
      </StyledOption>
      <StyledOption value="BC카드">BC카드</StyledOption>
      <StyledOption value="신한카드">신한카드</StyledOption>
      <StyledOption value="카카오뱅크">카카오뱅크</StyledOption>
      <StyledOption value="현대카드">현대카드</StyledOption>
      <StyledOption value="우리카드">우리카드</StyledOption>
      <StyledOption value="롯데카드">롯데카드</StyledOption>
      <StyledOption value="하나카드">하나카드</StyledOption>
      <StyledOption value="국민카드">국민카드</StyledOption>
    </StyledSelect>
  );
}

export default SelectInput;
