"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const donation_controller_1 = require("../controllers/donation.controller");
const donationRouter = () => {
    const donationRouter = (0, express_1.Router)();
    donationRouter.get('/open', donation_controller_1.getOpenDonations);
    donationRouter.get('/:id', donation_controller_1.GetDonation);
    donationRouter.get('/user/:donatorId', donation_controller_1.GetDonationsOfDonator);
    donationRouter.post('/', donation_controller_1.postNewDonation);
    return donationRouter;
};
exports.default = donationRouter();
