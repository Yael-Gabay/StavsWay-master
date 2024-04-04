"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const kosher_controller_1 = require("../controllers/kosher.controller");
const kosherRouter = express_1.default.Router();
// Get all kosher items
kosherRouter.get('/', kosher_controller_1.getKosherItems);
// Create a new kosher item
kosherRouter.post('/', kosher_controller_1.createKosherItem);
exports.default = kosherRouter;
