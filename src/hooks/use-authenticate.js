import { useContext } from 'react';
import { Authenticate } from '../contexts/Authenticate';

export function useAuthenticate() {
  return useContext(Authenticate);
}
