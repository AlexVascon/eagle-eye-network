<template>
  <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <v-icon class="mr-2">mdi-cog-outline</v-icon> Mode: {{ mode }}
        </v-list-item-title>
        <v-list-item-subtitle>Recording Mode: {{ recordingMode }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script setup>
const props = defineProps({
  mode: String,
  recordingMode: String
});
</script>
