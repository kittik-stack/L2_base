function isCircleSorted( arr ){
  let count = 0;
  
  for(let i = 1; i < arr.length; i++)
    {
      if(arr[i] < arr[i-1])
      {
        count++;
      }
    }
  if(arr[0] < arr[arr.length - 1])
  {
    count++;
  }
  return count <= 1
}