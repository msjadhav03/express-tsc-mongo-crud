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
const habitServices = __importStar(require("../../../src/habit-manager/services/habit.services"));
const messages_1 = require("../../../src/common/config/messages");
const status_codes_1 = require("../../../src/common/config/status-codes");
const habit_model_1 = require("../../../src/habit-manager/models/habit.model");
jest.mock("../../../src/common/utils/logger", () => ({
    info: jest.fn(),
}));
jest.mock("../../../src/habit-manager/models/habit.model", () => ({
    HabitModel: {
        save: jest.fn(),
        deleteOne: jest.fn(),
        updateOne: jest.fn(),
        find: jest.fn().mockReturnThis(),
    },
}));
describe("Habit Service Functions", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe("addNewHabit", () => {
        beforeEach(() => {
            jest.clearAllMocks();
            jest.resetAllMocks();
        });
        afterEach(() => {
            jest.clearAllMocks();
        });
        it("should fetch all habit data", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.clearAllMocks();
            jest.spyOn(habit_model_1.HabitModel, "find");
            const result = yield habitServices.fetchExistingHabit();
            expect(result).toEqual({
                data: undefined,
                message: messages_1.messages.FETCH_SUCCESS,
                statusCode: status_codes_1.statusCodes.SUCCESS,
            });
        }));
        it("should not fetch all habit data", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                jest.clearAllMocks();
                jest.spyOn(habit_model_1.HabitModel, "find").mockRejectedValue({ error: "Error" });
                yield habitServices.fetchExistingHabit();
            }
            catch (error) {
                expect(typeof error).toEqual(typeof { error: "Error" });
            }
        }));
        it("should delete habit data", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.clearAllMocks();
            jest.spyOn(habit_model_1.HabitModel, "deleteOne");
            const result = yield habitServices.deleteExistingHabit({ id: "1234" });
            expect(result).toEqual({
                data: [undefined],
                message: messages_1.messages.DELETE_SUCCESS,
                statusCode: 200,
            });
        }));
        it("should not delete habit data", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                jest.clearAllMocks();
                jest
                    .spyOn(habit_model_1.HabitModel, "deleteOne")
                    .mockRejectedValue({ error: "Error" });
                yield habitServices.deleteExistingHabit({ id: "1234" });
            }
            catch (error) {
                expect(typeof error).toEqual(typeof { error: "Error" });
            }
        }));
        it("should update habit data", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.clearAllMocks();
            jest.spyOn(habit_model_1.HabitModel, "updateOne");
            const result = yield habitServices.updateExistingHabit({ name: "Reading" }, "1234");
            expect(result).toEqual({
                data: [{ name: "Reading" }],
                message: messages_1.messages.UPDATE_SUCCES,
                statusCode: 200,
            });
        }));
        it("should not update habit data", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                jest.clearAllMocks();
                jest
                    .spyOn(habit_model_1.HabitModel, "updateOne")
                    .mockRejectedValue({ error: "Error" });
                yield habitServices.updateExistingHabit({ name: "Reading" }, "1234");
            }
            catch (error) {
                expect(typeof error).toEqual(typeof { error: "Error" });
            }
        }));
    });
});
