import shortuuid from "short-uuid";

export const getShortUUID = () => {
  const shortUUID = shortuuid();
  return shortUUID.new();
};
