import { generatePrimeNumbers } from "../utils/generatePrimes";

test("generatePrimeNumbers doesn't include number n", () => {
  const result = generatePrimeNumbers(11);
  expect(result).not.toContain(11);
});

test("generatePrimeNumbers results for 10", () => {
  const result = generatePrimeNumbers(10);
  expect(result).toStrictEqual([2, 3, 5, 7]);
});

test("generatePrimeNumbers results for 18", () => {
  const result = generatePrimeNumbers(18);
  expect(result).toStrictEqual([2, 3, 5, 7, 11, 13, 17]);
});
