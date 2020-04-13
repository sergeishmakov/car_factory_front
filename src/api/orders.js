import { instance } from './instance';
import { getUser } from '../utils/current-user';

export async function getOrdersApi() {
  const response = await instance.get('/orders');
  return response.data;
}

export async function getUserOrdersApi() {
  const user = getUser();
  if (!user) return [];
  const response = await instance.get(`/user/orders/${user.id}`);
  return response.data;
}

export async function createOrderApi(carId) {
  const user = getUser();
  const response = await instance.post('/orders', { carId, userId: user.id });
  return response.data;
}

export async function deleteOrderApi(id) {
  const response = await instance.delete(`/orders/${id}`);
  return response.data;
}

export async function acceptOrderApi(id) {
  const response = await instance.post(`/orders/accept/${id}`);
  return response.data;
}

export async function denyOrderApi(id) {
  const response = await instance.post(`/orders/deny/${id}`);
  return response.data;
}
