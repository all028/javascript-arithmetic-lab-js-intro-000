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
    return n;
  }else{
    n = parseInt(n,10);
    return n;
  }
}

function preserveDecimal(n){
  if(isNaN(n)){
    return n;
  }else{
    n = parseFloat(n,10);
    return n;
  }
}
