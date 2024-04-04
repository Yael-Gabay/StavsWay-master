"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = () => {
    const userRouter = (0, express_1.Router)();
    userRouter.post('/login', user_controller_1.GetUserByEmailAndPassword);
    userRouter.get('/:id', user_controller_1.GetUser);
    // userRouter.get('/donations/:id',GetAllDonationsOfUser)
    userRouter.get('/', user_controller_1.GetUserByEmailAndPassword);
    userRouter.post('/', user_controller_1.postNewUser);
    return userRouter;
};
exports.default = userRouter();
