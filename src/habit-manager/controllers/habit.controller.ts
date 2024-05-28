import { Request, Response } from "express";
import { messages } from "../../common/config/messages";
import { statusCodes } from "../../common/config/status-codes";
import {
  addNewHabit,
  deleteExistingHabit,
  updateExistingHabit,
  fetchExistingHabit,
} from "../services/habit.services";
import logger from "../../common/utils/logger";
import { getShortUUID } from "../../common/utils/shortUUID";
import { MODULE_NAME } from "../../common/config/constants";

export const testControllerFunction = async (req: Request, res: Response) => {
  try {
    const shortUUID = getShortUUID();
    logger.info({
      commonMessage: messages.HEALTH_CHECK_STARTED,
      shortUUID,
      module: MODULE_NAME.HABIT,
    });
    logger.info({
      commonMessage: messages.HEALTH_CHECK_COMPLETED,
      shortUUID,
      module: MODULE_NAME.HABIT,
    });
    return res.send({
      statusCode: statusCodes.SUCCESS,
      message: messages.TEST_MESSAGE,
      data: [req.body],
    });
  } catch (error) {
    res.send({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: messages.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};

export const addHabit = async (req: Request, res: Response) => {
  try {
    const response = await addNewHabit(req.body);
    return res.send(response);
  } catch (error) {
    res.send({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: messages.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};

export const updateHabit = async (req: Request, res: Response) => {
  try {
    const response = await updateExistingHabit(req.body, req.params?.id);
    res.send(response);
  } catch (error) {
    res.send({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: messages.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};

export const fetchHabit = async (req: Request, res: Response) => {
  try {
    const response = await fetchExistingHabit();
    res.send(response);
  } catch (error) {
    res.send({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: messages.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};

export const deleteHabit = async (req: Request, res: Response) => {
  try {
    const response = await deleteExistingHabit({ ...req.params });
    res.send(response);
  } catch (error) {
    res.send({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: messages.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};
