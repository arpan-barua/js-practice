function feboWhile(n){
    let febo = [0, 1];
    let i = 2;
        while(i <= n){
            febo[i] = febo[i-1] + febo[i-2];
            i++;
    
        }
        return febo;
    }
    
    let result = feboWhile(20);
    console.log(result);