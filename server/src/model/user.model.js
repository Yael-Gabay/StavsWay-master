"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var UserType;
(function (UserType) {
    UserType["Donator"] = "Donator";
    UserType["Recipient"] = "Recipient";
    UserType["Volunteer"] = "Volunteer";
})(UserType || (UserType = {}));
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "Male";
    GenderType["Female"] = "Female";
})(GenderType || (GenderType = {}));
const UserSchema = new mongoose_1.default.Schema({
    id: {
        type: mongoose_1.default.Schema.Types.String,
        require: true,
    },
    firstName: {
        type: mongoose_1.default.Schema.Types.String,
        require: true,
    },
    lastName: {
        type: mongoose_1.default.Schema.Types.String,
        require: true,
    },
    password: {
        type: mongoose_1.default.Schema.Types.String,
        require: true,
    },
    gender: {
        type: mongoose_1.default.Schema.Types.String,
        enum: Object.values(GenderType),
        require: true,
    },
    phoneNumber: {
        type: mongoose_1.default.Schema.Types.String,
        require: true,
    },
    email: {
        type: mongoose_1.default.Schema.Types.String,
        require: true,
    },
    userType: {
        type: mongoose_1.default.Schema.Types.String,
        discriminatorKey: 'userType',
        enum: Object.values(UserType),
        require: true,
    },
    location: {
        type: {
            city: mongoose_1.default.Schema.Types.String,
            street: mongoose_1.default.Schema.Types.String,
            houseNumber: mongoose_1.default.Schema.Types.Number,
            floor: mongoose_1.default.Schema.Types.Number,
        },
        require: true,
    },
    approvedType: {
        type: mongoose_1.default.Schema.Types.Boolean,
        require: true,
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
const UserModel = mongoose_1.default.model('User', UserSchema);
exports.UserModel = UserModel;
