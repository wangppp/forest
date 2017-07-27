import setting from '@/config/setting';

export function getToken() {
  return localStorage.getItem(setting.userToken);
}

export function setToken(token) {
  return localStorage.setItem(setting.userToken, token);
}

export function removeToken() {
  return localStorage.setItem(setting.userToken, '');
}
