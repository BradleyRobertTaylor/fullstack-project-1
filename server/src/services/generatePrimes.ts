export const generatePrimeNumbers = (n: number) => {
  let range: boolean[] = new Array(n + 1).fill(true);
  range[0] = false;
  range[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (range[i]) {
      for (let j = i * i; j <= n; j += i) {
        range[j] = false;
      }
    }
  }

  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (range[i] && i !== n) {
      primes.push(i);
    }
  }

  return primes;
};
