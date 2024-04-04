import { Handler } from "express";
import { OrderModel, OrderStatus } from "../model/order.model";
import { UserModel } from "../model/user.model";
import { DonationModel } from "../model/donation.model";
import logger from '../middleware/logEvents';
//expect in the body
const createOrder: Handler = async (req, res) => {
  try {
    const body = req.body;
    const volunteerId = "654d14c1b40d2045b3cc1acc"; // Set volunteerId to null

    // Fetch the donation details including the donatorId
    const donation = await DonationModel.findById(body.donationId);
    if (!donation) {
      logger.warn('[createOrder] Donation not found')
      return res.status(404).json({ error: "Donation not found" });
    }

    // Fetch the donator details using the donatorId from the donation
    const donator = await UserModel.findById(donation.donatorId);
    if (!donator) {
      logger.warn('[createOrder] error donor  not found')
      return res.status(404).json({ error: "donor not found" });
    }

    // Fetch the recipient details including the to field
    const recipient = await UserModel.findById(body.recipientId);
    if (!recipient) {
      logger.warn('[createOrder] error donator  not found')
      return res.status(404).json({ error: "Recipient not found" });
    }

    // Create a new order document and set the status to PLACED
    const newOrder = new OrderModel({
      ...body,
      volunteerId,
      status: OrderStatus.PLACED,
      from: {
        city: donator.location.city,
        street: donator.location.street,
        houseNumber: donator.location.houseNumber,
        floor: donator.location.floor,
        phoneNumber: donator.phoneNumber,
      },
      to: {
        city: recipient.location.city,
        street: recipient.location.street,
        houseNumber: recipient.location.houseNumber,
        floor: recipient.location.floor,
        phoneNumber: recipient.phoneNumber,
      },
    });

    await newOrder.save();

    res.status(201).json({ message: "Order created successfully", order: newOrder });
  } catch (error: any) {
    logger.error(`[createOrder] error ${error}`);
    if (error.name === "ValidationError") {
      // Log validation errors
      console.error("Validation Errors:", error.errors);
    }

    res.status(400).json({ error: "Invalid request or error occurred" });
  }
};

const getOrder: Handler = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await OrderModel.findById(id);
    res.json(order);
  } catch (error) {
    logger.error(`[getOrder] error ${error}`);
    res.status(500).json({ error: "Error occurred while fetching the order" });
  }
};
const updateOrder: Handler = async (req, res) => {
  try {
    const orderId = req.params.id;
    const volunteerId = req.body.volunteerId;
    const statusCode = req.body.orderStatusCode;

    const order = await OrderModel.findById(orderId);
    if (!order) {
      logger.warn(`[updateOrder] Order not found`);
      return res.status(404).json({ error: "Order not found" });
    }
    if (statusCode > 3 && statusCode < 1) {
      logger.warn(`[updateOrder] Order status code invalid`);
      return res
        .status(404)
        .json({
          error: "order status code invalid. can be 1,2,3",
        });
    }

    order.volunteerId = volunteerId;
    order.status = statusCode;
    await order.save();

    res.json({ message: "Volunteer ID updated successfully", order });
  } catch (error) {
      logger.error(`[updateOrder] ${error}`);
      res.status(400).json({ error: "Invalid request or error occurred" });
  }
};

const getOrdersByRecipientId: Handler = async (req, res) => {
  try {
    const recipientId = req.params.recipientId;

    const orders = await OrderModel.find({ recipientId });

    res.json(orders);
  } catch (error) {
    logger.error(`[getOrdersByRecipientId] ${error}`);
    res
      .status(500)
      .json({
        error: "An error occurred while fetching orders by recipient ID",
      });
  }
};

const getPlacedOrders: Handler = async (req, res) => {
  try {
    logger.info(`the order status is ${OrderStatus.PLACED}`);
    const placedOrders = await OrderModel.find({ status: OrderStatus.PLACED });
    logger.info(`${placedOrders}`);

    res.json(placedOrders);
  } catch (error) {
    logger.error(`[getPlacedOrders] ${error}`);
    res
      .status(500)
      .json({ error: "An error occurred while fetching placed orders" });
  }
};

const getOrdersByVolunteerId: Handler = async (req, res) => {
  try{ const volunteerId = req.params.volunteerId; }
  catch (error){
    res.status(500)
      .json({
        error: `volunteer id not found`,
      });
    return;
  }
  const volunteerId = req.params.volunteerId;
  try {
    logger.info(`[getOrdersByVolunteerId] fetching orders of volunteer ${volunteerId}`);
    const orders = await OrderModel.find({ volunteerId:volunteerId});

    res.json(orders);
  } catch (error) {
    res
      .status(500)
      .json({
        error: `An error occurred while fetching orders by volunteer ID ${req.params.volunteerId}`,
      });
  }
};

export {
  createOrder,
  getOrder,
  updateOrder,
  getOrdersByRecipientId,
  getPlacedOrders,
  getOrdersByVolunteerId,
};
