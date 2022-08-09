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


let prime = []
 for(let i = 1; i<100; i++){
  if(isPrime(i)){
    prime.push(i);
  }
 }

console.log(prime)