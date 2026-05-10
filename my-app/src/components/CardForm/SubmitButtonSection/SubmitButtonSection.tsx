import type { CardFormTypes } from '../../../types/card';
import { hasCardFormError } from '../../../utils/validation';
import { StyledButton } from './SubmitButtonSection.styles';

interface Props {
  cardForm: CardFormTypes;
}

function SubmitButtonSection({ cardForm }: Props) {
  const isFormValid = !hasCardFormError(cardForm);

  return (
    <StyledButton type="submit" disabled={!isFormValid}>
      확인
    </StyledButton>
  );
}

export default SubmitButtonSection;
