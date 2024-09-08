import axios from 'axios';
import { Router } from 'vue-router';
import { CameraItem } from '../types/cameraItem';
import { CameraResponse } from '../types/cameraResponse';

export const fetchCameras = async (accessToken: string | null): Promise<CameraItem[]> => {
  try {
    const response = await axios.get('http://localhost:3000/user/cameras', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      return mapCameras(response.data)
    } else {
      console.error('Failed to fetch cameras:', response.data.message);
      return [];
    }
  } catch (error) {
    console.error('Error during API call:', error);
    return [];
  }
};

const mapCameras = (data: CameraResponse[]): CameraItem[] => {
  return data.map((cam: any) => ({
    title: cam.name,
    subtitle: `Camera ID: ${cam.cameraId}`,
    text: `Additional details about the camera ${cam.name}.`,
    value: cam.cameraId
  }));
}

export const navigateToDetail = (router: Router, cameraId: string | number) => {
  router.push(`/camera/${cameraId}`);
};

