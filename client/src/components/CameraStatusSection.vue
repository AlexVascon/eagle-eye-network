<template>
  <v-expand-transition>
    <v-list v-if="status">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-icon class="mr-2">mdi-wifi</v-icon> Online Status:
            <span :class="{'text-success': status.online, 'text-error': !status.online}">
              {{ status.online ? 'Online' : 'Offline' }}
            </span>
          </v-list-item-title>
          <v-list-item-subtitle>Firmware Status: {{ status.firmwareStatus }}</v-list-item-subtitle>
          <v-list-item-subtitle>Last Connection Result: {{ status.lastConnectionResult }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-expand-transition>
</template>

<script setup>
const props = defineProps({
  status: Object
});
</script>
