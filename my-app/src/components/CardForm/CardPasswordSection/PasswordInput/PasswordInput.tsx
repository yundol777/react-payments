import { StyledInput } from './PasswordInput.styles';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
  isError: boolean;
  maxLength?: number;
  autoFocus?: boolean;
}

function PasswordInput({
  value,
  onChange,
  onBlur,
  isError,
  maxLength,
  autoFocus = false,
}: Props) {
  return (
    <StyledInput
      type="password"
      inputMode="numeric"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => onBlur(e.target.value)}
      placeholder="**"
      isError={isError}
      maxLength={maxLength}
      autoFocus={autoFocus}
    />
  );
}

export default PasswordInput;
