function toCheckPrime(n){
    for(let i = 2; i <= n; i++){
        if(n % i == 0){
            return "is not a prime number";
        }
        else{
            return "is prime number";
        }
    }
}

let result = toCheckPrime(6);
console.log("Output:", result);