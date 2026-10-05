function cache(func) {
  const storage = {};
  
  return function(...args){
    const key = JSON.stringify(args);
    
    if(key in storage){
      return storage[key];
    }
    
    const result = func.apply(this, args);
    storage[key] = result;
    return result;
  }
}