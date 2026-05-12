import useFormStep from '../../hooks/useFormStep';
import { FORM_STEP } from '../../constants/formStep';
import type { CardFormTypes } from '../../types/card';
import CardIssuerSection from './CardIssuerSection/CardIssuerSection';
import CardNumberSection from './CardNumberSection/CardNumberSection';
import CardPasswordSection from './CardPasswordSection/CardPasswordSection';
import CvcSection from './CvcSection/CvcSection';
import ExpirationDateSection from './ExpirationDateSection/ExpirationDateSection';
import SubmitButtonSection from './SubmitButtonSection/SubmitButtonSection';
import { StyledForm } from './CardForm.styles';

interface Props {
  cardForm: CardFormTypes;
  updateCardForm: <K extends keyof CardFormTypes>(
    key: K,
    value: CardFormTypes[K],
  ) => void;
  handleOnSubmit: (e: React.SubmitEvent) => void;
}

function CardForm({ cardForm, updateCardForm, handleOnSubmit }: Props) {
  const step = useFormStep(cardForm);

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      {step >= FORM_STEP.SUBMIT && <SubmitButtonSection cardForm={cardForm} />}
      {step >= FORM_STEP.PASSWORD && (
        <CardPasswordSection
          value={cardForm.cardPassword}
          updateValue={(value) => updateCardForm('cardPassword', value)}
        />
      )}
      {step >= FORM_STEP.CVC && (
        <CvcSection
          value={cardForm.cardCvc}
          updateValue={(value) => updateCardForm('cardCvc', value)}
        />
      )}
      {step >= FORM_STEP.EXPIRATION_DATE && (
        <ExpirationDateSection
          value={cardForm.cardExpirationDate}
          updateValue={(value) => updateCardForm('cardExpirationDate', value)}
        />
      )}
      {step >= FORM_STEP.CARD_ISSUER && (
        <CardIssuerSection
          value={cardForm.cardIssuer}
          updateValue={(value) => updateCardForm('cardIssuer', value)}
        />
      )}
      {step >= FORM_STEP.CARD_NUMBER && (
        <CardNumberSection
          value={cardForm.cardNumber}
          updateValue={(value) => updateCardForm('cardNumber', value)}
        />
      )}
    </StyledForm>
  );
}

export default CardForm;
