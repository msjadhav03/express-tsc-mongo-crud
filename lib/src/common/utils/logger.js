"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importStar(require("winston"));
const customLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        debug: 3,
        critical: 4,
    },
    colors: {
        critical: "orange",
        error: "red",
        warn: "yellow",
        info: "green",
        debug: "blue",
    },
};
const volume = (0, winston_1.format)((info, opts) => {
    const { shortUUID = "", commonMessage = "", module = "", error = "", processData = "", } = info.message;
    info.timestamp = new Date();
    info.request_id = shortUUID;
    info.module = module;
    if (error) {
        info.error = `${(error === null || error === void 0 ? void 0 : error.message) + (error === null || error === void 0 ? void 0 : error.stack) || error.toString()}`;
        info.message = `${commonMessage}`;
    }
    else {
        info.message = `${commonMessage}`;
    }
    return info;
});
// Creating a logger instance
const logger = winston_1.default.createLogger({
    levels: customLevels.levels,
    format: winston_1.default.format.combine(volume(), winston_1.default.format.json(), winston_1.default.format.colorize()),
    transports: [new winston_1.default.transports.Console()],
});
exports.default = logger;
