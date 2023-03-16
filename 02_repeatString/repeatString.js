const repeatString = function(word, times) {
  

  if(times < 0) {
    return "ERROR";
  }
  else{
    let phrase = "";

    for(let i = 0; i < times; i++ ){
      phrase += word;
    }

    return phrase;
  }
  
};

// Do not edit below this line
module.exports = repeatString;
