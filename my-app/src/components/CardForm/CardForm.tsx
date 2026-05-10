import useFormStep from '../../hooks/useFormStep';
import type { CardFormTypes } from '../../types/card';
import CardIssuerSection from '../CardIssuerSection/CardIssuerSection';
import CardNumberSection from '../CardNumberSection/CardNumberSection';
import CardPasswordSection from '../CardPasswordSection/CardPasswordSection';
import CvcSection from '../CvcSection/CvcSection';
import ExpirationDateSection from '../ExpirationDateSection/ExpirationDateSection';
import SubmitButtonSection from '../SubmitButtonSection/SubmitButtonSection';
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
      {step >= 5 && <SubmitButtonSection cardForm={cardForm} />}
      {step >= 4 && (
        <CardPasswordSection
          value={cardForm.cardPassword}
          setValue={(value) => updateCardForm('cardPassword', value)}
        />
      )}
      {step >= 3 && (
        <CvcSection
          value={cardForm.cardCvc}
          setValue={(value) => updateCardForm('cardCvc', value)}
        />
      )}
      {step >= 2 && (
        <ExpirationDateSection
          value={cardForm.cardExpirationDate}
          setValue={(value) => updateCardForm('cardExpirationDate', value)}
        />
      )}
      {step >= 1 && (
        <CardIssuerSection
          value={cardForm.cardIssuer}
          setValue={(value) => updateCardForm('cardIssuer', value)}
        />
      )}
      {step >= 0 && (
        <CardNumberSection
          value={cardForm.cardNumber}
          setValue={(value) => updateCardForm('cardNumber', value)}
        />
      )}
    </StyledForm>
  );
}

export default CardForm;
