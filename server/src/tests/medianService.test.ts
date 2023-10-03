import { medianFromList } from "../services/medianService";

test("Median of [1]", () => {
  const result = medianFromList([1]);
  expect(result).toStrictEqual([1]);
});

test("Median of [1, 3, 5]", () => {
  const result = medianFromList([1, 3, 5]);
  expect(result).toStrictEqual([3]);
});

test("Median of [2, 3, 5, 7]", () => {
  const result = medianFromList([2, 3, 5, 7]);
  expect(result).toStrictEqual([3, 5]);
});

test("Median of [2, 3, 4, 7, 11, 13, 17]", () => {
  const result = medianFromList([2, 3, 4, 7, 11, 13, 17]);
  expect(result).toStrictEqual([7]);
});
