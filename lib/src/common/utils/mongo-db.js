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
exports.connectToMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const messages_1 = require("../../common/config/messages");
const shortUUID_1 = require("./shortUUID");
const constants_1 = require("../config/constants");
const logger_1 = __importDefault(require("./logger"));
const connectToMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUUID = (0, shortUUID_1.getShortUUID)();
        const connection = yield mongoose_1.default
            .connect("mongodb://localhost:27017")
            .then(() => {
            logger_1.default.info({
                commonMessage: messages_1.messages.MONGO_CONNECT_SUCCESS,
                shortUUID,
                module: constants_1.MODULE_NAME.COMMON,
            });
        })
            .catch((error) => {
            logger_1.default.error({
                commonMessage: `${messages_1.messages.MONGO_CONNECT_FAIL} ${error}`,
                shortUUID,
                module: constants_1.MODULE_NAME.COMMON,
            });
        });
        return connection;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.connectToMongo = connectToMongo;
