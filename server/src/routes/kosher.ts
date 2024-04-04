import express from 'express';
import { getKosherItems, createKosherItem } from '../controllers/kosher.controller';

const kosherRouter = express.Router();

// Get all kosher items
kosherRouter.get('/', getKosherItems);

// Create a new kosher item
kosherRouter.post('/', createKosherItem);

export default kosherRouter;
