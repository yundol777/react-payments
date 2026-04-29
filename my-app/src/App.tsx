import { useState } from "react"
import CardPreview from "./components/CardPreview/CardPreview";
import CardNumberSection from "./components/CardNumberSection/CardNumberSection";
import ExpirationDateSection from "./components/ExpirationDateSection/ExpirationDateSection";
import CvcSection from "./components/CvcSection/CvcSection";

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
