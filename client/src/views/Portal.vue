<template>
  <form @submit.prevent="handleLogin">
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

  <v-card-actions class="mt-4 d-flex justify-space-between">
    <v-btn color="primary" type="submit" :loading="loading" block>
      <v-icon left>mdi-login</v-icon> Submit
    </v-btn>
    <v-btn color="error" @click="handleReset" block>
      <v-icon left>mdi-close-circle</v-icon> Clear
    </v-btn>
  </v-card-actions>

  <v-alert v-if="errorMessage" type="error" class="mt-4">
    {{ errorMessage }}
  </v-alert>
  <v-alert v-if="isAuthenticated" type="success" class="mt-4">
    Authenticated!
  </v-alert>

  <div v-if="errorMessage">{{ errorMessage }}</div>
  <div v-if="isAuthenticated">Authenticated!</div>
</form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { login } from '../utils/portal.ts'

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
  login(email.value, password.value, router);
};
</script>