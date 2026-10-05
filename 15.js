function howManyTimes(time1, time2) {
  const t1 = new Date(time1);
  const t2 = new Date(time2);
  
  let count = 0;
  let current = new Date(t1);
  
  const minutes = current.getMinutes();
  if (minutes < 30) {
    current.setMinutes(0, 0, 0);
  } else {
    current.setMinutes(30, 0, 0);
  }
  
  while (current < t2) {
    const m = current.getMinutes();
    const h = current.getHours() % 12 || 12;
    
    if (m === 0) {
      for (let i = 0; i < h; i++) {
        const strikeTime = new Date(current);
        strikeTime.setSeconds(i);
        if (strikeTime >= t1 && strikeTime < t2) {
          count++;
        }
      }
    } else {
      if (current >= t1 && current < t2) {
        count++;
      }
    }
    current.setMinutes(current.getMinutes() + 30);
  }
  
  return count;
}