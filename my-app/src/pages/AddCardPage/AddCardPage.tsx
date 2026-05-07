import { useState } from 'react';
import { StyledContainer, StyledForm } from './AddCardPage.styles';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardNumberSection from '../../components/CardNumberSection/CardNumberSection';
import ExpirationDateSection from '../../components/ExpirationDateSection/ExpirationDateSection';
import CvcSection from '../../components/CvcSection/CvcSection';
import CardIssuerSection from '../../components/CardIssuerSection/CardIssuerSection';
import CardPasswordSection from '../../components/CardPasswordSection/CardPasswordSection';
import SubmitButtonSection from '../../components/SubmitButtonSection/SubmitButtonSection';
import { useNavigate } from 'react-router';
import useFormStep from '../../hooks/useFormStep';

function AddCardPage() {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [cardExpirationDate, setCardExpirationDate] = useState({
    month: '',
    year: '',
  });
  const [cardCvc, setCardCvc] = useState('');
  const [cardIssuer, setCardIssuer] = useState('');
  const [cardPassword, setCardPassword] = useState('');

  function handleOnSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    navigate('/success', {
      state: {
        firstNumber: cardNumber[0],
        issuer: cardIssuer,
      },
    });
  }

  const step = useFormStep({
    cardNumber,
    cardExpirationDate,
    cardCvc,
    cardIssuer,
    cardPassword,
  });

  return (
    <StyledContainer>
      <CardPreview
        cardNumber={cardNumber}
        expirationDate={cardExpirationDate}
        cardIssuer={cardIssuer}
      />
      <StyledForm onSubmit={handleOnSubmit}>
        {step >= 5 && (
          <SubmitButtonSection
            cardNumber={cardNumber}
            cardExpirationDate={cardExpirationDate}
            cardCvc={cardCvc}
            cardIssuer={cardIssuer}
            cardPassword={cardPassword}
          />
        )}
        {step >= 4 && (
          <CardPasswordSection
            value={cardPassword}
            setValue={setCardPassword}
          />
        )}
        {step >= 3 && <CvcSection value={cardCvc} setValue={setCardCvc} />}
        {step >= 2 && (
          <ExpirationDateSection
            value={cardExpirationDate}
            setValue={setCardExpirationDate}
          />
        )}
        {step >= 1 && (
          <CardIssuerSection value={cardIssuer} setValue={setCardIssuer} />
        )}
        {step >= 0 && (
          <CardNumberSection value={cardNumber} setValue={setCardNumber} />
        )}
      </StyledForm>
    </StyledContainer>
  );
}

export default AddCardPage;
