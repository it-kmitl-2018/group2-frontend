import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: `http://localhost:9000`,
  headers: {
    'Content-Type': 'application/json'
  }
})
