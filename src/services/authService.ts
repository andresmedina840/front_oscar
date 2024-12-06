import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // Cambia la URL según tu backend

const authService = {
  login: async (data: { numeroCelular: string; password: string; token: string; recaptcha: string }) => {
    const response = await axios.post(`${API_URL}/login`, data);
    localStorage.setItem('token', response.data.token); // Almacenar JWT en localStorage
    return response.data;
  },

  register: async (data: { numeroCelular: string; password: string; email: string }) => {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getToken: () => localStorage.getItem('token'),

  isAuthenticated: () => !!localStorage.getItem('token'),
};

export default authService;
