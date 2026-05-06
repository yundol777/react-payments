import {
  getCardNumberErrorMessage,
  getCvcErrorMessage,
  getMonthErrorMessage,
  getPasswordErrorMessage,
  getYearErrorMessage,
} from '../../utils/Validation';
import { StyledButton } from './SubmitButtonSection.styles';

interface Props {
  cardNumber: string[];
  expirationDate: { month: string; year: string };
  cvc: string;
  cardIssuer: string;
  cardPassword: string;
}

function SubmitButtonSection({
  cardNumber,
  expirationDate,
  cvc,
  cardIssuer,
  cardPassword,
}: Props) {
  const isFormValid =
    cardNumber.every((number) => getCardNumberErrorMessage(number) === '') &&
    getMonthErrorMessage(expirationDate.month) === '' &&
    getYearErrorMessage(expirationDate.year) === '' &&
    getCvcErrorMessage(cvc) === '' &&
    getPasswordErrorMessage(cardPassword) === '' &&
    cardIssuer !== '';

  return (
    <StyledButton type="submit" disabled={!isFormValid}>
      확인
    </StyledButton>
  );
}

export default SubmitButtonSection;
