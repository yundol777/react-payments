import AddCardButton from './AddCardButton/AddCardButton';
import CardListItem from './CardListItem/CardListItem';
import { CardListContainer } from './CardList.styles';

interface Props {
  cardList: {
    id: string;
    issuerCode: string;
    number: string;
    expirationDate: string;
  }[];
}

function CardList({ cardList }: Props) {
  return (
    <CardListContainer>
      {cardList.map((card) => (
        <CardListItem key={card.id} card={card} />
      ))}
      <AddCardButton />
    </CardListContainer>
  );
}

export default CardList;
