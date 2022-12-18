//JS Questions

let array = [1,1,1,1];
let newArray = [];
let bool = false;
count = 0;

const removeDuplicate = (array)=>{
  for(i=0; i<array.length; i++){
    for(j=i; j<array.length; j++){
    if(array[i]==array[j] && i!=j){
      count = count + 1;
      bool = true;
      break
    }else{
      bool = false
    }
    }
    if(!bool){newArray.push(array[i])}
  }
  return newArray;
}

console.log(removeDuplicate(array), count);
