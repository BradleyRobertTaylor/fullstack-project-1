import { APIResponse } from "../types/apiResponse";

const BASE_URL = "http://localhost:3000/api";

export const getMedian = async (num: number) => {
  const res = await fetch(`${BASE_URL}/median/${num}`);
  const data = await res.json();
  return data as APIResponse;
};
