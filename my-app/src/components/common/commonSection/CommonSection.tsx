import { Container, Description, Error, Header, InputGroup, InputSection, Label, Title } from "./CommonSection.styles";

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
    <Container>
      <Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>
      <InputSection>
        <Label>{label}</Label>
        <InputGroup>{children}</InputGroup>
        <Error>{errorMessage}</Error>
      </InputSection>
    </Container>
  );
}
