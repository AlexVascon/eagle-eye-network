<template>
  <v-container>
    <v-row class="justify-center">
      <v-col
        v-for="item in items"
        :key="item.value"
        cols="12"
        class="my-2"
      >
        <CameraCard 
          :title="item.title" 
          :subtitle="item.subtitle" 
          :text="item.text"
          :value="item.value"
          @click="() => navigateToDetail(router, item.value)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CameraCard from '../components/CameraCard.vue';
import { fetchCameras } from '../utils/cameras'; 
import { navigateToDetail } from '../utils/cameras';

const router = useRouter();
const items = ref(); 
const accessToken = localStorage.getItem('authToken');

const loadCameras = async () => {
  items.value = await fetchCameras(accessToken);
};

onMounted(() => {
  loadCameras();
});
</script>
