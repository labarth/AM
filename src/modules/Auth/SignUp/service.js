import axios from 'axios';
import { API_URL } from 'modules/Main/constants';

export const createUserService = (user) => axios.post(`http://localhost:2020/api/user`, user);