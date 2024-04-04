import { Request, Response } from 'express';
import { KosherModel } from '../model/allergy-kosher.model';
import logger from '../middleware/logEvents';
// Get all kosher items
export const getKosherItems = async (req: Request, res: Response) => {
  try {
    const kosherItems = await KosherModel.find();
    res.json(kosherItems);
  } catch (error) {
    logger.error(`[getKosherItems]: ${error}`)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new kosher item
export const createKosherItem = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    // Validate input
    if (!name) {
      return res.status(400).json({ error: 'Name is required for the kosher item' });
    }

    // Check if the kosher item already exists
    const existingKosherItem = await KosherModel.findOne({ name });
    if (existingKosherItem) {
      return res.status(400).json({ error: 'Kosher item with the same name already exists' });
    }

    // Create a new kosher item
    const newKosherItem = await KosherModel.create({ name });

    res.status(201).json(newKosherItem);
  } catch (error) {
    logger.error(`[createKosherItem]: ${error}`)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
