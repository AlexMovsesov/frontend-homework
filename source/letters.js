'use strict';

const is_unique = function(symbol, index, arr, message, hold_first){
  const whiteSpaces = [..."!., "];
  let wordBound;
  if(
    hold_first == undefined &&
    (index+1 < arr.length && arr[index] == arr[index+1])
    ||
    (index-1 >= 0 && arr[index] == arr[index-1])
  ) {
    return false;
  }

  const forwardFirstIndex = message.indexOf(symbol);

  //find word bounds
  for(let space of whiteSpaces){
    if(space != symbol){
      wordBound = message.indexOf(space, forwardFirstIndex+1)
      if(wordBound != -1) {
        break;
      }
    }
    else{
      wordBound = forwardFirstIndex;
    }
  }

  if(hold_first == undefined && forwardFirstIndex != -1 && wordBound != -1 && message.indexOf(symbol, wordBound+1) != -1) {
    return false;
  }

  return (hold_first == undefined || hold_first) ? forwardFirstIndex == index : message.lastIndexOf(symbol) == index;

};

const letters = (message, hold_first) => {
  return [...message].filter((symbol,index,symbolsArr) => is_unique(symbol, index, symbolsArr, message, hold_first)).join("");
};
