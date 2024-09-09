<template>
  <v-expand-transition>
    <v-list v-if="mode">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
             Mode: {{ mode }}
          </v-list-item-title>
          <v-list-item-subtitle>Recording Mode: {{ recordingMode }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-expand-transition>
</template>

<script setup>
const props = defineProps({
  mode: String,
  recordingMode: String
});
</script>
