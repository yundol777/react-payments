import { CARD_BRAND_IMAGES } from '../../../constants/cardBrand';
import { getCardBrand } from '../../../utils/cardBrand';
import { EmptyImg, StyledImg } from './CardBrandImage.styles';

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
      src={CARD_BRAND_IMAGES[cardBrand]}
      alt={`${cardBrand} 로고 이미지`}
    />
  );
}
