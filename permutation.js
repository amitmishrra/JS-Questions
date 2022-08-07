const factorial = (num)=>{
 var fact = 1;
  for (let i = 1 ; i <= num; i++) {
    fact = fact * i; 
  }
  return fact;
}

const permutation = (a, b)=>{
  var result = 1;
  result =  parseInt(factorial(a)/factorial(a-b))
     return result;
}

console.log(permutation(5,3))
console.log(permutation(6,4))