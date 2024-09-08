<template>
  <div>
  <v-card-title>
    <v-icon color="primary" class="mr-2">mdi-camera</v-icon>
    {{ name }}
  </v-card-title>
  <v-card-subtitle>
    <v-icon color="secondary" class="mr-2">mdi-shield-account</v-icon>
    Account ID: {{ accountId }}
  </v-card-subtitle>
</div>
</template>

<script setup>
const props = defineProps({
  name: String,
  accountId: String
});
</script>
