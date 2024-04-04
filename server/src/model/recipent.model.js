"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipientModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const RecipientSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.String,
        ref: 'User',
        required: true,
    },
    allergies: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Allergy', // Reference the Allergy model
        }],
    kosher: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Kosher', // Reference the Kosher model
        }],
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret._v;
        }
    }
});
const RecipientModel = mongoose_1.default.model('Recipient', RecipientSchema);
exports.RecipientModel = RecipientModel;
