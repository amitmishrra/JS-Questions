const isPrime = (num) => {
  let result = false;
  if (num <= 2) {
    result = true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        result = false
        break;
      } else {
        result = true
      }
    }
  }
  return result
}
const sumOfPrime = (num)=>{
  let a ;
  let b;
  for(let i = 1; i<=num; i++){
      a = num -i;
      b = i;
      if(isPrime(a)&&isPrime(b)){
        result = `${num} can be expressed as a sum of ${a} and ${b}.`
        break;
      }
      else{
        result = `${num} can't be expressed as a sum of two prime numbers.`
      }
  }
  return result;
}

console.log(sumOfPrime(24))
console.log(sumOfPrime(55))
console.log(sumOfPrime(34))