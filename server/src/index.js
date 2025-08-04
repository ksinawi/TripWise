import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/plan', async (req, res) => {
  const { destinationName, length, budget, travellers } = req.body;

  console.log('Received:', { destinationName, length, budget, travellers });

  if (!destinationName) {
    return res.status(400).json({ error: 'Missing destinationName' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

    const prompt = `Create a ${length}-day travel itinerary for ${destinationName}. 
      The budget is $${budget}, and it's for ${travellers} traveler(s). 
      Include daily activities, food, hotel, and flight suggestions, and estimated costs.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const itinerary = response.text();

    res.json({ itinerary });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate itinerary' });
  }
});

app.listen(5001, () => {
  console.log("Server is Running");
});
