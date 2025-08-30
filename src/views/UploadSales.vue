<template>
  <div class="upload">
    <h3>Upload Sales File</h3>
    <input type="file" @change="handleFile" />
    <button @click="upload">Upload</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { uploadSales } from '../services/api';

const file = ref(null);

// Salva il file selezionato
const handleFile = (event) => {
  file.value = event.target.files[0];
};

// Invia il file e scarica il risultato
const upload = async () => {
  if (!file.value) return alert('Select a file first');
  const blob = await uploadSales(file.value);
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sales_result.xlsx';
  a.click();
};
</script>

<style scoped>
.upload {
  margin: 1rem;
}
</style>
