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
exports.deleteHabit = exports.fetchHabit = exports.updateHabit = exports.addHabit = exports.testControllerFunction = void 0;
const messages_1 = require("../../common/config/messages");
const status_codes_1 = require("../../common/config/status-codes");
const habit_services_1 = require("../services/habit.services");
const logger_1 = __importDefault(require("../../common/utils/logger"));
const shortUUID_1 = require("../../common/utils/shortUUID");
const constants_1 = require("../../common/config/constants");
const testControllerFunction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUUID = (0, shortUUID_1.getShortUUID)();
        logger_1.default.info({
            commonMessage: messages_1.messages.HEALTH_CHECK_STARTED,
            shortUUID,
            module: constants_1.MODULE_NAME.HABIT,
        });
        logger_1.default.info({
            commonMessage: messages_1.messages.HEALTH_CHECK_COMPLETED,
            shortUUID,
            module: constants_1.MODULE_NAME.HABIT,
        });
        return res.send({
            statusCode: status_codes_1.statusCodes.SUCCESS,
            message: messages_1.messages.TEST_MESSAGE,
            data: [req.body],
        });
    }
    catch (error) {
        res.send({
            statusCode: status_codes_1.statusCodes.INTERNAL_SERVER_ERROR,
            message: messages_1.messages.INTERNAL_SERVER_ERROR,
            error: error,
        });
    }
});
exports.testControllerFunction = testControllerFunction;
const addHabit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, habit_services_1.addNewHabit)(req.body);
        return res.send(response);
    }
    catch (error) {
        res.send({
            statusCode: status_codes_1.statusCodes.INTERNAL_SERVER_ERROR,
            message: messages_1.messages.INTERNAL_SERVER_ERROR,
            error: error,
        });
    }
});
exports.addHabit = addHabit;
const updateHabit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield (0, habit_services_1.updateExistingHabit)(req.body, (_a = req.params) === null || _a === void 0 ? void 0 : _a.id);
        res.send(response);
    }
    catch (error) {
        res.send({
            statusCode: status_codes_1.statusCodes.INTERNAL_SERVER_ERROR,
            message: messages_1.messages.INTERNAL_SERVER_ERROR,
            error: error,
        });
    }
});
exports.updateHabit = updateHabit;
const fetchHabit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, habit_services_1.fetchExistingHabit)();
        res.send(response);
    }
    catch (error) {
        res.send({
            statusCode: status_codes_1.statusCodes.INTERNAL_SERVER_ERROR,
            message: messages_1.messages.INTERNAL_SERVER_ERROR,
            error: error,
        });
    }
});
exports.fetchHabit = fetchHabit;
const deleteHabit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, habit_services_1.deleteExistingHabit)(Object.assign({}, req.params));
        res.send(response);
    }
    catch (error) {
        res.send({
            statusCode: status_codes_1.statusCodes.INTERNAL_SERVER_ERROR,
            message: messages_1.messages.INTERNAL_SERVER_ERROR,
            error: error,
        });
    }
});
exports.deleteHabit = deleteHabit;
