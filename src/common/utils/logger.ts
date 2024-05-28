import winston, { format } from "winston";

const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
    critical: 4,
  },
  colors: {
    critical: "orange",
    error: "red",
    warn: "yellow",
    info: "green",
    debug: "blue",
  },
};

const volume = format((info, opts) => {
  const {
    shortUUID = "",
    commonMessage = "",
    module = "",
    error = "",
    processData = "",
  } = info.message;

  info.timestamp = new Date();
  info.request_id = shortUUID;
  info.module = module;
  if (error) {
    info.error = `${error?.message + error?.stack || error.toString()}`;
    info.message = `${commonMessage}`;
  } else {
    info.message = `${commonMessage}`;
  }
  return info;
});

// Creating a logger instance
const logger = winston.createLogger({
  levels: customLevels.levels,
  format: winston.format.combine(
    volume(),
    winston.format.json(),
    winston.format.colorize()
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
