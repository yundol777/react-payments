import { StyledInput } from './PasswordInput.styles';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
  isError: boolean;
}

function PasswordInput({ value, onChange, onBlur, isError }: Props) {
  return (
    <StyledInput
      type="password"
      inputMode="numeric"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => onBlur(e.target.value)}
      placeholder="**"
      isError={isError}
    />
  );
}

export default PasswordInput;
