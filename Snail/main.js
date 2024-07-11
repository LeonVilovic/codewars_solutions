snail = function(array) {
  if(typeof(array[0][0])=='undefined') return [];
  
  let returnArray = [];
  let x = 0;
  let y = 0;
  let directionChangeCountdown = array[0].length;
  let walkLength = array[0].length;
  let walkLengthChangeCountdown = 1;
  let direction = 0;
  
  for(let i = 0 ; i < array.length * array[0].length; i++){
   returnArray.push(array[y][x]);    
    
   directionChangeCountdown--;
    
    if(directionChangeCountdown==0){
      walkLengthChangeCountdown--;   
      if(walkLengthChangeCountdown==0){walkLength--; walkLengthChangeCountdown=2;}
      direction = (direction+1) % 4; 
      directionChangeCountdown = walkLength;   
    }    
    
    UpdateCordinates(direction);
  }
  
  return returnArray;
  
  function UpdateCordinates(direction){
    //directions: 0 >>
    //directions: 1 VV
    //directions: 2 <<
    //directions: 3 ^^
    switch(direction) {
  case 0:
    x = x + 1
    break;
  case 1:
    y = y + 1
    break;
  case 2:
    x = x - 1
    break;
  case 3:
    y = y - 1
    break;
  default:

}
    
    
  }
  
}