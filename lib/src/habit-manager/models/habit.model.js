"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    days: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.HabitModel = mongoose_1.default.model("habits", schema);
