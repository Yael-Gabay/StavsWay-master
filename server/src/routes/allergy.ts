import express from 'express';
import { getAllergies, createAllergy } from '../controllers/allergy.conroller';

const allergyRouter = express.Router();

// Get all allergies
allergyRouter.get('/', getAllergies);

// Create a new allergy
allergyRouter.post('/', createAllergy);

export default allergyRouter;
