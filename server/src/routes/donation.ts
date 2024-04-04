import { Router } from 'express'
import { GetDonation, GetDonationsOfDonator, postNewDonation,getOpenDonations } from '../controllers/donation.controller'

const donationRouter = () => {
    const donationRouter = Router()
    donationRouter.get('/open', getOpenDonations);

    donationRouter.get('/:id',GetDonation)
    donationRouter.get('/user/:donatorId',GetDonationsOfDonator)
    donationRouter.post('/', postNewDonation)
    return donationRouter
}

export default donationRouter()