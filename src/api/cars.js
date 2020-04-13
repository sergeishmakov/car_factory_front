import { instance } from './instance';
import { getUser } from '../utils/current-user';

export async function getCarsApi() {
  const response = await instance.get('/cars');
  return response.data;
}

export async function getUserCarsApi() {
  const user = getUser();
  const url = user ? `/user/cars/${user.id}` : '/cars';
  const response = await instance.get(url);
  return response.data;
}

export async function createCarApi(data) {
  const response = await instance.post('/cars', data);
  return response.data;
}

export async function updateCarApi(id, data) {
  const response = await instance.put(`/cars/${id}`, data);
  return response.data;
}

export async function deleteCarApi(id) {
  const response = await instance.delete(`/cars/${id}`);
  return response.data;
}
