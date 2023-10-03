import { formatAnswer } from "./formatAnswer";

test("formatAnswer formats list correctly", () => {
  const result = formatAnswer([3, 5]);
  expect(result).toBe("[ 3, 5 ]");
});
