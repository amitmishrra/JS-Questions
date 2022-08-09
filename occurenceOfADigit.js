const numberOccured = (num, digit)=>{
    num = num.toString();
    count = 0;
    for(let i=0 ; i < num.length; i++){
      if(num.charAt(i)==digit){
        count = count + 1;
      }
    }
    return `there are ${count} ${digit}'s in ${num}`
    }
    
    console.log(numberOccured(12111, 1));