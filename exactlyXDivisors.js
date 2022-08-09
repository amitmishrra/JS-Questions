const numOfDiv = (num, x) => {
   
    let result = 0;
    for (let i = 1; i <= num; i++) {
        let count = 0;
        for(let j = 1; j<=i; j++){
            if (i % j == 0) {
                count = count + 1;
            }
        }
        if (count == x) {
            result = result + 1
        }
    }
    return result;
}

console.log(numOfDiv(7, 2));    

