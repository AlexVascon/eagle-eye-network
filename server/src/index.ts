import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 3000;
const app = express();

app.use(cors())
app.options('/auth/callback', cors());
app.use(express.json());


app.post('/auth/callback', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const response = await axios.post(`https://rest.cameramanager.com/oauth/token?grant_type=password&scope=write&username=${email}%20&password=${password}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);

    const accessToken = response.data.access_token

    res.status(200).json(accessToken)
  } catch (error) {
    console.error('Error exchanging authorization code:', error);
    res.status(500)
  }
});

app.get('/user/cameras', async (req: Request, res: Response) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  try {
    const response = await axios.get('http://rest.cameramanager.com/rest/v2.4/cameras', {
      headers: {
        'Authorization': authHeader, 
        'Content-Type': 'application/json'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching cameras:', error);
    res.status(500).json({ message: 'Failed to fetch cameras' });
  }

})

app.get('/camera/details/:id', async (req: Request, res: Response) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  const cameraId = req.params.id;
  const headers = {
    'Authorization': authHeader,
    'Content-Type': 'application/json',
  };

  const fetchWithErrorHandling = async (url: string) => {
    return axios.get(url, { headers }).catch((error) => {
      console.error(`Error fetching from ${url}:`, error);
      return null; 
    });
  };

  try {
    const [statusResponse, modeResponse, detailsResponse] = await Promise.all([
      fetchWithErrorHandling(`http://rest.cameramanager.com/rest/v2.4/cameras/${cameraId}/status`),
      fetchWithErrorHandling(`http://rest.cameramanager.com/rest/v2.2/cameras/${cameraId}/mode`),
      fetchWithErrorHandling(`http://rest.cameramanager.com/rest/v2.4/cameras/${cameraId}`),
    ]);

    res.status(200).json({
      status: statusResponse ? statusResponse.data : null,
      mode: modeResponse ? modeResponse.data : null,
      details: detailsResponse ? detailsResponse.data : null,
    });
  } catch (error) {
    console.error('Error fetching camera details:', error);
    res.status(500).json({ message: 'Failed to fetch camera details' });
  }

})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));