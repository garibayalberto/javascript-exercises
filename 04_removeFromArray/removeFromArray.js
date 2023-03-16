const removeFromArray = function(array , ...remove) {

  //let removeArray = Array.from(remove);

  for(let i = 0 ; i < remove.length; i++) {
    const index = array.indexOf(remove[i]);
    if (index > -1) { 
      array.splice(index, 1);
    }
  }
  
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
