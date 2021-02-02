function isPrime(n){
for(let i = 2; i < n; i++){
    if(n % i == 0){
        return "not a prime number";
    }
}
return "is a prime number";
}

let result = isPrime(72);
console.log(result);