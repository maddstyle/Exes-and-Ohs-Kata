function XO(str) {
    
  let letters = str.split('');
  
  let xCount = 0; 
  for (let i=0; i <= letters.length; i++) {
      if(letters[i] === 'x' || letters[i] === 'X') {
        xCount++;
      }
  }

  let oCount = 0;
  for (let i=0; i <= letters.length; i++) {
      if(letters[i] === 'o' || letters[i] === 'O') {
        oCount++;
      }
  }
  
  if(oCount === 0 && xCount === 0) {
    return true;
  }
  
  if (xCount === oCount) {
  return true}
  else {
    return false};
    
}
