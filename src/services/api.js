import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE;

// Invio file a /sales
export const uploadSales = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(`${API_BASE}/sales`, formData, {
    responseType: 'blob'
  });
  return response.data;
};

// Invio file a /orders
export const uploadOrders = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(`${API_BASE}/orders`, formData, {
    responseType: 'blob'
  });
  return response.data;
};
