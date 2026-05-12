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
  CARD_ISSUER_COLORS,
  DEFAULT_CARD_COLOR,
} from '../../constants/cardIssuer';
import { getCardNumberInfo } from '../../utils/cardBrand';

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
  const { groups } = getCardNumberInfo(cardNumber);
  const backgroundColor =
    CARD_ISSUER_COLORS[cardIssuer as keyof typeof CARD_ISSUER_COLORS] ??
    DEFAULT_CARD_COLOR;

  return (
    <CardContainer backgroundColor={backgroundColor}>
      <CardHeader>
        <CardChip />
        <CardBrandImage cardNumber={cardNumber} />
      </CardHeader>
      <CardNumber>
        {groups.map((number, index) => (
          <EachCardNumber key={index} cardNumber={number} index={index} />
        ))}
      </CardNumber>
      <CardExpirationDate>
        {expirationDate.month || 'MM'}/{expirationDate.year || 'YY'}
      </CardExpirationDate>
    </CardContainer>
  );
}
