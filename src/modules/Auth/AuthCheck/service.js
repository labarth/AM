import { apiService } from '../../Main/api';

export const isAuthService = ({ token }) => apiService.post('api/authcheck', { token });