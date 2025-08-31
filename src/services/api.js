import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const uploadSales = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(`${API_BASE}/sales`, formData, {
      responseType: "blob",
    });
    if (!response || !response.data || response.data.size === 0) {
      throw new Error("Risposta vuota dal server");
    }
    return response.data;
  } catch (error) {
    console.error("Errore uploadSales:", error);
    alert(
      "Errore durante l'upload del file Sales. Verifica la connessione o il backend."
    );
    return null;
  }
};

export const uploadOrders = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(`${API_BASE}/orders`, formData, {
      responseType: "blob",
    });
    if (!response || !response.data || response.data.size === 0) {
      throw new Error("Risposta vuota dal server");
    }
    return response.data;
  } catch (error) {
    console.error("Errore uploadOrders:", error);
    alert(
      "Errore durante l'upload del file Orders. Verifica la connessione o il backend."
    );
    return null;
  }
};
