import { getUser } from '../utils/current-user';

export function useAccess(role) {
  const user = getUser();
  return user?.role === role;
}
