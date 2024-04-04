import { Handler } from "express"
import { DonationModel} from "../model/donation.model"
import { OrderModel } from '../model/order.model';
import logger from '../middleware/logEvents';
export const postNewDonation: Handler = async (req, res) => {
  try {
    const body = req.body;
    // Add an empty array for orders when creating a new donation
    const donation = new DonationModel({ ...body, date: new Date()});
    await donation.save();

    res.send('created');
  } catch (error) {
      logger.error(`[postNewDonation]: ${error}`);
      res.send({ error });
  }
};


export const GetDonation: Handler = async (req, res) => {
    try {
        const id =req.params.id
        const donationJson=await DonationModel.findById(id)
        res.json(donationJson)
    } catch (error) {
        logger.error('[GetDonation]: ${error}');
        res.send({error})
    }
  }

export const GetDonationsOfDonator: Handler = async (req, res) => {
    try {
        const id =req.params.donatorId
        const donationJson=await DonationModel.find({donatorId:id})
        res.json(donationJson)
    } catch (error) {
        logger.error('[GetDonationsOfDonator]: ${error}');
        res.send({error})
    }
  }

//to recipent 
export const getOpenDonations: Handler = async (req, res) => {
  try {
    const openDonations = await DonationModel.find();
    const filteredDonations = [];

    for (const donation of openDonations) {
      // Fetch related orders for each donation
      const orders = await OrderModel.find({ donationId: donation.id });
      const totalAmount = orders.reduce((total, order) => total + order.amount, 0);
      console.log(`the donation is ${donation} and the the total amount is ${totalAmount}  and the donation amount is ${donation.amount}`);
      
      // Check if the total amount for the current donation is less than the donation amount
      if (totalAmount < donation.amount) {
        filteredDonations.push(donation);
      }
    }

    res.json(filteredDonations);
  } catch (error) {
      logger.error('[getOpenDonations]: ${error}');
      res.status(500).json({ error: 'An error occurred while fetching open donations' });
  }
};


  
  