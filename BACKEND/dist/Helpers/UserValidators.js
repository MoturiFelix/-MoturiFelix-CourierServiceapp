"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.UserSchema2 = void 0;
const Joi_1 = __importDefault(require("Joi"));
exports.UserSchema2 = Joi_1.default.object({
    fullNames: Joi_1.default.string().required(),
    email: Joi_1.default.string().required().email(),
    password: Joi_1.default.string().required().min(8),
});
exports.UserSchema = Joi_1.default.object({
    email: Joi_1.default.string().required().email(),
    password: Joi_1.default.string().required().min(8)
});
