// arr = [4, 9, 12, 43, 15, 40, 32];

// let sum = 0;
// for(let i = 0; i < arr.length; i++){
    
//      sum = sum + arr[i];
// }

// console.log(sum);


function sumOfArray(){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
    
     sum = sum + arr[i];
}
return sum;
}

let arr = [4, 9, 12, 43, 15, 50, 50, 40, 32];

let total = sumOfArray(arr);
console.log(total);