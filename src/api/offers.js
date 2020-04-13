import { instance } from './instance';

export async function createOfferApi(data) {
  const response = await instance.post('/offers', data);
  return response.data;
}

export async function acceptOfferApi(id) {
  const response = await instance.post(`/offers/accept/${id}`);
  return response.data;
}

export async function denyOfferApi(id) {
  const response = await instance.post(`/offers/deny/${id}`);
  return response.data;
}
