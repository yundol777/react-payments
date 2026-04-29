import { useState } from "react"
import CardPreview from "./components/cardPreview/CardPreview";
import CardNumberSection from "./components/cardNumberSection/CardNumberSection";
import ExpirationDateSection from "./components/expirationDateSection/ExpirationDateSection";
import CvcSection from "./components/cvcSection/CvcSection";

function App() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });
  const [cvc, setCvc] = useState('');

  return (
    <div>
      <CardPreview cardNumber={cardNumber} expirationDate={expirationDate} />
      <form> /* input group div */
        <CardNumberSection value={cardNumber} setValue = {setCardNumber} />
        <ExpirationDateSection value={expirationDate} setValue={setExpirationDate} />
        <CvcSection value={cvc} setValue={setCvc} />
      </form>
    </div>
  );
}

export default App
