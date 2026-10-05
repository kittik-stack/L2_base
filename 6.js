function toWeirdCase(string){
  const words = string.split(' ');
  const result = [];
  for(let i = 0; i < words.length; i++)
    {
      const word = words[i];
      const letters = word.split('');
      let newWord = '';
      
      for(let l = 0; l < letters.length; l++)
        {
          const letter = letters[l];
          
          if(l % 2 === 0)
            {
              newWord = newWord + letter.toUpperCase();
            }else{
              newWord = newWord + letter.toLowerCase();
            }
        }
      result.push(newWord);

    }
  return result.join(' ');
}