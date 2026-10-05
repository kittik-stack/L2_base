function longest(arr, n) {
  const remaining = arr.slice();
  let result = null;
  
  for(let step = 0; step < n; step++){
    let bestIndex = 0;
    for(let i = 1; i < remaining.length; i++){
        if(remaining[i].length > remaining[bestIndex].length){
          bestIndex = i;
        }
      }
    result = remaining[bestIndex];
    remaining.splice(bestIndex, 1 );
  }
  return result;
}