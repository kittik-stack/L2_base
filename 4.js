function findMissing(list) { 
  
  const d = (list[list.length - 1] - list[0]) / list.length;
  
  for (let i = 0; i <= list.length; i++)
      if (list[i + 1] - list[i] != d )
        return list[i] + d
  
  return null;
}