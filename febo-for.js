function feboFor(n){
let febo = [0, 1];
    for(let i = 2; i <= n; i++){
        febo[i] = febo[i-1] + febo[i-2];

    }
    return febo;
}

let result = feboFor(15);
console.log(result);