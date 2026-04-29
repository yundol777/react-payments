interface Props {
  value: string;
  onChange: (value:string)=>void;
  placeholder: string;
}

export default function NumberInput({ value, onChange, placeholder }: Props) {

  return (
    <input
      type="number"
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
