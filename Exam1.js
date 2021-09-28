'use strict';

function smallestNumber(){
const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
const min = Math.min(...arr);
console.log(min);
return min;
}


function flipNHeads(){

    let  arr= ['tails','heads'];
    let array =[];
   
        
        
    
    x = (Math.floor(Math.random() * 2) == 0);
  

if(x===1){
    array.psuh(arr[x])
}
else{
    array.psuh('tails')
}

let long=array.length
console.log(`heads It took ${long} flips to flip 1 head in a row.`);

}
