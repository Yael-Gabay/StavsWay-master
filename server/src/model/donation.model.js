"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Create a schema for the Donation document
const DonationSchema = new mongoose_1.default.Schema({
    donatorId: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        ref: 'User', // Reference the User model or the name of your user model
    },
    dishName: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    description: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    image: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    createdOn: {
        type: mongoose_1.default.Schema.Types.Date,
        required: true,
    },
    updatedOn: {
        type: mongoose_1.default.Schema.Types.Date,
        required: true,
    },
    expriedDate: {
        type: mongoose_1.default.Schema.Types.Date,
        required: true,
    },
    amount: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true,
    },
    mealType: {
        type: mongoose_1.default.Schema.Types.String,
        required: false,
    },
    allergies: [{
            type: mongoose_1.default.Schema.Types.String,
            required: true
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
// Create the Donation model
const DonationModel = mongoose_1.default.model('Donation', DonationSchema);
exports.DonationModel = DonationModel;
