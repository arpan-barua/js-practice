function factorial(n){
    let fact = 1;
    let i = 1;
    while(i <= n){
        fact = fact * i;
        i++;
    }
    return fact;
    
    }
    
    const result = factorial(4);
    
    console.log(result);