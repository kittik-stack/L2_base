function expandedForm(num) {
  
  const str = String(num);
  const parts = [];
  
  for(let i = 0; i < str.length; i++)
    {
      const d = Number(str[i]);
      const power = str.length - 1 - i;
      const value = d * 10 ** power;
      
      if(value !== 0)
        parts.push(value);
    }
  return parts.join(' + ');
}