"use strict";

const isUnique = (symbol, index, arr, holdFirst) => {
  const findAfter = (needle, after) => {
    return (symbol, index) => {
      if(index <= after) return false;
      return symbol == needle;
    };
  };
  const firstPos = arr.findIndex( findAfter(symbol, -1) );
  const secondPos = firstPos !== -1 ?
    arr.findIndex( findAfter(symbol, firstPos) ) :
    -1;
  return (holdFirst === true) ?
    (firstPos === index) :
    (secondPos === -1);
};

const letters = (message, isHold) => {
  const symbolsArr = isHold === false ? [...message].reverse() : [...message];
  const holdFirst = isHold === undefined ? false : true;
  return [...message].filter((symbol, index) => {
    index = isHold === false ? symbolsArr.length - 1 - index : index;
    return isUnique(symbol, index, symbolsArr, holdFirst);
  }).join("");
};
