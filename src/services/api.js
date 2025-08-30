import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE;

export const fetchSales = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post(`${API_BASE}/sales`, formData, {
    responseType: 'blob',
  });
};

export const fetchOrders = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post(`${API_BASE}/orders`, formData, {
    responseType: 'blob',
  });
};
