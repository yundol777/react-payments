import { http, HttpResponse } from 'msw';
import { cards, maskCardNumber } from './mockDB';

interface CreateCardRequest {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

const BASE_URL = 'https://api.example.com';

export const handlers = [
  http.post(`${BASE_URL}/cards`, async ({ request }) => {
    const body = (await request.json()) as CreateCardRequest;

    if (body.number === '9999123456789012') {
      return HttpResponse.json(
        {
          code: 'INVALID_CARD_NUMBER',
          message: '유효하지 않은 카드 번호입니다.',
        },
        { status: 400 },
      );
    }

    if (body.number === '4111111111111111' && body.cvc === '000') {
      return HttpResponse.json(
        {
          code: 'INVALID_CVC',
          message: '유효하지 않은 CVC입니다.',
        },
        { status: 400 },
      );
    }

    if (body.number === '5511123456789012' && body.expirationDate === '13/28') {
      return HttpResponse.json(
        {
          code: 'INVALID_EXPIRATION_DATE',
          message: '유효하지 않은 만료일입니다.',
        },
        { status: 400 },
      );
    }

    const id = crypto.randomUUID();

    cards.push({
      id,
      issuerCode: body.issuerCode,
      number: maskCardNumber(body.number),
      expirationDate: body.expirationDate,
    });

    return HttpResponse.json({ id }, { status: 201 });
  }),

  http.get(`${BASE_URL}/cards`, () => {
    return HttpResponse.json(cards, { status: 200 });
  }),

  http.delete(`${BASE_URL}/cards/:id`, ({ params }) => {
    const cardIndex = cards.findIndex((card) => card.id === params.id);

    if (cardIndex !== -1) {
      cards.splice(cardIndex, 1);
    }

    return new HttpResponse(null, { status: 204 });
  }),
];
