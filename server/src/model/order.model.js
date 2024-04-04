"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.OrderStatus = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PLACED"] = 1] = "PLACED";
    OrderStatus[OrderStatus["ACCEPTED"] = 2] = "ACCEPTED";
    OrderStatus[OrderStatus["ARRIVED"] = 3] = "ARRIVED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
const OrderSchema = new mongoose_1.default.Schema({
    donationId: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        ref: 'Donation',
    },
    recipientId: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        ref: 'Recipient',
    },
    amount: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true,
    },
    volunteerId: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        ref: 'User',
    },
    status: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true,
    },
    from: {
        type: {
            city: mongoose_1.default.Schema.Types.String,
            street: mongoose_1.default.Schema.Types.String,
            houseNumber: mongoose_1.default.Schema.Types.Number,
            floor: mongoose_1.default.Schema.Types.Number,
            phoneNumber: mongoose_1.default.Schema.Types.String
        },
        required: true,
    },
    to: {
        type: {
            city: mongoose_1.default.Schema.Types.String,
            street: mongoose_1.default.Schema.Types.String,
            houseNumber: mongoose_1.default.Schema.Types.Number,
            floor: mongoose_1.default.Schema.Types.Number,
            phoneNumber: mongoose_1.default.Schema.Types.String
        },
        required: true,
    },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret._v;
        },
    },
});
const OrderModel = mongoose_1.default.model('Order', OrderSchema);
exports.OrderModel = OrderModel;
