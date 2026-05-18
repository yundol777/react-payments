import CardList from '../../components/CardListContainer/CardList/CardList';
import CardListContainer from '../../components/CardListContainer/CardListContainer';
import CardListEmpty from '../../components/CardListContainer/CardListEmpty/CardListEmpty';
import CardListError from '../../components/CardListContainer/CardListError/CardListError';
import CardListLoading from '../../components/CardListContainer/CardListLoading/CardListLoading';
import useCardListQuery from '../../hooks/useGetCardList';

function CardListPage() {
  const { status, data, itemCount } = useCardListQuery();
  const isEmpty = data.length === 0;

  return (
    <CardListContainer itemCount={itemCount}>
      {status === 'loading' && <CardListLoading />}
      {status === 'error' && <CardListError />}
      {status === 'success' && isEmpty && <CardListEmpty />}
      {status === 'success' && !isEmpty && <CardList cardList={data} />}
    </CardListContainer>
  );
}

export default CardListPage;
