<template>
  <div className="pb-2">
  <v-card-title class="pb-0">
    {{ name }}
  </v-card-title>
  <v-card-subtitle>
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
