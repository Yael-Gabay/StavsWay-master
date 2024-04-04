    import {response, Router} from 'express'
    import { GetUser, GetUserByEmailAndPassword, postNewUser } from '../controllers/user.controller'


    const userRouter = () => {
        const userRouter = Router()
        userRouter.post('/login', GetUserByEmailAndPassword)

        userRouter.get('/:id',GetUser)
        // userRouter.get('/donations/:id',GetAllDonationsOfUser)
        userRouter.get('/',GetUserByEmailAndPassword)

        userRouter.post('/', postNewUser)
        return userRouter
    }

        export default userRouter()