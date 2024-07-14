const solution = n => {
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 1) arr.push(i);
    }
    return arr.reduce((a,b) => a < b ? parseInt(a) : parseInt(b));
}