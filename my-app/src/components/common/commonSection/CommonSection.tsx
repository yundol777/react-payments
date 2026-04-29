interface Props {
  title: string;
  description: string;
  label: string;
  children: any;
  errorMessage: string;
}

export default function CommonSection({
  title,
  description,
  label,
  children,
  errorMessage,
}: Props) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <label>{label}</label>
        <div>{children}</div>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
}
