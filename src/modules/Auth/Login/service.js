import { apiService } from '../../Main/api';

export const loginService = (user) => apiService.post(`api/login`, user);