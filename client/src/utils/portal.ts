import axios from 'axios';
import { Router } from 'vue-router';


export const login = async (email: string, password: string, router: Router) => {
  try {
    const response = await axios.post('http://localhost:3000/auth/callback', {
      email: email,
      password: password
    });

    if (response.status === 200) {
      localStorage.setItem('authToken', response.data);
      router.push('/cameras');
    } else {
      console.error('Login failed:', response.data.message);
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};
