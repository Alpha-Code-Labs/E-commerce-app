import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import currencyRoutes from './routes/currencyRoutes.js';
import {   updateCurrencyRatesEveryHour,
  getLatestCurrencyRates,
  performCurrencyConversion } from './controllers/currencyController.js';

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

updateCurrencyRatesEveryHour();

// API routes
app.use('/api', currencyRoutes);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));



