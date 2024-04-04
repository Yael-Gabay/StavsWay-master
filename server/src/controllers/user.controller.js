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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByEmailAndPassword = exports.GetUser = exports.postNewUser = void 0;
const user_model_1 = require("../model/user.model");
const postNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const user = new user_model_1.UserModel(Object.assign(Object.assign({}, body), { date: new Date() }));
        yield user.save();
        res.send("created");
    }
    catch (error) {
        res.send({ error });
    }
});
exports.postNewUser = postNewUser;
const GetUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userJson = yield user_model_1.UserModel.findById(id);
        res.json(userJson);
    }
    catch (error) {
        res.send({ error });
    }
});
exports.GetUser = GetUser;
const GetUserByEmailAndPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("runing");
    try {
        if (req.method === 'POST') {
            // For POST requests, extract email and password from the request body
            const { email, password } = req.body;
            console.log(email);
            // Find the user by email and password
            const user = yield user_model_1.UserModel.findOne({ email, password });
            console.log(user);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        }
        else {
            // Handle other HTTP methods if needed
            res.status(405).json({ error: 'Method Not Allowed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.GetUserByEmailAndPassword = GetUserByEmailAndPassword;
//   export const GetAllDonationsOfUser: Handler = async (req, res) => {
//     try {
//         const id =req.params.id
//         const userJson=await UserModel.find
//        res.json(userJson)
//     } catch (error) {
//         res.send({error})
//     }
//   }
