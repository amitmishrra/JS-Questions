let hcf = 1;
let num1 = 12;
let num2 = 14;

function factors(number) {
    var factor = []
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            factor.push(i);
        }
    }
    return factor;
}

num1Factors = factors(num1);
num2Factors = factors(num2);

for (let i = 0; i < num1Factors.length; i++) {
    for (let j = 0; j < num2Factors.length; j++) {
        if (num1Factors[i] == num2Factors[j]) {
            hcf = num1Factors[i];
        }
    }
}

console.log(hcf)