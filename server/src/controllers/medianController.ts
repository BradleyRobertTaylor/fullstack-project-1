import { Request, Response } from "express";
import { generatePrimeNumbers } from "../services/generatePrimes";
import { medianFromList } from "../services/medianService";

const getMedian = (req: Request, res: Response) => {
  const n = Number(req.params.n);
  if (isNaN(n)) {
    return res.status(400).json({ error: "Input can only contain digits." });
  }

  if (n <= 1) {
    return res.status(400).json({ error: "Number must be greater than 1." });
  }

  const primes = generatePrimeNumbers(Math.floor(n));
  const median = medianFromList(primes);
  res.status(200).json({ median });
};

export default { getMedian };
