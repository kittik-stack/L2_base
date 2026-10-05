function wave(str){
  const result = [];
  
  for(let i = 0; i < str.length; i++)
    {
      if(str[i] === ' ')
          continue;
      
      const waved = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      result.push(waved);
    }
  return result;
}