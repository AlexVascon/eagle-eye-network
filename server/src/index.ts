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

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));