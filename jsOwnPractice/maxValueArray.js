arr = [12, 4, 9, 13, 22, 40, 8]

let max = arr[0];
for(let i = 0; i < arr.length; i++){
    let element = arr[i];
    if(element > max){
        max = element;
    }
    
}

console.log(max);
    