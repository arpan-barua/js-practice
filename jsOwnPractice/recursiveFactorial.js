function recursiveFact(n){
    if(n == 0){
        return 1;
    }
    else{
       return n * recursiveFact(n-1);
    }
  
}

let result = recursiveFact(3);
console.log(result);