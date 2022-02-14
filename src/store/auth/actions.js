import { IS_LOGIN } from './types';
export const isLogin = (payload) => {
  return {
    type: IS_LOGIN,
    payload: payload
  }
};