import { useState } from 'react';
import { AppContainer, FormLayout } from './AddCardPage.styles';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardNumberSection from '../../components/CardNumberSection/CardNumberSection';
import ExpirationDateSection from '../../components/ExpirationDateSection/ExpirationDateSection';
import CvcSection from '../../components/CvcSection/CvcSection';
import CardIssuerSection from '../../components/CardIssuerSection/CardIssuerSection';
import CardPasswordSection from '../../components/CardPasswordSection/CardPasswordSection';
import SubmitButtonSection from '../../components/SubmitButtonSection/SubmitButtonSection';
import { useNavigate } from 'react-router';

function AddCardPage() {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });
  const [cvc, setCvc] = useState('');
  const [cardIssuer, setCardIssuer] = useState('');
  const [cardPassword, setCardPassword] = useState('');

  function handleOnSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    navigate('/success');
  }

  return (
    <AppContainer>
      <CardPreview
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        cardIssuer={cardIssuer}
      />
      <FormLayout onSubmit={handleOnSubmit}>
        <CardPasswordSection value={cardPassword} setValue={setCardPassword} />
        <CvcSection value={cvc} setValue={setCvc} />
        <ExpirationDateSection
          value={expirationDate}
          setValue={setExpirationDate}
        />
        <CardIssuerSection value={cardIssuer} setValue={setCardIssuer} />
        <CardNumberSection value={cardNumber} setValue={setCardNumber} />
        <SubmitButtonSection
          cardNumber={cardNumber}
          expirationDate={expirationDate}
          cvc={cvc}
          cardIssuer={cardIssuer}
          cardPassword={cardPassword}
        />
      </FormLayout>
    </AppContainer>
  );
}

export default AddCardPage;
