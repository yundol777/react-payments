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
  type SelectedCardIssuer,
} from '../../constants/cardIssuer';
import { getCardNumberInfo } from '../../utils/cardBrand';

interface Props {
  cardNumber: string;
  expirationDate: { month: string; year: string };
  cardIssuer: SelectedCardIssuer;
}

export default function CardPreview({
  cardNumber,
  expirationDate,
  cardIssuer,
}: Props) {
  const { groups } = getCardNumberInfo(cardNumber);
  const backgroundColor = cardIssuer
    ? CARD_ISSUER_COLORS[cardIssuer]
    : DEFAULT_CARD_COLOR;

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
