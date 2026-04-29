interface Props {
  value: string;
  onChange: (value:string)=>void;
  onBlur: (value:string)=>void;
  placeholder: string;
  isError: boolean;
}

export default function NumberInput({ value, onChange, onBlur, placeholder, isError }: Props) {

  return (
    <input
      type="number"
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      onBlur={(e)=>onBlur(e.target.value)}
      placeholder={placeholder}
    />
  );
}
