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
exports.getOpenDonations = exports.GetDonationsOfDonator = exports.GetDonation = exports.postNewDonation = void 0;
const donation_model_1 = require("../model/donation.model");
const order_model_1 = require("../model/order.model");
const logEvents_1 = __importDefault(require("../middleware/logEvents"));
const postNewDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        // Add an empty array for orders when creating a new donation
        const donation = new donation_model_1.DonationModel(Object.assign(Object.assign({}, body), { date: new Date() }));
        yield donation.save();
        res.send('created');
    }
    catch (error) {
        logEvents_1.default.error('[postNewDonation]: %s', error);
        res.send({ error });
    }
});
exports.postNewDonation = postNewDonation;
const GetDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const donationJson = yield donation_model_1.DonationModel.findById(id);
        res.json(donationJson);
    }
    catch (error) {
        logEvents_1.default.error('[GetDonation]: %s', error);
        res.send({ error });
    }
});
exports.GetDonation = GetDonation;
const GetDonationsOfDonator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.donatorId;
        const donationJson = yield donation_model_1.DonationModel.find({ donatorId: id });
        res.json(donationJson);
    }
    catch (error) {
        logEvents_1.default.error('[GetDonationsOfDonator]: %s', error);
        res.send({ error });
    }
});
exports.GetDonationsOfDonator = GetDonationsOfDonator;
//to recipent 
const getOpenDonations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const openDonations = yield donation_model_1.DonationModel.find();
        const filteredDonations = [];
        for (const donation of openDonations) {
            // Fetch related orders for each donation
            const orders = yield order_model_1.OrderModel.find({ donationId: donation.id });
            const totalAmount = orders.reduce((total, order) => total + order.amount, 0);
            console.log(`the donation is ${donation} and the the total amount is ${totalAmount}  and the donation amount is ${donation.amount}`);
            // Check if the total amount for the current donation is less than the donation amount
            if (totalAmount < donation.amount) {
                filteredDonations.push(donation);
            }
        }
        res.json(filteredDonations);
    }
    catch (error) {
        logEvents_1.default.error('[getOpenDonations]: %s', error);
        res.status(500).json({ error: 'An error occurred while fetching open donations' });
    }
});
exports.getOpenDonations = getOpenDonations;
