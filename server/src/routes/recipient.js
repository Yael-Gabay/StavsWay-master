"use strict";
// routes/recipientRoutes.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipient_controller_1 = require("../controllers/recipient.controller");
const router = express_1.default.Router();
// POST request to create a new recipient
router.post('/', recipient_controller_1.createRecipient);
exports.default = router;
