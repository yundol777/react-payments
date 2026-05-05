interface Props {
  value: string;
  onChange: (selectValue: string) => void;
}

function SelectInput({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      name="cardIssuer"
    >
      <option value="">카드사를 선택해주세요</option>
      <option value="BC카드">BC카드</option>
      <option value="신한카드">신한카드</option>
      <option value="카카오뱅크">카카오뱅크</option>
      <option value="현대카드">현대카드</option>
      <option value="우리카드">우리카드</option>
      <option value="롯데카드">롯데카드</option>
      <option value="하나카드">하나카드</option>
      <option value="국민카드">국민카드</option>
    </select>
  );
}

export default SelectInput;
