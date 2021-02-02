let arr = [5, 20, 7, 9, 44, 15, 13];
let max = arr[0];

for(let i = 0; i<arr.length; i++){
    let item = arr[i];
    if(item > max){
        max = item;
    }
    
}
console.log(max);
