import { Request, Response } from "express";
import { generatePrimeNumbers } from "../services/generatePrimes";
import { medianFromList } from "../services/medianService";

const getMedian = (req: Request, res: Response) => {
  const n = Number(req.params.n);
  const primes = generatePrimeNumbers(n);
  const median = medianFromList(primes);
  res.send(median);
};

export default { getMedian };
