import { Request, Response } from "express";
import {
  testControllerFunction,
  addHabit,
  updateHabit,
  fetchHabit,
  deleteHabit,
} from "../../../src/habit-manager/controllers/habit.controller"; // Replace "yourControllerFile" with the path to your controller file

import * as habitService from "../../../src/habit-manager/services/habit.services";
describe("Controller Functions", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

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
    it("should respond with a test message", async () => {
      await testControllerFunction(
        mockRequest as Request,
        mockResponse as Response
      );
      expect(mockResponse.send).toHaveBeenCalledWith({
        statusCode: 200,
        message: "Success true",
        data: [undefined],
      });
    });
  });

  describe("addHabit", () => {
    it("should have been called with data", async () => {
      jest
        .spyOn(habitService, "addNewHabit")
        .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
      await addHabit(
        { status: "started", days: 20, name: "reading" } as any,
        mockResponse as Response
      );
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it("should have been called with data", async () => {
      jest.spyOn(habitService, "addNewHabit").mockRejectedValue({
        statusCode: 200,
        message: "Success",
        error: "Error",
      });
      await addHabit(
        { status: "started", days: 20, name: "reading" } as any,
        mockResponse as Response
      );
    });
  });

  describe("deleteHabit", () => {
    it("should have been called with data", async () => {
      jest
        .spyOn(habitService, "deleteExistingHabit")
        .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
      await deleteHabit({ id: "reading" } as any, mockResponse as Response);
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it("should have been rejected with data", async () => {
      jest.spyOn(habitService, "deleteExistingHabit").mockRejectedValue({
        statusCode: 200,
        message: "Success",
        error: "Error",
      });
      await deleteHabit({ id: "reading" } as any, mockResponse as Response);
    });
  });

  describe("updateHabit", () => {
    it("should have been called with data", async () => {
      jest
        .spyOn(habitService, "updateExistingHabit")
        .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
      await updateHabit({ id: "reading" } as any, mockResponse as Response);
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it("should have been rejected", async () => {
      jest
        .spyOn(habitService, "updateExistingHabit")
        .mockRejectedValue({ statusCode: 200, message: "Success", data: [] });
      await updateHabit({ id: "reading" } as any, mockResponse as Response);
    });
  });

  describe("fetchHabit", () => {
    it("should have been called with data", async () => {
      jest
        .spyOn(habitService, "fetchExistingHabit")
        .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
      await fetchHabit({ id: "reading" } as any, mockResponse as Response);
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it("should have been rejected", async () => {
      jest
        .spyOn(habitService, "fetchExistingHabit")
        .mockRejectedValue({ statusCode: 200, message: "Success", error: "" });
      await fetchHabit({ id: "reading" } as any, mockResponse as Response);
    });
  });
});
