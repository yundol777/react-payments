import { useEffect, useState } from 'react';
import { delay } from '../utils/delay';
import { getCardList } from '../apis/card';

interface Card {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

type CardListStatus = 'idle' | 'loading' | 'success' | 'error';

function useCardListQuery() {
  const [status, setStatus] = useState<CardListStatus>('idle');
  const [data, setData] = useState<Card[]>([]);

  useEffect(() => {
    async function fetchCardList() {
      try {
        setStatus('loading');

        await delay(500);
        const cardList = await getCardList();

        setData(cardList);
        setStatus('success');
      } catch {
        setStatus('error');
      }
    }

    fetchCardList();
  }, []);

  return {
    status,
    data,
    itemCount: status === 'success' && data.length !== 0 ? data.length : null,
  };
}

export default useCardListQuery;
