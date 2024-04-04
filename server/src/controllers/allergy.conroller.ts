import { Request, Response } from 'express';
import { AllergyModel } from '../model/allergy-kosher.model';
import logger from '../middleware/logEvents';

// Get all allergies
export const getAllergies = async (req: Request, res: Response) => {
  try {
    const allergies = await AllergyModel.find();
    res.json(allergies);
  } catch (error) {
    logger.error(`[getAllergies] ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new allergy
export const createAllergy = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    // Validate input
    if (!name) {
      logger.error("[createAllergy]: Name is required for the allergy");
      return res.status(400).json({ error: 'Name is required for the allergy' });
    }

    // Check if the allergy already exists
    const existingAllergy = await AllergyModel.findOne({ name });
    if (existingAllergy) {
      logger.warn("[createAllergy]: Allergy with the same name already exists");
      return res.status(400).json({ error: 'Allergy with the same name already exists' });
    }

    // Create a new allergy
    const newAllergy = await AllergyModel.create({ name });

    res.status(201).json(newAllergy);
  } catch (error) {
    logger.warn("[createAllergy]: error");
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
