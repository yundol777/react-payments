import AMEX from '../../../assets/AMEX.png';
import Diners from '../../../assets/Diners.png';
import MasterCard from '../../../assets/Mastercard.png';
import UnionPay from '../../../assets/UnionPay.png';
import Visa from '../../../assets/Visa.png';
import { getCardBrand, type CardBrand } from '../../../utils/cardBrand';
import { EmptyImg, StyledImg } from './CardBrandImage.styles';

const CARD_BRAND_IMAGE: Record<Exclude<CardBrand, ''>, string> = {
  Visa,
  MasterCard,
  Diners,
  AMEX,
  UnionPay,
};

interface Props {
  cardNumber: string;
}

export default function CardBrandImage({ cardNumber }: Props) {
  const cardBrand = getCardBrand(cardNumber);

  if (!cardBrand) {
    return <EmptyImg />;
  }

  return (
    <StyledImg
      src={CARD_BRAND_IMAGE[cardBrand]}
      alt={`${cardBrand} 로고 이미지`}
    />
  );
}
