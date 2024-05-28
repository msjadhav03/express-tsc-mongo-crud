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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const habit_controller_1 = require("../../../src/habit-manager/controllers/habit.controller"); // Replace "yourControllerFile" with the path to your controller file
const habitService = __importStar(require("../../../src/habit-manager/services/habit.services"));
describe("Controller Functions", () => {
    let mockRequest;
    let mockResponse;
    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            send: jest.fn(),
        };
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe("testControllerFunction", () => {
        it("should respond with a test message", () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, habit_controller_1.testControllerFunction)(mockRequest, mockResponse);
            expect(mockResponse.send).toHaveBeenCalledWith({
                statusCode: 200,
                message: "Success true",
                data: [undefined],
            });
        }));
    });
    describe("addHabit", () => {
        it("should have been called with data", () => __awaiter(void 0, void 0, void 0, function* () {
            jest
                .spyOn(habitService, "addNewHabit")
                .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
            yield (0, habit_controller_1.addHabit)({ status: "started", days: 20, name: "reading" }, mockResponse);
            expect(mockResponse.send).toHaveBeenCalled();
        }));
        it("should have been called with data", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.spyOn(habitService, "addNewHabit").mockRejectedValue({
                statusCode: 200,
                message: "Success",
                error: "Error",
            });
            yield (0, habit_controller_1.addHabit)({ status: "started", days: 20, name: "reading" }, mockResponse);
        }));
    });
    describe("deleteHabit", () => {
        it("should have been called with data", () => __awaiter(void 0, void 0, void 0, function* () {
            jest
                .spyOn(habitService, "deleteExistingHabit")
                .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
            yield (0, habit_controller_1.deleteHabit)({ id: "reading" }, mockResponse);
            expect(mockResponse.send).toHaveBeenCalled();
        }));
        it("should have been rejected with data", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.spyOn(habitService, "deleteExistingHabit").mockRejectedValue({
                statusCode: 200,
                message: "Success",
                error: "Error",
            });
            yield (0, habit_controller_1.deleteHabit)({ id: "reading" }, mockResponse);
        }));
    });
    describe("updateHabit", () => {
        it("should have been called with data", () => __awaiter(void 0, void 0, void 0, function* () {
            jest
                .spyOn(habitService, "updateExistingHabit")
                .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
            yield (0, habit_controller_1.updateHabit)({ id: "reading" }, mockResponse);
            expect(mockResponse.send).toHaveBeenCalled();
        }));
        it("should have been rejected", () => __awaiter(void 0, void 0, void 0, function* () {
            jest
                .spyOn(habitService, "updateExistingHabit")
                .mockRejectedValue({ statusCode: 200, message: "Success", data: [] });
            yield (0, habit_controller_1.updateHabit)({ id: "reading" }, mockResponse);
        }));
    });
    describe("fetchHabit", () => {
        it("should have been called with data", () => __awaiter(void 0, void 0, void 0, function* () {
            jest
                .spyOn(habitService, "fetchExistingHabit")
                .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
            yield (0, habit_controller_1.fetchHabit)({ id: "reading" }, mockResponse);
            expect(mockResponse.send).toHaveBeenCalled();
        }));
        it("should have been rejected", () => __awaiter(void 0, void 0, void 0, function* () {
            jest
                .spyOn(habitService, "fetchExistingHabit")
                .mockRejectedValue({ statusCode: 200, message: "Success", error: "" });
            yield (0, habit_controller_1.fetchHabit)({ id: "reading" }, mockResponse);
        }));
    });
});
