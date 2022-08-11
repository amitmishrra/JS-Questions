const sumOfArray = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum = sum + element
    });
    console.log(sum)
}

sumOfArray([1, 2, 3])