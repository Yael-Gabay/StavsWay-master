// routes/orderRoutes.js
import express from 'express';
import { createOrder,getOrder ,getOrdersByRecipientId,getPlacedOrders,getOrdersByVolunteerId, updateOrder } from '../controllers/order.controller';

const router = express.Router();


router.get('/placed', getPlacedOrders);

router.get('/:id', getOrder);

// POST route to create a new order
router.post('/', createOrder);

// PATCH route to update the volunteer ID for an order
router.patch('/:id', updateOrder);

router.get('/recipient/:recipientId', getOrdersByRecipientId);


router.get('/volunteer/:volunteerId', getOrdersByVolunteerId);


export default router;
