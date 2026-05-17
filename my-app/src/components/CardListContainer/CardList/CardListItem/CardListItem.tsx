import {
  DEFAULT_CARD_COLOR,
  getCardIssuerByCode,
} from '../../../../constants/cardIssuer';
import {
  CardColorPreview,
  CardInfo,
  CardListItemContainer,
  CardNumber,
  DeleteButton,
  ExpirationDate,
  IssuerName,
} from './CardListItem.styles';
import DeleteIcon from '../../../../assets/DeleteIcon.png';

interface Props {
  card: {
    id: string;
    issuerCode: string;
    number: string;
    expirationDate: string;
  };
}

function CardListItem({ card }: Props) {
  const issuer = getCardIssuerByCode(card.issuerCode);

  const issuerName = issuer?.name ?? '알 수 없는 카드사';
  const backgroundColor = issuer?.color ?? DEFAULT_CARD_COLOR;

  function handleOnClick() {}

  return (
    <CardListItemContainer>
      <CardColorPreview backgroundColor={backgroundColor} />
      <CardInfo>
        <IssuerName>{issuerName}</IssuerName>
        <CardNumber>{card.number}</CardNumber>
        <ExpirationDate>유효기간 {card.expirationDate}</ExpirationDate>
      </CardInfo>
      <DeleteButton onClick={handleOnClick}>
        <img src={DeleteIcon} alt="delete-icon" />
      </DeleteButton>
    </CardListItemContainer>
  );
}

export default CardListItem;
