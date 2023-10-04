import { APIResponse } from "../types/apiResponse";

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}/api`;

export const getMedian = async (num: number) => {
  const res = await fetch(`${BASE_URL}/${num}`);
  const data = await res.json();
  return data as APIResponse;
};
