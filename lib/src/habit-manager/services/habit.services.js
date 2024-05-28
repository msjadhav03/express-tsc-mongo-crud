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
exports.fetchExistingHabit = exports.updateExistingHabit = exports.deleteExistingHabit = exports.addNewHabit = void 0;
const constants_1 = require("../../common/config/constants");
const messages_1 = require("../../common/config/messages");
const status_codes_1 = require("../../common/config/status-codes");
const logger_1 = __importDefault(require("../../common/utils/logger"));
const shortUUID_1 = require("../../common/utils/shortUUID");
const habit_model_1 = require("../models/habit.model");
const addNewHabit = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const shortUUID = (0, shortUUID_1.getShortUUID)();
    try {
        logger_1.default.info({
            commonMessage: messages_1.messages.HABIT_INSERT_STARTED,
            shortUUID,
            module: constants_1.MODULE_NAME.HABIT,
        });
        const dataToBeInserted = new habit_model_1.HabitModel(data);
        const result = yield dataToBeInserted.save();
        return {
            statusCode: status_codes_1.statusCodes.CREATED,
            message: messages_1.messages.ADD_SUCCESS,
            data: [result],
        };
    }
    catch (error) {
        logger_1.default.info({
            commonMessage: `${messages_1.messages.HABIT_INSERT_FAILED} ${error}`,
            shortUUID,
            module: constants_1.MODULE_NAME.HABIT,
        });
        throw new Error(error.message);
    }
});
exports.addNewHabit = addNewHabit;
const deleteExistingHabit = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const shortUUID = (0, shortUUID_1.getShortUUID)();
    try {
        logger_1.default.info({
            commonMessage: messages_1.messages.HABIT_DELETE_STARTED,
            shortUUID,
            module: constants_1.MODULE_NAME.HABIT,
        });
        const deletedHabit = yield habit_model_1.HabitModel.deleteOne({ _id: data.id });
        return {
            statusCode: status_codes_1.statusCodes.SUCCESS,
            message: messages_1.messages.DELETE_SUCCESS,
            data: [deletedHabit],
        };
    }
    catch (error) {
        logger_1.default.info({
            commonMessage: `${messages_1.messages.HABIT_DELETE_FAILED} ${error}`,
            shortUUID,
            module: constants_1.MODULE_NAME.HABIT,
        });
        throw new Error(error.message);
    }
});
exports.deleteExistingHabit = deleteExistingHabit;
const updateExistingHabit = (data, _id) => __awaiter(void 0, void 0, void 0, function* () {
    const shortUUID = (0, shortUUID_1.getShortUUID)();
    try {
        console.log(data, _id);
        const updationResult = yield habit_model_1.HabitModel.updateOne({ _id }, { data });
        return {
            statusCode: status_codes_1.statusCodes.SUCCESS,
            message: messages_1.messages.UPDATE_SUCCES,
            data: [Object.assign(Object.assign({}, data), updationResult)],
        };
    }
    catch (error) {
        logger_1.default.info({
            commonMessage: `${messages_1.messages.HABIT_UPDATE_FAILED} ${error}`,
            shortUUID,
            module: constants_1.MODULE_NAME.HABIT,
        });
        throw new Error(error.message);
    }
});
exports.updateExistingHabit = updateExistingHabit;
const fetchExistingHabit = () => __awaiter(void 0, void 0, void 0, function* () {
    const shortUUID = (0, shortUUID_1.getShortUUID)();
    try {
        const result = yield habit_model_1.HabitModel.find({});
        return {
            statusCode: status_codes_1.statusCodes.SUCCESS,
            message: messages_1.messages.FETCH_SUCCESS,
            data: result,
        };
    }
    catch (error) {
        logger_1.default.info({
            commonMessage: `${messages_1.messages.HABIT_FETCH_FAILED} ${error}`,
            shortUUID,
            module: constants_1.MODULE_NAME.HABIT,
        });
        throw new Error(error.message);
    }
});
exports.fetchExistingHabit = fetchExistingHabit;
