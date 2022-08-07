let num1 = 12;
let num2 = 14;
let lcm ;
for(let i = 1;i<num1; i++ ){
    for(let j = 1;j<num2; j++ ){
    if(num1*i == num2*j){
      lcm = num1*i;
      break;
    }
    }
}

console.log(lcm)