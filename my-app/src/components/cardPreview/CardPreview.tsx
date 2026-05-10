import CardBrandImage from './CardBrandImage/CardBrandImage';
import {
  CardChip,
  CardContainer,
  CardExpirationDate,
  CardHeader,
  CardNumber,
} from './CardPreview.styles';
import EachCardNumber from './EachCardNumber/EachCardNumber';
import {
  formatCardNumberByPattern,
  getCardNumberPattern,
} from '../../utils/cardBrand';

const CARD_COLOR: Record<string, string> = {
  BC카드: '#F04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
};

interface Props {
  cardNumber: string;
  expirationDate: { month: string; year: string };
  cardIssuer: string;
}

export default function CardPreview({
  cardNumber,
  expirationDate,
  cardIssuer,
}: Props) {
  const cardNumberPattern = getCardNumberPattern(cardNumber);
  const cardNumberGroups = formatCardNumberByPattern(
    cardNumber,
    cardNumberPattern,
  );

  return (
    <CardContainer backgroundColor={CARD_COLOR[cardIssuer] ?? '#333333'}>
      <CardHeader>
        <CardChip />
        <CardBrandImage cardNumber={cardNumber} />
      </CardHeader>
      <CardNumber>
        {cardNumberGroups.map((number, index) => (
          <EachCardNumber key={index} cardNumber={number} index={index} />
        ))}
      </CardNumber>
      <CardExpirationDate>
        {expirationDate.month || 'MM'}/{expirationDate.year || 'YY'}
      </CardExpirationDate>
    </CardContainer>
  );
}
