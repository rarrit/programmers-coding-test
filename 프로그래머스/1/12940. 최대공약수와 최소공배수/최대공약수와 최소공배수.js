const solution = (n,m) => {
    let num1 = [];
    let num2 = [];
    
    for(let i = 1; i <= n; i ++){
        if(n % i === 0) num1.push(i)    
    }

    for(let j = 1; j <= m; j ++){
        if(m % j === 0) num2.push(j)    
    }
    
    let divisor = num1.filter(list => num2.includes(list));
    let result1 = Math.max(...divisor);

    let result2 = (n * m) / result1;
    
    return [result1, result2];
}

solution(2,5);