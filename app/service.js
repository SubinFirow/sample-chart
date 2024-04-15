import axios from "axios";

export const yAxisData = async () => {
  return await axios.get("https://retoolapi.dev/o5zMs5/data");
};
export const xAxisData = async () => {
  return await axios.get("https://retoolapi.dev/gDa8uC/data");
};
