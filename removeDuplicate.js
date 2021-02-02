let arr = [10, 5, 4, 5, 6, 8, 10];
let newArr = [];

for(let i = 0; i < arr.length; i++){
    let item = arr[i];
    let index = newArr.indexOf(item)
    if(index == -1){
        newArr.push(item);
    }
}

console.log(newArr);
