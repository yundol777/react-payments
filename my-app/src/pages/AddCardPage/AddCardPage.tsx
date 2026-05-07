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
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });
  const [cvc, setCvc] = useState('');
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
    expirationDate,
    cvc,
    cardIssuer,
    cardPassword,
  });

  return (
    <StyledContainer>
      <CardPreview
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        cardIssuer={cardIssuer}
      />
      <StyledForm onSubmit={handleOnSubmit}>
        {step >= 4 && (
          <CardPasswordSection
            value={cardPassword}
            setValue={setCardPassword}
          />
        )}
        {step >= 3 && <CvcSection value={cvc} setValue={setCvc} />}
        {step >= 2 && (
          <ExpirationDateSection
            value={expirationDate}
            setValue={setExpirationDate}
          />
        )}
        {step >= 1 && (
          <CardIssuerSection value={cardIssuer} setValue={setCardIssuer} />
        )}
        {step >= 0 && (
          <CardNumberSection value={cardNumber} setValue={setCardNumber} />
        )}
        {step >= 5 && (
          <SubmitButtonSection
            cardNumber={cardNumber}
            expirationDate={expirationDate}
            cvc={cvc}
            cardIssuer={cardIssuer}
            cardPassword={cardPassword}
          />
        )}
      </StyledForm>
    </StyledContainer>
  );
}

export default AddCardPage;
