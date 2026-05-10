import { StyledContainer } from './AddCardPage.styles';
import CardPreview from '../../components/CardPreview/CardPreview';
import { useNavigate } from 'react-router';
import CardForm from '../../components/CardForm/CardForm';
import useCardForm from '../../hooks/useCardForm';

function AddCardPage() {
  const navigate = useNavigate();
  const { cardForm, updateCardForm } = useCardForm();

  function handleOnSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    navigate('/success', {
      state: {
        firstNumber: cardForm.cardNumber.slice(0, 4),
        issuer: cardForm.cardIssuer,
      },
    });
  }

  return (
    <StyledContainer>
      <CardPreview
        cardNumber={cardForm.cardNumber}
        expirationDate={cardForm.cardExpirationDate}
        cardIssuer={cardForm.cardIssuer}
      />
      <CardForm
        cardForm={cardForm}
        updateCardForm={updateCardForm}
        handleOnSubmit={handleOnSubmit}
      />
    </StyledContainer>
  );
}

export default AddCardPage;
