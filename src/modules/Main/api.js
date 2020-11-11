import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxleGFuZGVyIiwic3VybmFtZSI6Ik1hdGl1Z2luIiwiZW1haWwiOiJhbGV4YW5kci5tYXRpdWdpbkBnbWFpbC5jb20iLCJfaWQiOiI1ZmFiOTIwMGMxYzc0Njg1Y2MzNjU4ZjAiLCJpYXQiOjE2MDUwODQwNDl9.p6V5-m-6spd3ipDN9P3bocpahvP5rP2A5z4-BALSbpw';
export const apiService = axios.create({
  baseURL: 'http://localhost:2020/',
  headers: {
    common: {
      'Authorization': `Bearer ${token}`,
    }
  }
})