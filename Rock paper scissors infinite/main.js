function winner(choices, p1, p2) {
  debugger
  if(choices.length <= 2) { return 'Draw!'; }
  
  let index1 = choices.indexOf(p1);  
  let index2 = choices.indexOf(p2);
  
  if (index1 === index2) {
        return 'Draw!';
    }
  
  let difference = Math.abs(index1 - index2);
  let halfLength = choices.length / 2;
  
      if (difference == halfLength) { return 'Draw!'; }
      if (difference <= halfLength) {
        if (index1 < index2) {
            return 'Player 2 won!';
        } else {
            return 'Player 1 won!';
        }
    } else {
        if (index1 < index2) {
            return 'Player 1 won!';
        } else {
            return 'Player 2 won!';
        }
    }
}
