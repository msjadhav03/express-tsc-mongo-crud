import express, { Application } from "express";
import { bootstrapServer } from "../src/index";

jest.mock("express");
jest.mock("http");
jest.mock("mongoose");
jest.mock("../src/common/config/messages");
jest.mock("dotenv/config");
jest.mock("swagger-jsdoc", () => jest.fn());
jest.mock("swagger-ui-express", () => ({
  express: () => ({
    static: jest.fn(),
  }),
  setup: jest.fn(),
}));
jest.mock("body-parser", () => ({
  json: jest.fn(),
}));

jest.mock("express", () => {
  const expressFn: any = jest.fn().mockReturnValue({
    use: jest.fn(),
    json: jest.fn(),
    urlencoded: jest.fn(),
    static: jest.fn(),
    listen: jest.fn(),
  });
  expressFn.json = jest.fn();
  expressFn.urlencoded = jest.fn();
  return expressFn;
});

jest.mock("https", () => ({
  createServer: jest.fn().mockReturnValue({
    listen: jest.fn((port, callback) => {
      callback();
    }),
  }),
}));

jest.mock("../src/common/config/constants", () => ({
  SWAGGER_OPTIONS: {},
}));

jest.mock("../src/habit-manager/models/habit.model", () => ({
  findOne: () => ({
    exec: jest.fn(),
  }),
  create: () => ({}),
  findOneAndUpdate: () => ({
    exec: () => ({}),
  }),
  deleteOne: jest.fn(),
  updateOne: jest.fn(),
}));

jest.mock("../src/common/utils/mongo-db", () => ({
  connectToMongo: jest.fn(() => ({
    connect: jest.fn(),
  })),
}));

jest.mock("../src/common/utils/shortUUID", () => ({
  getShortUUID: jest.fn(),
}));

jest.mock("../src/habit-manager/services/habit.services", () => ({
  addNewHabit: jest.fn(),
  deleteExistingHabit: jest.fn(),
  updateExistingHabit: jest.fn(),
  fetchExistingHabit: jest.fn(),
}));

jest.mock("../src/habit-manager/controllers/habit.controller", () => ({
  testControllerFunction: jest.fn(),
  addHabit: jest.fn(),
  updateHabit: jest.fn(),
  fetchHabit: jest.fn(),
  deleteHabit: jest.fn(),
}));

jest.mock("../src/habit-manager/routes/habit.routes", () => ({
  router: jest.fn(),
}));

jest.mock("../src/common/config/constants", () => ({
  dependentJobTaskStatus: {},
  API_URLS: {
    NAME_SEEDING: "/name/perform-seeding",
    NAME_GENERATE_FILE: "/name/generate-file",
    MEDIANT_NAME_GENERATE_FILE: "/name/mediant/generate-file",
  },
}));

describe("bootstrapServer", () => {
  let appMock: Application;
  beforeEach(() => {
    appMock = express();
    (express as any).mockReturnValue(appMock);
  });

  it("should start the server and log the message", () => {
    const result = bootstrapServer();
    expect(result).toBe(undefined);
    expect(express).toHaveBeenCalled();
    expect(appMock.use).toHaveBeenCalledTimes(6);
    expect(appMock.use).toHaveBeenCalledWith(express.json());
  });
});
