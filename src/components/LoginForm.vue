<template>
  <div class="login-form">
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="otp" placeholder="OTP" />
    <button @click="submit">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginWithOTP } from '../services/auth';

const email = ref('');
const otp = ref('');
const router = useRouter();

// Funzione di login simulata
const submit = async () => {
  const success = await loginWithOTP(email.value, otp.value);
  if (success) router.push('/dashboard');
  else alert('Invalid OTP');
};
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
