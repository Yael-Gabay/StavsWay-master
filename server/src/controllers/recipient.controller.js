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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRecipient = void 0;
const recipent_model_1 = require("../model/recipent.model");
const createRecipient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { allergies, kosher } = _a, userFields = __rest(_a, ["allergies", "kosher"]);
        // Create a new recipient document with the provided data
        const newRecipient = yield recipent_model_1.RecipientModel.create(Object.assign(Object.assign({}, userFields), { allergies: allergies || [], kosher: kosher || [] }));
        res.status(201).json({ message: 'Recipient created successfully', recipient: newRecipient });
    }
    catch (error) {
        res.status(400).json({ error: 'Invalid request or error occurred' });
    }
});
exports.createRecipient = createRecipient;
