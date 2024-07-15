const solution = (x, n) => {
    const arr = [];
    let num = x; // 2
    for(let i = 1; i <= n; i++){        
        arr.push(num);
        num = num + x;
    }
    return arr;
}