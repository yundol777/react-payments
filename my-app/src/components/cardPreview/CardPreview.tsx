import CardBrandImage from './CardBrandImage/CardBrandImage';
import {
  CardChip,
  CardContainer,
  CardExpirationDate,
  CardHeader,
  CardNumber,
} from './CardPreview.styles';
import EachCardNumber from './EachCardNumber/EachCardNumber';

interface Props {
  cardNumber: string[];
  expirationDate: { month: string; year: string };
}

export default function CardPreview({ cardNumber, expirationDate }: Props) {
  return (
    <CardContainer>
      <CardHeader>
        <CardChip />
        <CardBrandImage cardNumber={cardNumber[0]} />
      </CardHeader>
      <CardNumber>
        {cardNumber.map((number, index) => (
          <EachCardNumber cardNumber={number} index={index} />
        ))}
      </CardNumber>
      <CardExpirationDate>
        {expirationDate.month || 'MM'}/{expirationDate.year || 'YY'}
      </CardExpirationDate>
    </CardContainer>
  );
}
