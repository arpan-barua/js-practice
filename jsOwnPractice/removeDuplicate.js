let arr = [4, 5, 10, 5, 7,10];
let newArr = [];
for(let i = 0; i < arr.length; i++){
    let element = arr[i];
    let index = newArr.indexOf(element);
    if(index == -1){
        newArr.push(element);
    }
}

console.log(newArr);