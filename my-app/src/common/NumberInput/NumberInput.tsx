import { StyledInput } from './NumberInput.styles';

interface Props {
  value: string;
  onChange: (value: string, cursorPosition: number | null) => void;
  onBlur: (value: string) => void;
  placeholder: string;
  isError: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  maxLength?: number;
  autoFocus?: boolean;
}

export default function NumberInput({
  value,
  onChange,
  onBlur,
  placeholder,
  isError,
  inputRef,
  maxLength,
  autoFocus = false,
}: Props) {
  return (
    <StyledInput
      ref={inputRef}
      type="text"
      inputMode="numeric"
      value={value}
      onChange={(e) => onChange(e.target.value, e.target.selectionStart)}
      onBlur={(e) => onBlur(e.target.value)}
      placeholder={placeholder}
      isError={isError}
      maxLength={maxLength}
      autoFocus={autoFocus}
    />
  );
}
