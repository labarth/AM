import apiService from 'modules/main/api';

export const createUserService = (user) => apiService.post(`/user`, user);