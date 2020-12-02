import axios from 'axios';
import { getToken } from 'utils/authToken';


const token = getToken();

export default axios.create({
  baseURL: 'http://localhost:2020/api/',
  headers: {
    common: {
      'Authorization': `Bearer ${token}`,
    }
  }
})