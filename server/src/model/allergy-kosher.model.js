"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KosherModel = exports.AllergyModel = void 0;
// allergy.model.ts
const mongoose_1 = __importDefault(require("mongoose"));
const AllergySchema = new mongoose_1.default.Schema({
    name: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
});
const AllergyModel = mongoose_1.default.model('Allergy', AllergySchema);
exports.AllergyModel = AllergyModel;
const KosherSchema = new mongoose_1.default.Schema({
    name: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
});
const KosherModel = mongoose_1.default.model('Kosher', KosherSchema);
exports.KosherModel = KosherModel;
