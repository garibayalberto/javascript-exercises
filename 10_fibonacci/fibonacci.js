const fibonacci = function(num) {
  
  //My answer
  if( num < 0 ) {
    return "OOPS";
  }

  if (num == 1) {
    return 1;
  }
  else if(num == 0){
    return 0;
  }
  else{
    return fibonacci(num-1) + fibonacci(num-2);
  }

};

// Do not edit below this line
module.exports = fibonacci;
