<template>
  <div>
    <h2>Upload Files</h2>
    <UploadSales />
    <UploadOrders />
  </div>
</template>

<script setup>
import UploadSales from '../components/UploadSales.vue';
import UploadOrders from '../components/UploadOrders.vue';
</script>

<style scoped>
div {
  padding: 1rem;
}
</style>
