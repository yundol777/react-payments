import {
  CARD_ISSUERS,
  isCardIssuer,
  type SelectedCardIssuer,
} from '../../../../constants/cardIssuer';
import { StyledOption, StyledSelect } from './SelectInput.styles';

interface Props {
  value: SelectedCardIssuer;
  onChange: (selectValue: SelectedCardIssuer) => void;
  inputRef?: React.Ref<HTMLSelectElement>;
}

function SelectInput({ value, onChange, inputRef }: Props) {
  return (
    <StyledSelect
      ref={inputRef}
      value={value}
      onChange={(e) => {
        const selectValue = e.target.value;
        onChange(isCardIssuer(selectValue) ? selectValue : '');
      }}
      name="cardIssuer"
      isInitial={value === ''}
    >
      <StyledOption value="" hidden>
        카드사를 선택해주세요
      </StyledOption>
      {CARD_ISSUERS.map((issuer) => (
        <StyledOption key={issuer} value={issuer}>
          {issuer}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}

export default SelectInput;
