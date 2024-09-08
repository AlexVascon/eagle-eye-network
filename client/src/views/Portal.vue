<!-- views/Portal.vue -->
<template>
  <form @submit.prevent="login">
    <v-text-field
    v-model="email"
    :error-messages="emailErrorMessage"
    label="E-mail"
  ></v-text-field>

  <v-text-field
    v-model="password"
    :counter="10"
    :error-messages="passwordErrorMessage"
    label="Password"
  ></v-text-field>

  <v-btn class="me-4" type="submit"> submit </v-btn>
  <v-btn class="me-4" @click="handleReset"> clear </v-btn>

  <div v-if="errorMessage">{{ errorMessage }}</div>
  <div v-if="isAuthenticated">Authenticated!</div>
</form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
try {
  const response = await axios.post('http://localhost:3000/auth/callback', {
    email: email.value,
    password: password.value
  });

  if (response.status === 200) {
    localStorage.setItem('authToken', response.data.token);
    router.push('/cameras');

  } else {
    console.error('Login failed:', response.data.message);
  }
} catch (error) {
  console.error('Error during login:', error);
}
};
</script>