import apiService from 'modules/main/api';

export const loginService = (user) => apiService.post(`/login`, user);