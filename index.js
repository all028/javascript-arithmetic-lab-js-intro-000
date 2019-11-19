function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
  return a / b;
}

function inc(n){
  n = n+1;
  return n;
}

function dec(n){
  n = n-1;
  return n;
}

function makeInt(n){

  if(isNaN(n)){
    x = parseInt(n,10);
 	  return x;
  }else{
 	 return n;
  }

}
