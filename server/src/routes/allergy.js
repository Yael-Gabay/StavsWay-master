"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const allergy_conroller_1 = require("../controllers/allergy.conroller");
const allergyRouter = express_1.default.Router();
// Get all allergies
allergyRouter.get('/', allergy_conroller_1.getAllergies);
// Create a new allergy
allergyRouter.post('/', allergy_conroller_1.createAllergy);
exports.default = allergyRouter;
