const largest = (arr)=>{
    let large = 0;
    for(let i = 0; i<arr.length; i++){
       if(large<arr[i]){
        large = arr[i]
       }
    }
    return large;
}


const secondLargest=(arr)=>{
    diff = largest(arr);
    result = false;
    for(let i = 0; i<arr.length; i++){
        if(diff>largest(arr)-arr[i] && largest(arr) !=arr[i]){
            diff = largest(arr)-arr[i];
            result = arr[i];
        }
        
    }
    return result;
}

console.log(secondLargest([1,2,62,32]))