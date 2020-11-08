import axios from 'axios';
import { API_URL } from 'modules/Main/constants';

export const createUserService = (user) => axios.post(`${API_URL}api/user`, user);