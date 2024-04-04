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
exports.createAllergy = exports.getAllergies = void 0;
const allergy_kosher_model_1 = require("../model/allergy-kosher.model");
const logEvents_1 = __importDefault(require("../middleware/logEvents"));
// Get all allergies
const getAllergies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allergies = yield allergy_kosher_model_1.AllergyModel.find();
        res.json(allergies);
    }
    catch (error) {
        logEvents_1.default.error("[getAllergies] %s", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getAllergies = getAllergies;
// Create a new allergy
const createAllergy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        // Validate input
        if (!name) {
            logEvents_1.default.error("[createAllergy]: Name is required for the allergy");
            return res.status(400).json({ error: 'Name is required for the allergy' });
        }
        // Check if the allergy already exists
        const existingAllergy = yield allergy_kosher_model_1.AllergyModel.findOne({ name });
        if (existingAllergy) {
            logEvents_1.default.warning("[createAllergy]: Allergy with the same name already exists");
            return res.status(400).json({ error: 'Allergy with the same name already exists' });
        }
        // Create a new allergy
        const newAllergy = yield allergy_kosher_model_1.AllergyModel.create({ name });
        res.status(201).json(newAllergy);
    }
    catch (error) {
        logEvents_1.default.warning("[createAllergy]: error");
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createAllergy = createAllergy;
