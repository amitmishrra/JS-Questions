const numOfHandshake = (num)=>{
  let result = 0;
  for(let i = num - 1; i>=0;i--){
 result = result + i
  }
  return result
}

console.log(numOfHandshake(4))
console.log(numOfHandshake(10))
console.log(numOfHandshake(100))