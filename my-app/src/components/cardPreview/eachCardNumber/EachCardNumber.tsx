import MaskingImg from '../../../assets/MaskingImg.png';
import { NumberGroup, MaskingGroup } from './EachCardNumber.styles';

export default function EachCardNumber(cardNumber: string, index: number) {
  if (index >= 2) {
    return (
      <MaskingGroup>
        {Array.from(cardNumber).map(() => (
          <img src={MaskingImg} alt="masking-img" />
        ))}
      </MaskingGroup>
    );
  }

  return (
    <NumberGroup>
      {Array.from(cardNumber).map((number) => (
        <p>{number}</p>
      ))}
    </NumberGroup>
  );
}
