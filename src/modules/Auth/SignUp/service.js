import { apiService } from '../../Main/api';

export const createUserService = (user) => apiService.post(`api/user`, user);