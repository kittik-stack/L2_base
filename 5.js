function primeFactors(n){
  const counts = {}
  
    for (let i = 2; i <= n; i++)
      {
        while(n % i === 0)
          {
            counts[i] = (counts[i] || 0) + 1;
            n/=i;
          }
      }
  
  if (n > 1) counts[n] = (counts[n] || 0) + 1;
  
  let result = '';
  for (const [base, exp] of Object.entries(counts))
    {
      result += exp ===1 ?  `(${base})`: `(${base}**${exp})`;
    }
  return result;
}