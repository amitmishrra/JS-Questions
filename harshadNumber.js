let digitsSum = (num) => {
    var sum = 0;
    var rem;
    while (num != 0) {
        rem = num % 10;
        sum = sum + rem;
        num = parseInt(num/10);
    }
    return sum;
}

const harshadNumber = (num)=>{
    num%digitsSum(num)==0?
    result = `${num} is a Harshad Number` :
    result =`${num} is not a Harshad Number`

    return result
}

console.log(harshadNumber(21))