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
exports.createKosherItem = exports.getKosherItems = void 0;
const allergy_kosher_model_1 = require("../model/allergy-kosher.model");
const logEvents_1 = __importDefault(require("../middleware/logEvents"));
// Get all kosher items
const getKosherItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const kosherItems = yield allergy_kosher_model_1.KosherModel.find();
        res.json(kosherItems);
    }
    catch (error) {
        logEvents_1.default.error(`[getKosherItems]: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getKosherItems = getKosherItems;
// Create a new kosher item
const createKosherItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        // Validate input
        if (!name) {
            return res.status(400).json({ error: 'Name is required for the kosher item' });
        }
        // Check if the kosher item already exists
        const existingKosherItem = yield allergy_kosher_model_1.KosherModel.findOne({ name });
        if (existingKosherItem) {
            return res.status(400).json({ error: 'Kosher item with the same name already exists' });
        }
        // Create a new kosher item
        const newKosherItem = yield allergy_kosher_model_1.KosherModel.create({ name });
        res.status(201).json(newKosherItem);
    }
    catch (error) {
        logEvents_1.default.error(`[createKosherItem]: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createKosherItem = createKosherItem;
