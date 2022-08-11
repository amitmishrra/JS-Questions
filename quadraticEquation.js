const quadEquation = (a,b,c)=>{
    let d = (b*b) - 4*a*c;
    d = Math.sqrt(d)
    x = (b+d)/2*a;
    y = (b-d)/2*a
    if(d>0){
        return `Roots are real and different \n${x} and ${y} are roots`
    }
    else if(d == 0){
        return `Roots are real and same \n${x} and ${y} are roots`
    }
    else{
        return `Roots are complex \n${x} and ${y} are roots`
    }
}

console.log(quadEquation(1,4,4))