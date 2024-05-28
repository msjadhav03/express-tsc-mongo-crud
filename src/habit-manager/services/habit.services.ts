import { MODULE_NAME } from "../../common/config/constants";
import { messages } from "../../common/config/messages";
import { statusCodes } from "../../common/config/status-codes";
import logger from "../../common/utils/logger";
import { getShortUUID } from "../../common/utils/shortUUID";
import { HabitModel } from "../models/habit.model";

export const addNewHabit = async (data: any) => {
  const shortUUID = getShortUUID();
  try {
    logger.info({
      commonMessage: messages.HABIT_INSERT_STARTED,
      shortUUID,
      module: MODULE_NAME.HABIT,
    });
    const dataToBeInserted = new HabitModel(data);
    const result = await dataToBeInserted.save();
    return {
      statusCode: statusCodes.CREATED,
      message: messages.ADD_SUCCESS,
      data: [result],
    };
  } catch (error: any) {
    logger.info({
      commonMessage: `${messages.HABIT_INSERT_FAILED} ${error}`,
      shortUUID,
      module: MODULE_NAME.HABIT,
    });
    throw new Error(error.message);
  }
};

export const deleteExistingHabit = async (data: any) => {
  const shortUUID = getShortUUID();
  try {
    logger.info({
      commonMessage: messages.HABIT_DELETE_STARTED,
      shortUUID,
      module: MODULE_NAME.HABIT,
    });
    const deletedHabit: any = await HabitModel.deleteOne({ _id: data.id });
    return {
      statusCode: statusCodes.SUCCESS,
      message: messages.DELETE_SUCCESS,
      data: [deletedHabit],
    };
  } catch (error: any) {
    logger.info({
      commonMessage: `${messages.HABIT_DELETE_FAILED} ${error}`,
      shortUUID,
      module: MODULE_NAME.HABIT,
    });
    throw new Error(error.message);
  }
};

export const updateExistingHabit = async (data: any, _id: string) => {
  const shortUUID = getShortUUID();
  try {
    console.log(data, _id);
    const updationResult = await HabitModel.updateOne({ _id }, { data });
    return {
      statusCode: statusCodes.SUCCESS,
      message: messages.UPDATE_SUCCES,
      data: [{ ...data, ...updationResult }],
    };
  } catch (error: any) {
    logger.info({
      commonMessage: `${messages.HABIT_UPDATE_FAILED} ${error}`,
      shortUUID,
      module: MODULE_NAME.HABIT,
    });
    throw new Error(error.message);
  }
};

export const fetchExistingHabit = async () => {
  const shortUUID = getShortUUID();
  try {
    const result = await HabitModel.find({});
    return {
      statusCode: statusCodes.SUCCESS,
      message: messages.FETCH_SUCCESS,
      data: result,
    };
  } catch (error: any) {
    logger.info({
      commonMessage: `${messages.HABIT_FETCH_FAILED} ${error}`,
      shortUUID,
      module: MODULE_NAME.HABIT,
    });
    throw new Error(error.message);
  }
};
