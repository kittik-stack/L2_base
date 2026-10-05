function whatCentury(year)
{
  const century = Math.ceil(year/100);
  
  let suf = 'th';
  
  if(century < 11 || century > 13)
    {
      switch(century % 10)
        {
            case 1: suf = 'st'; break;
            case 2: suf = 'nd'; break;
            case 3: suf = 'rd'; break;
        }
    }
  return century + suf;
}