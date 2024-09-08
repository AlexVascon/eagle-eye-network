<template>
  <v-container class="mx-auto my-4" max-width="600">
    <v-card>
      <CameraCardTitle 
        :name="cameraDetails.details.name"
        :accountId="cameraDetails.details.accountId"
      />

      <v-divider></v-divider>

      <CameraDetailsSection 
        :mode="cameraDetails.mode.mode" 
        :recordingMode="cameraDetails.mode.recordingMode"
      />

      <v-divider></v-divider>

      <CameraStatusSection 
        :status="cameraDetails.status"
      />

      <v-divider></v-divider>

      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <strong>Device Type ID:</strong> {{ cameraDetails.details.deviceTypeId }}
          </v-col>
          <v-col cols="12" sm="6">
            <strong>MAC Address:</strong> {{ cameraDetails.details.ethMacAddress }}
          </v-col>
          <v-col cols="12" sm="6">
            <strong>Zone ID:</strong> {{ cameraDetails.details.zoneId }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchCameraDetails } from '../utils/details.ts';
import CameraCardTitle from '../components/CameraCardTitle.vue';
import CameraDetailsSection from '../components/CameraDetailsSection.vue';
import CameraStatusSection from '../components/CameraStatusSection.vue';

const route = useRoute();
const cameraId = route.params.id;

const cameraDetails = ref({
  details: {},
  mode: {},
  status: {}
});
const loading = ref(true);
const error = ref(null);

const loadCameraDetails = async () => {
  const details = await fetchCameraDetails(cameraId);

  if (details) {
    cameraDetails.value = details;
  } else {
    error.value = 'Failed to fetch camera details.';
  }
  
  loading.value = false;
};

onMounted(() => {
  loadCameraDetails();
});
</script>

<style scoped>
.text-success {
  color: green;
}
.text-error {
  color: red;
}
</style>
