"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/orderRoutes.js
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order.controller");
const router = express_1.default.Router();
router.get('/placed', order_controller_1.getPlacedOrders);
router.get('/:id', order_controller_1.getOrder);
// POST route to create a new order
router.post('/', order_controller_1.createOrder);
// PATCH route to update the volunteer ID for an order
router.patch('/:id', order_controller_1.updateOrder);
router.get('/recipient/:recipientId', order_controller_1.getOrdersByRecipientId);
router.get('/volunteer/:volunteerId', order_controller_1.getOrdersByVolunteerId);
exports.default = router;
