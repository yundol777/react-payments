import CardBrandImage from './cardBrandImage/CardBrandImage';

interface Props {
  cardNumber: string[];
  expirationDate: { month: string; year: string };
}

export default function CardPreview({ cardNumber, expirationDate }: Props) {
  const maskingCardNumber = cardNumber.map((num, index) => {
    if (index >= 2) {
        return '*'.repeat(num.length);
    }
    return num;
  })

  return (
    <div>
      <div>
        <div></div> /* 카드 칩 */
        <CardBrandImage cardNumber={cardNumber[0]} /> /* 카드브랜드 이미지 */
      </div>
      <div>
        {maskingCardNumber[0]}
        {maskingCardNumber[1]}
        {maskingCardNumber[2]}
        {maskingCardNumber[3]}
      </div>
      /* 카드넘버 */
      <div>
        {expirationDate.month}/{expirationDate.year}
      </div> /* 유효기간 */
    </div>
  );
}
