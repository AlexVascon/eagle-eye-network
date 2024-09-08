import axios from 'axios';


interface CameraDetails {
  details: Record<string, any>;
  mode: Record<string, any>;
  status: Record<string, any>;
}


export const fetchCameraDetails = async (cameraId: string | number): Promise<CameraDetails | null> => {
  try {
    const accessToken = localStorage.getItem('authToken');

    const response = await axios.get(`http://localhost:3000/camera/details/${cameraId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Failed to fetch camera details:', response.data.message);
      return null;
    }
  } catch (err) {
    console.error('Error fetching camera details:', err);
    return null;
  }
};
