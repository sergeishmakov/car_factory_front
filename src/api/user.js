import { instance } from './instance';

export async function signIn(data) {
  const response = await instance.post('/user/signin', data);
  return response.data;
}

export async function signUp(data) {
  const response = await instance.post('/user/signup', data);
  return response.data;
}
