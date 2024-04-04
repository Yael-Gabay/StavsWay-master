import { Request, Response } from 'express';
import { RecipientModel } from '../model/recipent.model';
import { Handler } from "express"
import logger from '../middleware/logEvents';
const createRecipient: Handler = async (req: Request, res: Response) => {
  try {
    const { allergies, kosher, ...userFields } = req.body;

    // Create a new recipient document with the provided data
    const newRecipient = await RecipientModel.create({
      ...userFields,
      allergies: allergies || [],
      kosher: kosher || [],
    });

    res.status(201).json({ message: 'Recipient created successfully', recipient: newRecipient });
  } catch (error) {
    res.status(400).json({ error: 'Invalid request or error occurred' });
  }
};

export { createRecipient };
