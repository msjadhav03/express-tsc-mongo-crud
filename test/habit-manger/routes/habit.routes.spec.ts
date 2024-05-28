import express from "express";
import supertest from "supertest";
import { statusCodes } from "../../../src/common/config/status-codes";
import * as habitRouter from "../../../src/habit-manager/routes/habit.routes";
import { messages } from "../../../src/common/config/messages";

jest.mock("../../../src/habit-manager/controllers/habit.controller", () => ({
  addHabit: (req: any, res: any) =>
    res.status(statusCodes.SUCCESS).json({
      statusCode: statusCodes.SUCCESS,
      message: messages.ADD_SUCCESS,
      data: [],
    }),
  deleteHabit: (req: any, res: any) =>
    res.status(statusCodes.SUCCESS).json({
      statusCode: statusCodes.SUCCESS,
      message: messages.ADD_SUCCESS,
      data: [],
    }),
  fetchHabit: (req: any, res: any) =>
    res.status(statusCodes.SUCCESS).json({
      statusCode: statusCodes.SUCCESS,
      message: messages.ADD_SUCCESS,
      data: [],
    }),
  updateHabit: (req: any, res: any) =>
    res.status(statusCodes.SUCCESS).json({
      statusCode: statusCodes.SUCCESS,
      message: messages.ADD_SUCCESS,
      data: [],
    }),
}));

const app = express();
app.use("/", habitRouter.router);

describe("habitRouter", () => {
  it("should call habitRouter controller function addHabit when /habit route is hit", async () => {
    const res = await supertest(app).post("/habit");
    expect(res.status).toEqual(statusCodes.SUCCESS);
  });
  it("should call habitRouter controller function fetchHabit when /habit route is hit", async () => {
    const res = await supertest(app).get("/habit");
    expect(res.status).toEqual(statusCodes.SUCCESS);
  });
  it("should call habitRouter controller function deleteHabit when /habit/:id route is hit", async () => {
    const res = await supertest(app).delete("/habit/:id");
    expect(res.status).toEqual(statusCodes.SUCCESS);
  });
  it("should call habitRouter controller function updateHabit when /habit/:id route is hit", async () => {
    const res = await supertest(app).patch("/habit/:id");
    expect(res.status).toEqual(statusCodes.SUCCESS);
  });
});
