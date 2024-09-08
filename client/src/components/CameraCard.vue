<template>
  <v-card 
    class="pa-4" 
    elevation="2"
    @click="handleClick"
    outlined
  >
    <v-card-title class="text-h6">{{ title }}</v-card-title>
    <v-card-subtitle class="text-h6">{{ subtitle }}</v-card-subtitle>
    <v-card-text>{{ text }}</v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: String,
  subtitle: String,
  text: String,
  value: [String, Number]
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click', props.value);
};
</script>
