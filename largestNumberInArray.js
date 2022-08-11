const largest = (arr)=>{
    let large = 0;
    for(let i = 0; i<arr.length; i++){
       if(large<arr[i]){
        large = arr[i]
       }
    }
    return large;
}

console.log(largest([5,0,1,2,3,4]))