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

export async function deleteCardItem(id: string) {
  const response = await fetch(`https://api.example.com/cards/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('카드 삭제 요청 실패');
  }
}
