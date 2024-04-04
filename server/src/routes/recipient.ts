// routes/recipientRoutes.js

import express from 'express';
import { createRecipient } from '../controllers/recipient.controller';

const router = express.Router();

// POST request to create a new recipient
router.post('/', createRecipient);

export default router;
    