import isWithinMaxLength from '../../utils/Validation';

interface Props {
  value: string;
  setValue: (value: string)=>void;
  placeholder: string;
  maxLength: number;
}

export default function NumberInput({ value, setValue, placeholder, maxLength }: Props) {

  return (
    <input
      type="number"
      value={value}
      onChange={(e) => {
        if(!isWithinMaxLength(e.target.value, maxLength)) return;
        setValue(e.target.value);
      }}
      placeholder={placeholder}
    />
  );
}
