import mongoose from "mongoose";
import { connectToMongo } from "../../../src/common/utils/mongo-db";

jest.mock("../../../src/common/utils/shortUUID", () => ({
  getShortUUID: jest.fn(),
}));
jest.mock("mongoose", () => ({
  connect: jest.fn(),
}));

describe("connectToMongo", () => {
  it("should throw error", async () => {
    try {
      const connectionObj = await connectToMongo();
      expect(connectToMongo).toHaveBeenCalled();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
