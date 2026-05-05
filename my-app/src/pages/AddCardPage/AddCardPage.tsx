import { useState } from 'react';
import { AppContainer, FormLayout } from './AddCardPage.styles';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardNumberSection from '../../components/CardNumberSection/CardNumberSection';
import ExpirationDateSection from '../../components/ExpirationDateSection/ExpirationDateSection';
import CvcSection from '../../components/CvcSection/CvcSection';
import CardIssuerSection from '../../components/CardIssuerSection/CardIssuerSection';

function AddCardPage() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });
  const [cvc, setCvc] = useState('');
  const [cardIssuer, setCardIssuer] = useState('');

  return (
    <AppContainer>
      <CardPreview
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        cardIssuer={cardIssuer}
      />
      <FormLayout>
        <CvcSection value={cvc} setValue={setCvc} />
        <ExpirationDateSection
          value={expirationDate}
          setValue={setExpirationDate}
        />
        <CardIssuerSection value={cardIssuer} setValue={setCardIssuer} />
        <CardNumberSection value={cardNumber} setValue={setCardNumber} />
      </FormLayout>
    </AppContainer>
  );
}

export default AddCardPage;
