import { useState } from 'react';
import type { CardFormTypes } from '../types/card';

function useCardForm() {
  const [cardForm, setCardForm] = useState<CardFormTypes>({
    cardNumber: '',
    cardExpirationDate: {
      month: '',
      year: '',
    },
    cardCvc: '',
    cardIssuer: '',
    cardPassword: '',
  });

  function updateCardForm<K extends keyof CardFormTypes>(
    key: K,
    value: CardFormTypes[K],
  ) {
    setCardForm((prev) => ({ ...prev, [key]: value }));
  }

  return { cardForm, updateCardForm };
}

export default useCardForm;
