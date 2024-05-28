import mongoose from "mongoose";
import { messages } from "../../common/config/messages";
import { getShortUUID } from "./shortUUID";
import { MODULE_NAME } from "../config/constants";
import logger from "./logger";

export const connectToMongo = async () => {
  try {
    const shortUUID = getShortUUID();
    const connection = await mongoose
      .connect("mongodb://localhost:27017")
      .then(() => {
        logger.info({
          commonMessage: messages.MONGO_CONNECT_SUCCESS,
          shortUUID,
          module: MODULE_NAME.COMMON,
        });
      })
      .catch((error) => {
        logger.error({
          commonMessage: `${messages.MONGO_CONNECT_FAIL} ${error}`,
          shortUUID,
          module: MODULE_NAME.COMMON,
        });
      });
    return connection;
  } catch (error: any) {
    throw new Error(error);
  }
};
