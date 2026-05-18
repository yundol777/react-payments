interface Card {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

export async function getCardList() {
  const response = await fetch('https://api.example.com/cards');

  if (!response.ok) {
    throw new Error('카드 목록 요청 실패');
  }

  return (await response.json()) as Card[];
}
