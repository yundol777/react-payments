import { hasCardFormError } from '../../utils/validation';
import { StyledButton } from './SubmitButtonSection.styles';

interface Props {
  cardNumber: string[];
  cardExpirationDate: { month: string; year: string };
  cardCvc: string;
  cardIssuer: string;
  cardPassword: string;
}

function SubmitButtonSection({
  cardNumber,
  cardExpirationDate,
  cardCvc,
  cardIssuer,
  cardPassword,
}: Props) {
  const isFormValid = !hasCardFormError({
    cardNumber,
    cardExpirationDate,
    cardCvc,
    cardIssuer,
    cardPassword,
  });

  return (
    <StyledButton type="submit" disabled={!isFormValid}>
      확인
    </StyledButton>
  );
}

export default SubmitButtonSection;
