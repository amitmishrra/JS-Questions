const smallest = (array)=>{
    let small = array[0];
    for(let i = 0; i<array.length; i++){
        if(small>array[i]){
        small = array[i]
        }
    }
    return `Smallest element is ${small}`
}
console.log(smallest([1,2,3,3,-5,7]))