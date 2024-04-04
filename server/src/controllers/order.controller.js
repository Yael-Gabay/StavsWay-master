"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersByVolunteerId = exports.getPlacedOrders = exports.getOrdersByRecipientId = exports.updateOrder = exports.getOrder = exports.createOrder = void 0;
const order_model_1 = require("../model/order.model");
const user_model_1 = require("../model/user.model");
const donation_model_1 = require("../model/donation.model");
const logEvents_1 = __importDefault(require("../middleware/logEvents"));
//expect in the body
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const volunteerId = "654d14c1b40d2045b3cc1acc"; // Set volunteerId to null
        // Fetch the donation details including the donatorId
        const donation = yield donation_model_1.DonationModel.findById(body.donationId);
        if (!donation) {
            logEvents_1.default.warn('[createOrder] Donation not found');
            return res.status(404).json({ error: "Donation not found" });
        }
        // Fetch the donator details using the donatorId from the donation
        const donator = yield user_model_1.UserModel.findById(donation.donatorId);
        if (!donator) {
            logEvents_1.default.warn('[createOrder] error donor  not found');
            return res.status(404).json({ error: "donor not found" });
        }
        // Fetch the recipient details including the to field
        const recipient = yield user_model_1.UserModel.findById(body.recipientId);
        if (!recipient) {
            logEvents_1.default.warn('[createOrder] error donator  not found');
            return res.status(404).json({ error: "Recipient not found" });
        }
        // Create a new order document and set the status to PLACED
        const newOrder = new order_model_1.OrderModel(Object.assign(Object.assign({}, body), { volunteerId, status: order_model_1.OrderStatus.PLACED, from: {
                city: donator.location.city,
                street: donator.location.street,
                houseNumber: donator.location.houseNumber,
                floor: donator.location.floor,
                phoneNumber: donator.phoneNumber,
            }, to: {
                city: recipient.location.city,
                street: recipient.location.street,
                houseNumber: recipient.location.houseNumber,
                floor: recipient.location.floor,
                phoneNumber: recipient.phoneNumber,
            } }));
        yield newOrder.save();
        res.status(201).json({ message: "Order created successfully", order: newOrder });
    }
    catch (error) {
        logEvents_1.default.error(`[createOrder] error ${error}`);
        if (error.name === "ValidationError") {
            // Log validation errors
            console.error("Validation Errors:", error.errors);
        }
        res.status(400).json({ error: "Invalid request or error occurred" });
    }
});
exports.createOrder = createOrder;
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const order = yield order_model_1.OrderModel.findById(id);
        res.json(order);
    }
    catch (error) {
        logEvents_1.default.error(`[getOrder] error ${error}`);
        res.status(500).json({ error: "Error occurred while fetching the order" });
    }
});
exports.getOrder = getOrder;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderId = req.params.id;
        const volunteerId = req.body.volunteerId;
        const statusCode = req.body.orderStatusCode;
        const order = yield order_model_1.OrderModel.findById(orderId);
        if (!order) {
            logEvents_1.default.warn(`[updateOrder] Order not found`);
            return res.status(404).json({ error: "Order not found" });
        }
        if (statusCode > 3 && statusCode < 1) {
            return res
                .status(404)
                .json({
                error: "status code of order to update invalid, can be 1,2,3",
            });
        }
        order.volunteerId = volunteerId;
        order.status = statusCode;
        yield order.save();
        res.json({ message: "Volunteer ID updated successfully", order });
    }
    catch (error) {
        res.status(400).json({ error: "Invalid request or error occurred" });
    }
});
exports.updateOrder = updateOrder;
const getOrdersByRecipientId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipientId = req.params.recipientId;
        const orders = yield order_model_1.OrderModel.find({ recipientId });
        res.json(orders);
    }
    catch (error) {
        res
            .status(500)
            .json({
            error: "An error occurred while fetching orders by recipient ID",
        });
    }
});
exports.getOrdersByRecipientId = getOrdersByRecipientId;
const getPlacedOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`the order status is ${order_model_1.OrderStatus.PLACED}`);
    try {
        console.log(`the order status is ${order_model_1.OrderStatus.PLACED}`);
        const placedOrders = yield order_model_1.OrderModel.find({ status: order_model_1.OrderStatus.PLACED });
        console.log(placedOrders);
        res.json(placedOrders);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ error: "An error occurred while fetching placed orders" });
    }
});
exports.getPlacedOrders = getPlacedOrders;
const getOrdersByVolunteerId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const volunteerId = req.params.volunteerId;
        console.log(volunteerId);
        const orders = yield order_model_1.OrderModel.find({ volunteerId: volunteerId });
        res.json(orders);
    }
    catch (error) {
        res
            .status(500)
            .json({
            error: "An error occurred while fetching orders by volunteer ID",
        });
    }
});
exports.getOrdersByVolunteerId = getOrdersByVolunteerId;
