import { StyledInput } from './PasswordInput.styles';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
  isError: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  maxLength?: number;
}

function PasswordInput({
  value,
  onChange,
  onBlur,
  isError,
  inputRef,
  maxLength,
}: Props) {
  return (
    <StyledInput
      ref={inputRef}
      type="password"
      inputMode="numeric"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => onBlur(e.target.value)}
      placeholder="**"
      isError={isError}
      maxLength={maxLength}
    />
  );
}

export default PasswordInput;
