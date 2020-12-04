import apiService from 'modules/main/api';

export const isAuthService = ({ token }) => apiService.post('/authcheck', { token });