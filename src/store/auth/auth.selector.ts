import { AuthState } from './auth.types';

export const selectorAuth = (state: AuthState) => {
  return state?.auth?.value || false;
};