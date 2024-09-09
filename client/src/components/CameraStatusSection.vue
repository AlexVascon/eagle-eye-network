<template>
  <div class="pb-2">
  <v-card-title class="bp-0">
    <span class="font-weight-medium pr-2">Online Status:</span>
    <span :class="{'text-success': status.online, 'text-error': !status.online}">
      {{ status.online ? 'Online' : 'Offline' }}
    </span>
  </v-card-title>
  <v-card-subtitle>
    <span class="font-weight-medium">Firmware Status:</span> {{ status.firmwareStatus }}
  </v-card-subtitle>
  <v-card-subtitle>
    <span class="font-weight-medium">Last Connection Result:</span> {{ status.lastConnectionResult }}
  </v-card-subtitle>
</div>
</template>

<script setup>
const props = defineProps({
  status: Object
});
</script>
