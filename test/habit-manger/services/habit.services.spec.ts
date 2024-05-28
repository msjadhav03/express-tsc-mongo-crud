import * as habitServices from "../../../src/habit-manager/services/habit.services";
import { messages } from "../../../src/common/config/messages";
import { statusCodes } from "../../../src/common/config/status-codes";
import { HabitModel } from "../../../src/habit-manager/models/habit.model";


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

    it("should fetch all habit data", async () => {
      jest.clearAllMocks();
      jest.spyOn(HabitModel, "find");

      const result = await habitServices.fetchExistingHabit();
      expect(result).toEqual({
        data: undefined,
        message: messages.FETCH_SUCCESS,
        statusCode: statusCodes.SUCCESS,
      });
    });

    it("should not fetch all habit data", async () => {
      try {
        jest.clearAllMocks();
        jest.spyOn(HabitModel, "find").mockRejectedValue({ error: "Error" });

        await habitServices.fetchExistingHabit();
      } catch (error) {
        expect(typeof error).toEqual(typeof { error: "Error" });
      }
    });

    it("should delete habit data", async () => {
      jest.clearAllMocks();
      jest.spyOn(HabitModel, "deleteOne");

      const result = await habitServices.deleteExistingHabit({ id: "1234" });
      expect(result).toEqual({
        data: [undefined],
        message: messages.DELETE_SUCCESS,
        statusCode: 200,
      });
    });

    it("should not delete habit data", async () => {
      try {
        jest.clearAllMocks();
        jest
          .spyOn(HabitModel, "deleteOne")
          .mockRejectedValue({ error: "Error" });

        await habitServices.deleteExistingHabit({ id: "1234" });
      } catch (error) {
        expect(typeof error).toEqual(typeof { error: "Error" });
      }
    });

    it("should update habit data", async () => {
      jest.clearAllMocks();
      jest.spyOn(HabitModel, "updateOne");

      const result = await habitServices.updateExistingHabit(
        { name: "Reading" },
        "1234"
      );
      expect(result).toEqual({
        data: [{ name: "Reading" }],
        message: messages.UPDATE_SUCCES,
        statusCode: 200,
      });
    });
    it("should not update habit data", async () => {
      try {
        jest.clearAllMocks();
        jest
          .spyOn(HabitModel, "updateOne")
          .mockRejectedValue({ error: "Error" });

        await habitServices.updateExistingHabit({ name: "Reading" }, "1234");
      } catch (error) {
        expect(typeof error).toEqual(typeof { error: "Error" });
      }
    });
  });
});
