function feboRecursive(n){
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    else {
        return feboRecursive(n-1) + feboRecursive(n-2);
    }
}

let result = feboRecursive(15);
console.log(result);
