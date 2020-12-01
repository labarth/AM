import axios from 'axios';

const token = localStorage.getItem('token');

export const apiService = axios.create({
  baseURL: 'http://localhost:2020/',
  headers: {
    common: {
      'Authorization': `Bearer ${token}`,
    }
  }
})